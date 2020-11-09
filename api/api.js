const noticeText = {
  Title: "Notice:",
  Intro:
    "Due to the close of the summer season, congestion statuses will be continually reviewed and updated when required.",
  Desc:
    "Groyne renewal works are taking place between Alum & Middle Chine until Spring 2021",
}; // Pretend value from database

const helpText =
  "Colour coded maps are for guidance only and predict likely crowding of promenade and beach areas today based on previous footfall, CCTV, weather patterns and observation. Information is then updated via live observation by the Seafront Team between 11am - 5pm.";

const warnings = [
  { colour: "red", text: "Avoid at all costs" },
  { colour: "orange", text: "Congested, stay alert" },
  { colour: "green", text: "Low congestion" },
];

const beachData = [
  {
    id: 1,
    title: "Sandbanks Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.684458, longitude: -1.943336 },
      { name: "bottomLeft", latitude: 50.684172, longitude: -1.942885 },
      { name: "middleBottom", latitude: 50.686721, longitude: -1.938336 },
      { name: "bottomRight", latitude: 50.691848, longitude: -1.932911 },
      { name: "topRight", latitude: 50.692025, longitude: -1.933362 },
      { name: "middleTop", latitude: 50.687437, longitude: -1.939664 },
    ],
    latitude: 50.684374,
    longitude: -1.93533,
    image: require("../assets/beaches/sandbanks.jpg"),
    congestion: "Low",
    polygonColour: "rgba(15, 209, 24, 0.4)",
    iconColour: "#0fd118",
  },
  {
    id: 2,
    title: "Shore Road Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.692025, longitude: -1.933362 },
      { name: "bottomLeft", latitude: 50.691848, longitude: -1.932911 },
      { name: "bottomRight", latitude: 50.698219, longitude: -1.923943 },
      { name: "topRight", latitude: 50.698389, longitude: -1.924319 },
    ],
    latitude: 50.691949,
    longitude: -1.926466,
    image: require("../assets/beaches/shore-road.jpg"),
    congestion: "Fair",
    polygonColour: "rgba(230, 226, 16, 0.4)",
    iconColour: "#fff429",
  },
  {
    id: 3,
    title: "Canford Cliffs Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.698389, longitude: -1.924319 },
      { name: "bottomLeft", latitude: 50.698219, longitude: -1.923943 },
      { name: "bottomRight", latitude: 50.704329, longitude: -1.913027 },
      { name: "topRight", latitude: 50.704519, longitude: -1.913375 },
      { name: "middleTop", latitude: 50.701721, longitude: -1.91912 },
    ],
    latitude: 50.699198,
    longitude: -1.916598,
    image: require("../assets/beaches/canford.jpg"),
    congestion: "Low",
    polygonColour: "rgba(15, 209, 24, 0.4)",
    iconColour: "#0fd118",
  },
  {
    id: 4,
    title: "Branksome Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.704519, longitude: -1.913375 },
      { name: "bottomLeft", latitude: 50.704329, longitude: -1.913027 },
      { name: "bottomRight", latitude: 50.707354, longitude: -1.906306 },
      { name: "topRight", latitude: 50.70766, longitude: -1.906429 },
    ],
    latitude: 50.703257,
    longitude: -1.908429,
    image: require("../assets/beaches/branksome-chine.jpg"),
    congestion: "Low",
    polygonColour: "rgba(15, 209, 24, 0.4)",
    iconColour: "#0fd118",
  },
  {
    id: 5,
    title: "Branksome Dene Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.70766, longitude: -1.906429 },
      { name: "bottomLeft", latitude: 50.707354, longitude: -1.906306 },
      { name: "bottomRight", latitude: 50.70974, longitude: -1.899223 },
      { name: "topRight", latitude: 50.709998, longitude: -1.899438 },
    ],
    latitude: 50.7061,
    longitude: -1.902826,
    image: require("../assets/beaches/Branksome-Dene-beach.jpg"),
    congestion: "High",
    polygonColour: "rgba(194, 16, 16, 0.6)",
    iconColour: "#c21010",
  },
  {
    id: 6,
    title: "Alum Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.709999, longitude: -1.899438 },
      { name: "bottomLeft", latitude: 50.70974, longitude: -1.899223 },
      { name: "bottomRight", latitude: 50.711558, longitude: -1.893613 },
      { name: "topRight", latitude: 50.711806, longitude: -1.893869 },
    ],
    latitude: 50.708538,
    longitude: -1.895851,
    image: require("../assets/beaches/alum-chine-beach.jpg"),
    congestion: "Fair",
    polygonColour: "rgba(230, 226, 16, 0.4)",
    iconColour: "#fff429",
  },
  {
    id: 7,
    title: "Middle Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.711806, longitude: -1.893869 },
      { name: "bottomLeft", latitude: 50.711558, longitude: -1.893613 },
      { name: "bottomRight", latitude: 50.712605, longitude: -1.890202 },
      { name: "topRight", latitude: 50.71289, longitude: -1.890403 },
    ],
    latitude: 50.710574,
    longitude: -1.890481,
    image: require("../assets/beaches/middle-chine.jpg"),
    congestion: "High",
    polygonColour: "rgba(194, 16, 16, 0.6)",
    iconColour: "#c21010",
  },
  {
    id: 8,
    title: "Durley Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.71289, longitude: -1.890403 },
      { name: "bottomLeft", latitude: 50.712605, longitude: -1.890202 },
      { name: "bottomRight", latitude: 50.713961, longitude: -1.883971 },
      { name: "topRight", latitude: 50.714348, longitude: -1.88425 },
    ],
    latitude: 50.712379,
    longitude: -1.88556,
    image: require("../assets/beaches/durley-chine.jpg"),
    congestion: "Fair",
    polygonColour: "rgba(230, 226, 16, 0.4)",
    iconColour: "#fff429",
  },
  {
    id: 9,
    title: "Bournemouth Beach West",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.714348, longitude: -1.88425 },
      { name: "bottomLeft", latitude: 50.713961, longitude: -1.883971 },
      { name: "bottomRight", latitude: 50.715626, longitude: -1.875517 },
      { name: "topRight", latitude: 50.715949, longitude: -1.875681 },
    ],
    latitude: 50.712309,
    longitude: -1.879122,
    image: require("../assets/beaches/bm-west.jpg"),
    congestion: "High",
    polygonColour: "rgba(194, 16, 16, 0.6)",
    iconColour: "#c21010",
  },
  {
    id: 10,
    title: "Bournemouth Beach East",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.715949, longitude: -1.875681 },
      { name: "bottomLeft", latitude: 50.715626, longitude: -1.875517 },
      { name: "bottomRight", latitude: 50.716917, longitude: -1.868381 },
      { name: "topRight", latitude: 50.717216, longitude: -1.868456 },
    ],
    latitude: 50.71391,
    longitude: -1.87043,
    image: require("../assets/beaches/bm-east.jpg"),
    congestion: "High",
    polygonColour: "rgba(194, 16, 16, 0.6)",
    iconColour: "#c21010",
    congestion: "Fair",
    polygonColour: "rgba(230, 226, 16, 0.4)",
    iconColour: "#fff429",
  },
];

