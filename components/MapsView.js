import React, { useCallback, memo, useRef, useState } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MapView, { Polygon } from "react-native-maps";
import { getBeachData } from "../api/api";
import { useFocusEffect } from "@react-navigation/native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const beachData = getBeachData();

const slideList = Array.from({ length: beachData.length }).map((_, i) => {
  const beach = beachData[i];
  return {
    id: i,
    image: beach.image,
    title: beach.title,
    congestion: `Low congestion`,
  };
});

const Slide = memo(function Slide({ data }) {
  return (
    <View style={styles.slide}>
      <View style={styles.innerSlide}>
        <Text style={styles.slideTitle}>{data.title}</Text>
        <Image source={data.image} style={styles.slideImage}></Image>
        <View style={styles.warning}>
          <FontAwesome name="circle" size={20} color="#0fd119" />
          <Text style={styles.slideSubtitle}>{data.congestion}</Text>
        </View>
        <View style={styles.features}>
          <FontAwesome5 name="toilet" size={20} color="#0fd119" />
          <Entypo name="lifebuoy" size={20} color="red" />
          <FontAwesome5 name="dog" size={20} color="#0fd119" />
          <FontAwesome5 name="bicycle" size={20} color="red" />
          <MaterialCommunityIcons name="grill" size={20} color="#0fd119" />
        </View>
      </View>
    </View>
  );
});

function Pagination({ index }) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

const MapsPage = ({ route }) => {
  let [region, setRegion] = useState(beachData[0]);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  const mapRef = useRef(null);

  indexRef.current = index;
  if (route.params) region = route.params.region;
  // console.log("region.route", route.params.region);
  // console.log("region", region);

  useFocusEffect(() => {
    // console.log(region);
    if (mapRef.current) {
      route.params = null;
      mapRef.current.animateToRegion(
        {
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        2000
      );
      // setIndex(region.id - 1);
    }
  }, []);

  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;

    const roundIndex = Math.round(index);
    const distance = Math.abs(roundIndex - index);
    const isNoMansLand = 0.4 < distance;
    // console.log(indexRef.current);

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      // console.log("slideSize", slideSize);
      console.log("index", event);
      // console.log("roundIndex", roundIndex);
      // console.log("distance", distance);
      // console.log("isNoMansLand", isNoMansLand);

      // console.log(indexRef.current);
      setIndex(roundIndex);
      setRegion(beachData[roundIndex]);
    }
  }, []);

  const flatListOptimizationProps = {
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((s) => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      []
    ),
  };

  const renderItem = useCallback(function renderItem({ item }) {
    // console.log("item", item);
    return <Slide data={item} />;
  }, []);

  const PolygonViews = () => {
    return beachData.map((data) => (
      <Polygon
        fillColor="rgba(15, 209, 24, 0.4)"
        coordinates={data.polygonCoordinates}
      />
    ));
  };

  return (
    <>
      <MapView style={styles.mapStyle} region={region} ref={mapRef}>
        <PolygonViews></PolygonViews>
      </MapView>
      <FlatList
        data={slideList}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination index={index}></Pagination>
    </>
  );
};

export default MapsPage;

const styles = StyleSheet.create({
  slide: {
    width: windowWidth,
    alignItems: "center",
  },
  innerSlide: {
    paddingHorizontal: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    borderRadius: 20,
  },
  warning: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomColor: "rgba(158, 150, 150, .25)",
    borderTopColor: "rgba(158, 150, 150, .25)",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 35,
    alignItems: "center",
  },
  features: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "70%",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  slideImage: {
    width: windowWidth * 0.65,
    height: windowHeight * 0.15,
    borderRadius: 5,
  },
  slideTitle: {
    fontSize: 20,
    backgroundColor: "white",
    margin: 10,
  },
  slideSubtitle: {
    fontSize: 14,
    backgroundColor: "white",
    marginHorizontal: 10,
  },
  pagination: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: {
    backgroundColor: "white",
  },
  paginationDotInactive: {
    backgroundColor: "gray",
  },
  carousel: {
    position: "absolute",
    bottom: 30,
  },
  mapStyle: {
    zIndex: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
