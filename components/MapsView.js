import React, { useRef, useState } from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
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
import * as Animatable from "react-native-animatable";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const beachData = getBeachData();

const MapsPage = ({ route }) => {
  const startingBeach = beachData[4];
  const [cardData, setCard] = useState(startingBeach);
  const [index, setIndex] = useState(startingBeach.id - 1);

  const indexRef = useRef(index);
  const mapRef = useRef(null);
  const AnimationRef = useRef(null);

  const slideList = Array.from({ length: beachData.length }).map((_, i) => {
    const beach = beachData[i];
    return {
      id: i,
      image: beach.image,
      title: beach.title,
      congestion: `Low congestion`,
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
                  : styles.paginationDotInactive,
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
          style={styles.sliderArrow}
          underlayColor="white"
          onPress={() => changeBeachDirection("left")}
        >
          <Entypo name="arrow-left" size={32} color="white" />
        </TouchableNativeFeedback>
        <View style={styles.innerSlide}>
          <Text style={styles.slideTitle}>{cardData.title}</Text>
          <View style={styles.sliders}>
            <Image
              source={cardData.image ? cardData.image : null}
              style={styles.slideImage}
            ></Image>
          </View>
          <View style={styles.warning}>
            <FontAwesome name="circle" size={20} color="#0fd119" />
            <Text style={styles.slideSubtitle}>No congestion</Text>
          </View>
          <View style={styles.features}>
            <FontAwesome5 name="toilet" size={20} color="#0fd119" />
            <Entypo name="lifebuoy" size={20} color="red" />
            <FontAwesome5 name="dog" size={20} color="#0fd119" />
            <FontAwesome5 name="bicycle" size={20} color="red" />
            <MaterialCommunityIcons name="grill" size={20} color="#0fd119" />
          </View>
        </View>
        <TouchableNativeFeedback
          style={styles.sliderArrow}
          underlayColor="white"
          onPress={() => changeBeachDirection("right")}
        >
          <Entypo name="arrow-right" size={32} color="white" />
        </TouchableNativeFeedback>
      </Animatable.View>
    );
  };
  indexRef.current = index;

  useFocusEffect(() => {
    if (route.params) setCard(route.params.region);
    if (mapRef.current) {
      route.params = null;
      console.log("trigger");
      mapRef.current.animateToRegion(
        {
          latitude: cardData.latitude,
          longitude: cardData.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        2000
      );
      setIndex(cardData.id - 1);
    }
  }, []);

  const PolygonViews = () => {
    return beachData.map((data) => (
      <Polygon
        fillColor="rgba(15, 209, 24, 0.4)"
        coordinates={data.polygonCoordinates}
      />
    ));
  };

  const changeBeachDirection = (direction) => {
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
    <View>
      <MapView
        style={styles.mapStyle}
        region={cardData}
        ref={mapRef}
        // onPress={test}
      >
        <PolygonViews></PolygonViews>
      </MapView>
      <AnimatedCard></AnimatedCard>
      <Pagination index={index}></Pagination>
    </View>
  );
};

export default MapsPage;

const styles = StyleSheet.create({
  slide: {
    width: windowWidth,
    alignItems: "center",
    // backgroundColor: "white",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  innerSlide: {
    paddingHorizontal: 10,
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
    width: windowWidth * 0.55,
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
    bottom: 140,
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
    bottom: 160,
  },
  mapStyle: {
    zIndex: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  sliders: {
    flexDirection: "row",
    alignItems: "center",
  },
  sliderArrow: {
    padding: 10,
  },
});