export const getDefaultRegion = () => {
  return {
    latitude: 50.711602,
    longitude: -1.874435,
    latitudeDelta: 0.02,
    longitudeDelta: 0.01,
  };
};

const addMarkers = () => {
  beachData.forEach((element) => {
    let topLeft, bottomRight;
    element.polygonCoordinates.forEach((point) => {
      if (point.name == "topLeft" && !topLeft) {
        topLeft = { lat: point.latitude, lng: point.longitude };
      }
      if (point.name == "bottomRight" && !bottomRight) {
        bottomRight = { lat: point.latitude, lng: point.longitude };
      }
    });
    if (topLeft && bottomRight) {
      let marker = {
        latitude: (topLeft.lat + bottomRight.lat) / 2,
        longitude: (topLeft.lng + bottomRight.lng) / 2,
      };
      element.marker = marker;
    }
  });
};

const addPolygonColours = () => {
  beachData.forEach((element) => {
    if (element.congestion == "High") {
      element.polygonColour = "rgba(194, 16, 16, 0.6)";
      element.iconColour = "#c21010";
    } else if (element.congestion == "Fair") {
      element.polygonColour = "rgba(230, 226, 16, 0.4)";
      element.iconColour = "#fff429";
    } else if (element.congestion == "Low") {
      element.polygonColour = "rgba(15, 209, 24, 0.4)";
      element.iconColour = "#0fd118";
    }
  });
};

export const getBeachData = () => {
  // addPolygonColours();
  console.log(beachData);
  return beachData;
};

export const getNoticeText = () => {
  if (typeof noticeText !== "undefined") return noticeText;
  else
    return {
      Intro: "No notices at this time",
      Desc: "All updates will be displayed here",
    };
};

export const getHelpText = () => {
  if (typeof helpText !== "undefined") return helpText;
  else return "No advice at this time";
};

export const getCongestion = () => {
  if (typeof warnings !== "undefined") return warnings;
};
