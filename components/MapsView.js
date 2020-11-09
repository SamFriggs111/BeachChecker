import React, { useRef, useState } from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  SafeAreaView
} from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign
} from "@expo/vector-icons";
import MapView, { Polygon, Marker, Callout } from "react-native-maps";
import { getBeachData } from "../api/api";
import { useFocusEffect } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const beachData = getBeachData();
// const [beachData, setBeachData] = useState(getBeachData());

const PolygonViews = () => {
  return beachData.map(data => (
    <Polygon
      key={data.id}
      fillColor={data.polygonColour}
      strokeColor={data.polygonColour}
      coordinates={data.polygonCoordinates}
    />
  ));
};

const startingBeach = () => {
  beachData[4].latitudeDelta = 0.017;
  beachData[4].longitudeDelta = 0.017;
  return beachData[4];
};

const MapsPage = ({ route }) => {
  const [cardData, setCard] = useState(startingBeach);
  const [index, setIndex] = useState(startingBeach.id - 1);

  const indexRef = useRef(index);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const AnimationRef = useRef(null);

  const slideList = Array.from({ length: beachData.length }).map((_, i) => {
    const beach = beachData[i];
    return {
      id: i,
      image: beach.image,
      title: beach.title,
      congestion: `Low congestion`
    };
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

  const AnimatedCard = () => {
    return (
      <Animatable.View
        ref={AnimationRef}
        animation="flipInY"
        iterationCount={1}
        direction="alternate"
        style={[styles.slide, styles.carousel]}
      >
        <TouchableNativeFeedback
          underlayColor="white"
          onPress={() => changeBeachDirection("left")}
        >
          <Ionicons
            style={styles.sliderArrow}
            name="ios-arrow-back"
            size={54}
            color="white"
          />
        </TouchableNativeFeedback>
        <View style={styles.innerSlide}>
          <TouchableNativeFeedback underlayColor="white" onPress={closeWindow}>
            <AntDesign
              style={styles.close}
              name="close"
              size={30}
              color="red"
            />
          </TouchableNativeFeedback>
          <AntDesign style={styles.close} name="close" size={30} color="red" />
          <View style={styles.titleView}>
            <Text style={styles.slideTitle}>{cardData.title}</Text>
          </View>
          <View style={styles.sliders}>
            <Image
              source={cardData.image ? cardData.image : null}
              style={styles.slideImage}
            ></Image>
          </View>
          <View style={styles.warning}>
            <FontAwesome name="circle" size={20} color={cardData.iconColour} />
            <Text style={styles.slideSubtitle}>
              {cardData.congestion} congestion
            </Text>
          </View>
          <View style={styles.features}>
            <FontAwesome5 name="toilet" size={20} color="black" />
            <Entypo name="lifebuoy" size={20} color="black" />
            <FontAwesome5 name="dog" size={20} color="black" />
            <FontAwesome5 name="bicycle" size={20} color="black" />
            <MaterialCommunityIcons name="grill" size={20} color="black" />
          </View>
        </View>
        <TouchableNativeFeedback
          underlayColor="white"
          onPress={() => changeBeachDirection("right")}
        >
          <Ionicons
            style={styles.sliderArrow}
            name="ios-arrow-forward"
            size={54}
            color="white"
          />
        </TouchableNativeFeedback>
      </Animatable.View>
    );
  };
  indexRef.current = index;

  useFocusEffect(() => {
    console.log(cardData);
    if (route.params) setCard(route.params.region);
    if (mapRef.current) {
      route.params = null;
      mapRef.current.animateToRegion(
        {
          latitude: cardData.latitude,
          longitude: cardData.longitude,
          latitudeDelta: 0.017,
          longitudeDelta: 0.017
        },
        2000
      );
      setIndex(cardData.id - 1);
    }
  }, []);

  const CustomCallouts = () => {
    return beachData.map(data => (
      <Marker ref={markerRef} coordinate={data.marker}>
        <Callout style={styles.callout}>
          <Text style={styles.calloutTitle}>{data.title}</Text>
        </Callout>
      </Marker>
    ));
  };

  const closeWindow = () => {
    console.log("test win");
    AnimationRef.current.flipOutY();
  };

  const changeBeachDirection = direction => {
    let index = cardData.id - 1;
    if (direction == "left") {
      setCard(beachData[index - 1]);
      setIndex(beachData[index - 1].id - 1);
    } else if (direction == "right") {
      setCard(beachData[index + 1]);
      setIndex(beachData[index + 1].id - 1);
    }
    AnimationRef.current.flipInY();
  };

  return (
    <SafeAreaView>
      <MapView
        style={styles.mapStyle}
        region={cardData}
        ref={mapRef}
        // onPress={test}
      >
        <PolygonViews></PolygonViews>
        {/* <CustomCallouts /> */}
      </MapView>
      <AnimatedCard></AnimatedCard>
      <Pagination index={index}></Pagination>
    </SafeAreaView>
  );
};

export default MapsPage;

const styles = StyleSheet.create({
  slide: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 0,
    justifyContent: "center"
  },
  innerSlide: {
    paddingHorizontal: 10,
    backgroundColor: "white",
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
    width: windowWidth * 0.55,
    height: windowHeight * 0.125,
    borderRadius: 5
  },
  slideTitle: {
    fontSize: 20,
    margin: 10
  },
  close: {
    position: "absolute",
    right: 10,
    top: 5
  },
  slideSubtitle: {
    fontSize: 14,
    marginHorizontal: 10
  },
  pagination: {
    position: "absolute",
    bottom: 150,
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
    bottom: 160
  },
  mapStyle: {
    zIndex: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  sliders: {
    flexDirection: "row",
    alignItems: "center"
  },
  sliderArrow: {
    margin: 15
  }
});
