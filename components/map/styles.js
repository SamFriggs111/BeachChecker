import { StyleSheet, Dimensions } from "react-native";
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  slide: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 0,
    justifyContent: "center",
  },
  innerSlide: {
    paddingHorizontal: 10,
    backgroundColor: "white",
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
    height: windowHeight * 0.125,
    borderRadius: 5,
  },
  slideTitle: {
    fontSize: 20,
    margin: 10,
  },
  close: {
    position: "absolute",
    right: 10,
    top: 5,
  },
  slideSubtitle: {
    fontSize: 14,
    marginHorizontal: 10,
  },
  pagination: {
    position: "absolute",
    bottom: 150,
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
    margin: 15,
  },
});

export const welcomeMessage = StyleSheet.create({
  slideTitle: {
    marginTop: 10,
    fontSize: 20,
    margin: 5,
    textDecorationLine: "underline",
  },
  slideDesc: {
    paddingVertical: 10,
    width: 200,
    textAlign: "center",
  },
  warning: {
    flexDirection: "row",
    borderBottomColor: "rgba(158, 150, 150, .25)",
    borderTopColor: "rgba(158, 150, 150, .25)",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 30,
    alignItems: "center",
    textAlign: "left",
    marginBottom: 10,
  },
  congestionView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 40,
    width: 225,
    marginBottom: 8,
  },
  congestionText: {
    marginLeft: 10,
    fontSize: 14,
  },
  close: {
    position: "absolute",
    right: 10,
    top: 5,
  },
});
