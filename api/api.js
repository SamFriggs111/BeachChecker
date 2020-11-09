// Dont forget welcome card
const noticeText = {
  Title: "Notice:",
  Intro:
    "Due to the close of the summer season, congestion statuses will be continually reviewed and updated when required.",
  Desc:
    "Groyne renewal works are taking place between Alum & Middle Chine until Spring 2021"
};

const helpText =
  "Colour coded maps are for guidance only and predict likely crowding of promenade and beach areas today based on previous footfall, CCTV, weather patterns and observation. Information is then updated via live observation by the Seafront Team between 11am - 5pm.";

const warnings = [
  { id: 1, colour: "red", text: "Avoid at all costs" },
  { id: 2, colour: "orange", text: "Congested, stay alert" },
  { id: 3, colour: "green", text: "Low congestion" }
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
      { name: "middleTop", latitude: 50.687437, longitude: -1.939664 }
    ],
    latitude: 50.684374,
    longitude: -1.93533,
    congestion: "Low congestion",
    polygonColour: "rgba(15, 209, 24, 0.4)",
    iconColour: "#0fd118",
    lifeguarded: "Lifeguarded: No",
    toilets: "Public toilets: Yes",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted in the designated area only"
  },
  {
    id: 2,
    title: "Shore Road Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.692025, longitude: -1.933362 },
      { name: "bottomLeft", latitude: 50.691848, longitude: -1.932911 },
      { name: "bottomRight", latitude: 50.698219, longitude: -1.923943 },
      { name: "topRight", latitude: 50.698389, longitude: -1.924319 }
    ],
    latitude: 50.691949,
    longitude: -1.926466,
    congestion: "Fair congestion",
    polygonColour: "rgba(230, 226, 16, 0.4)",
    iconColour: "#fff429",
    lifeguarded: "Lifeguarded: Yes",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Not permitted",
    bbq: "BBQs: After 6PM only"
  },
  {
    id: 3,
    title: "Canford Cliffs Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.698389, longitude: -1.924319 },
      { name: "bottomLeft", latitude: 50.698219, longitude: -1.923943 },
      { name: "bottomRight", latitude: 50.704329, longitude: -1.913027 },
      { name: "topRight", latitude: 50.704519, longitude: -1.913375 },
      { name: "middleTop", latitude: 50.701721, longitude: -1.91912 }
    ],
    latitude: 50.699198,
    longitude: -1.916598,
    congestion: "Low congestion",
    polygonColour: "rgba(15, 209, 24, 0.4)",
    iconColour: "#0fd118",
    lifeguarded: "Lifeguarded: Yes",
    toilets: "Public toilets: Yes",
    dogs: "Dogs may exercise: Yes",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted in the designated area only"
  },
  {
    id: 4,
    title: "Branksome Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.704519, longitude: -1.913375 },
      { name: "bottomLeft", latitude: 50.704329, longitude: -1.913027 },
      { name: "bottomRight", latitude: 50.707354, longitude: -1.906306 },
      { name: "topRight", latitude: 50.70766, longitude: -1.906429 }
    ],
    latitude: 50.703257,
    longitude: -1.908429,
    congestion: "Low congestion",
    polygonColour: "rgba(15, 209, 24, 0.4)",
    iconColour: "#0fd118",
    lifeguarded: "Lifeguarded: No",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted in the designated area only"
  },
  {
    id: 5,
    title: "Branksome Dene Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.70766, longitude: -1.906429 },
      { name: "bottomLeft", latitude: 50.707354, longitude: -1.906306 },
      { name: "bottomRight", latitude: 50.70974, longitude: -1.899223 },
      { name: "topRight", latitude: 50.709998, longitude: -1.899438 }
    ],
    latitude: 50.7061,
    longitude: -1.902826,

    congestion: "High congestion",
    polygonColour: "rgba(194, 16, 16, 0.6)",
    iconColour: "#c21010",
    lifeguarded: "Lifeguarded: Yes",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Not permitted",
    bbq: "BBQs: After 6PM only"
  },
  {
    id: 6,
    title: "Alum Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.709999, longitude: -1.899438 },
      { name: "bottomLeft", latitude: 50.70974, longitude: -1.899223 },
      { name: "bottomRight", latitude: 50.711558, longitude: -1.893613 },
      { name: "topRight", latitude: 50.711806, longitude: -1.893869 }
    ],
    latitude: 50.708538,
    longitude: -1.895851,
    congestion: "Fair congestion",
    polygonColour: "rgba(230, 226, 16, 0.4)",
    iconColour: "#fff429",
    lifeguarded: "Lifeguarded: No",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted in the designated area only"
  },
  {
    id: 7,
    title: "Middle Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.711806, longitude: -1.893869 },
      { name: "bottomLeft", latitude: 50.711558, longitude: -1.893613 },
      { name: "bottomRight", latitude: 50.712605, longitude: -1.890202 },
      { name: "topRight", latitude: 50.71289, longitude: -1.890403 }
    ],
    latitude: 50.710574,
    longitude: -1.890481,
    congestion: "High congestion",
    polygonColour: "rgba(194, 16, 16, 0.6)",
    iconColour: "#c21010",
    lifeguarded: "Lifeguarded: Yes",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Not permitted",
    bbq: "BBQs: After 6PM only"
  },
  {
    id: 8,
    title: "Durley Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.71289, longitude: -1.890403 },
      { name: "bottomLeft", latitude: 50.712605, longitude: -1.890202 },
      { name: "bottomRight", latitude: 50.713961, longitude: -1.883971 },
      { name: "topRight", latitude: 50.714348, longitude: -1.88425 }
    ],
    latitude: 50.712379,
    longitude: -1.88556,
    congestion: "Fair congestion",
    polygonColour: "rgba(230, 226, 16, 0.4)",
    iconColour: "#fff429",
    lifeguarded: "Lifeguarded: No",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: Yes",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted"
  },
  {
    id: 9,
    title: "Bournemouth Beach West",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.714348, longitude: -1.88425 },
      { name: "bottomLeft", latitude: 50.713961, longitude: -1.883971 },
      { name: "bottomRight", latitude: 50.715626, longitude: -1.875517 },
      { name: "topRight", latitude: 50.715949, longitude: -1.875681 }
    ],
    latitude: 50.712309,
    longitude: -1.879122,
    congestion: "High congestion",
    polygonColour: "rgba(194, 16, 16, 0.6)",
    iconColour: "#c21010",
    lifeguarded: "Lifeguarded: Yes",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Not permitted",
    bbq: "BBQs: After 6PM only"
  },
  {
    id: 10,
    title: "Bournemouth Beach East",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.715949, longitude: -1.875681 },
      { name: "bottomLeft", latitude: 50.715626, longitude: -1.875517 },
      { name: "bottomRight", latitude: 50.716917, longitude: -1.868381 },
      { name: "topRight", latitude: 50.717216, longitude: -1.868456 }
    ],
    latitude: 50.71391,
    longitude: -1.87043,
    congestion: "Fair congestion",
    polygonColour: "rgba(230, 226, 16, 0.4)",
    iconColour: "#fff429",
    lifeguarded: "Lifeguarded: No",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted in the designated area only"
  },
  {
    id: 11,
    title: "East Cliff",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.717216, longitude: -1.868456 },
      { name: "bottomLeft", latitude: 50.716917, longitude: -1.868381 },
      { name: "bottomRight", latitude: 50.717542, longitude: -1.863511 },
      { name: "topRight", latitude: 50.717844, longitude: -1.863618 }
    ],
    latitude: 50.716129,
    longitude: -1.864576,
    congestion: "High congestion",
    polygonColour: "rgba(194, 16, 16, 0.6)",
    iconColour: "#c21010",
    lifeguarded: "Lifeguarded: Yes",
    toilets: "Public toilets: Yes",
    dogs: "Dogs may exercise: Yes",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted in the designated area only"
  },
  {
    id: 12,
    title: "Boscombe Beach West",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.717844, longitude: -1.863618 },
      { name: "bottomLeft", latitude: 50.717542, longitude: -1.863511 },
      { name: "bottomRight", latitude: 50.718916, longitude: -1.851067 },
      { name: "topRight", latitude: 50.719235, longitude: -1.851099 }
    ],
    latitude: 50.716195,
    longitude: -1.85691,
    congestion: "Low congestion",
    polygonColour: "rgba(15, 209, 24, 0.4)",
    iconColour: "#0fd118",
    lifeguarded: "Lifeguarded: No",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: Yes",
    cycling: "Cycling: Permitted",
    bbq: "BBQs: Permitted in the designated area only"
  },
  {
    id: 13,
    title: "Boscombe Beach East",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.719235, longitude: -1.851099 },
      { name: "bottomLeft", latitude: 50.718916, longitude: -1.851067 },
      { name: "bottomRight", latitude: 50.720073, longitude: -1.83492 },
      { name: "topRight", latitude: 50.720468, longitude: -1.834999 }
    ],
    latitude: 50.715191,
    longitude: -1.842264,
    congestion: "Fair congestion",
    polygonColour: "rgba(230, 226, 16, 0.4)",
    iconColour: "#fff429",
    lifeguarded: "Lifeguarded: Yes",
    toilets: "Public toilets: No",
    dogs: "Dogs may exercise: No",
    cycling: "Cycling: Not permitted",
    bbq: "BBQs: After 6PM only"
  }
];

export const getDefaultRegion = () => {
  return {
    latitude: 50.711602,
    longitude: -1.874435,
    latitudeDelta: 0.0017,
    longitudeDelta: 0.0017
  };
};

export const getBeachData = () => {
  return beachData;
};

export const getNoticeText = () => {
  if (typeof noticeText !== "undefined") return noticeText;
  else
    return {
      Intro: "No notices at this time",
      Desc: "All updates will be displayed here"
    };
};

export const getHelpText = () => {
  if (typeof helpText !== "undefined") return helpText;
  else return "No advice at this time";
};

export const getCongestion = () => {
  if (typeof warnings !== "undefined") return warnings;
};
