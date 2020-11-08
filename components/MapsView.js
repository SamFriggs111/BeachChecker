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
  AntDesign,
} from "@expo/vector-icons";
import MapView, { Polygon } from "react-native-maps";
import { getBeachData } from "../api/api";
import { useFocusEffect } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const beachData = getBeachData();

const MapsPage = ({ route }) => {
  // let region = beachData[0];
  const [cardData, setCard] = useState(beachData[4]);
  // const [index, setIndex] = useState(0);
  // const indexRef = useRef(index);
  const mapRef = useRef(null);
  const AnimationRef = useRef(null);

  const AnimatedCard = () => {
    return (
      <Animatable.View
        ref={AnimationRef}
        animation="flipInY"
        iterationCount={1}
        direction="alternate"
        style={[styles.slide, styles.carousel]}
      >
        <View style={styles.innerSlide}>
          <Text style={styles.slideTitle}>
            {/* {typeof cardData !== "undefined" ? cardData.title : "teST"} */}
            {cardData.title}
          </Text>
          <View style={styles.sliders}>
            <TouchableNativeFeedback
              style={styles.sliderArrow}
              underlayColor="white"
              onPress={changeBeach}
            >
              <Entypo name="arrow-left" size={32} color="black" />
            </TouchableNativeFeedback>
            <Image
              source={cardData.image ? cardData.image : null}
              style={styles.slideImage}
            ></Image>
            {/* <TouchableHighlight
              style={styles.sliderArrow}
              underlayColor="white"
              onPress={changeBeach("right")}
            >
              <Entypo name="arrow-right" size={32} color="black" />
            </TouchableHighlight> */}
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
      </Animatable.View>
    );
  };

  // indexRef.current = index;
  // if (route.params) setCard(route.params.region);

  useFocusEffect(() => {
    if (route.params) {
      console.log("region", route.params.region);
      setCard(route.params.region);
    }
    // console.log("region", route.params.region);
    // setCard(region);
    // setCard(route.params.region);
    if (mapRef.current) {
      // console.log("focus2", region);
      route.params = null;
      mapRef.current.animateToRegion(
        {
          latitude: cardData.latitude,
          longitude: cardData.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        2000
      );
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

  const changeBeach = () => {
    console.log("changed to", beachData[5]);
    setCard(beachData[5]);
    // console.log(region);
    // AnimationRef.current.flipOutY();
    // AnimationRef.current.flipInY();
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
    </View>
  );
};

export default MapsPage;

const styles = StyleSheet.create({
  slide: {
    width: windowWidth,
    alignItems: "center",
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
  carousel: {
    position: "absolute",
    bottom: 140,
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
