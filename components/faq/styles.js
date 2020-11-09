import { StyleSheet, Dimensions } from "react-native";
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "rgba(158, 150, 150, .25)",
    borderBottomWidth: 1,
  },
  textPadding: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  textNotice: {
    color: "red",
    fontSize: 24,
  },
  congestionView: {
    flexDirection: "row",
    paddingRight: 75,
    paddingLeft: 75,
  },
  congestionText: {
    marginLeft: 15,
  },
  congestionColour: {
    backgroundColor: "white",
  },
  noticeFlex: {
    flex: 1.2,
  },
  helpFlex: {
    flex: 1,
  },
  slide: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 0,
    justifyContent: "center",
  },
  innerSlide: {
    paddingHorizontal: 10,
    backgroundColor: "grey",
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

export default styles;
