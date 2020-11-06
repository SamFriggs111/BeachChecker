import React, { useCallback, memo, useRef, useState } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image
} from "react-native";
import MapView from "react-native-maps";
import { getDefaultRegion } from ".././api/api";
import {
  FontAwesome,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons
} from "@expo/vector-icons";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const slideList = Array.from({ length: 8 }).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
    title: `Branksome Chine Beach`,
    subtitle: `Low congestion`
  };
});

const Slide = memo(function Slide({ data }) {
  return (
    <View style={styles.slide}>
      <View style={styles.innerSlide}>
        <Text style={styles.slideTitle}>{data.title}</Text>
        <Image source={{ uri: data.image }} style={styles.slideImage}></Image>
        <View style={styles.warning}>
          <FontAwesome name="circle" size={20} color="red" />
          <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
        </View>
        <View style={styles.features}>
          <FontAwesome5 name="toilet" size={20} color="green" />
          <Entypo name="lifebuoy" size={20} color="red" />
          <FontAwesome5 name="dog" size={20} color="green" />
          <FontAwesome5 name="bicycle" size={20} color="red" />
          <MaterialCommunityIcons name="grill" size={20} color="green" />
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
                : styles.paginationDotInactive
            ]}
          />
        );
      })}
    </View>
  );
}

const defaultRegion = getDefaultRegion();
const region = defaultRegion;

const FaqPage = () => {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;

  const onScroll = useCallback(event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;

    const roundIndex = Math.round(index);
    const distance = Math.abs(roundIndex - index);

    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      console.log("roundIndex2", roundIndex);
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: false,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback(s => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth
      }),
      []
    )
  };

  const renderItem = useCallback(function renderItem({ item }) {
    return <Slide data={item} />;
  }, []);

  return (
    <>
      <MapView style={styles.mapStyle} region={region}></MapView>
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

export default FaqPage;

const styles = StyleSheet.create({
  slide: {
    width: windowWidth,
    alignItems: "center"
  },
  innerSlide: {
    paddingHorizontal: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    borderRadius: 20
  },
  warning: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomColor: "rgba(158, 150, 150, .25)",
    borderTopColor: "rgba(158, 150, 150, .25)",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 35,
    alignItems: "center"
  },
  features: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "70%",
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  slideImage: {
    width: windowWidth * 0.65,
    height: windowHeight * 0.15,
    borderRadius: 5
  },
  slideTitle: {
    fontSize: 20,
    backgroundColor: "white",
    margin: 10
  },
  slideSubtitle: {
    fontSize: 14,
    backgroundColor: "white",
    marginHorizontal: 10
  },
  pagination: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row"
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2
  },
  paginationDotActive: {
    backgroundColor: "white"
  },
  paginationDotInactive: {
    backgroundColor: "gray"
  },
  carousel: {
    position: "absolute",
    bottom: 30
  },
  mapStyle: {
    zIndex: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
