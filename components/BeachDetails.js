import * as React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { getBeachData } from "./../api/api";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const beachData = getBeachData();

export default function BeachDetails() {
  return (
    <Animatable.View
      animation="flipInY"
      iterationCount={1}
      direction="alternate"
      style={[styles.slide, styles.carousel]}
    >
      <View style={styles.innerSlide}>
        <Text style={styles.slideTitle}>{beachData[0].title}</Text>
        <Image source={beachData[0].image} style={styles.slideImage}></Image>
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
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  titleIcon: {
    marginRight: 10,
  },
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
  carousel: {
    position: "absolute",
    bottom: 30,
  },
});
