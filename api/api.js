const noticeText = {
  Intro:
    "Due to the close of the summer season, congestion statuses will be continually reviewed and updated when required.",
  Desc:
    "Groyne renewal works are taking place between Alum & Middle Chine until Spring 2021"
}; // Pretend value from database

const helpText =
  "Colour coded maps are for guidance only and predict likely crowding of promenade and beach areas today based on previous footfall, CCTV, weather patterns and observation. Information is then updated via live observation by the Seafront Team between 11am - 5pm.";

const warnings = [
  { colour: "red", text: "Avoid, safe social distancing not possible" },
  { colour: "orange", text: "Congested, stay alert" },
  { colour: "green", text: "Low congestion" }
];

const beachData = [
  {
    title: "Branksome Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.704519, longitude: -1.913375 },
      { name: "bottomLeft", latitude: 50.704329, longitude: -1.913027 },
      { name: "bottomRight", latitude: 50.707354, longitude: -1.906306 },
      { name: "topRight", latitude: 50.70766, longitude: -1.906429 }
    ],
    latitude: 50.703257,
    longitude: -1.908429,
    // latitude: 50.700071,
    // longitude: -1.921545,
    latitudeDelta: 0.012,
    longitudeDelta: 0.012,
    beachInfo: [
      {
        congestion: [
          {
            severity: "Low",
            colour: "green"
          }
        ]
      },
      { lifeguarded: "" },
      { toilets: "" },
      { dogs: "" },
      { cycling: "" },
      { bbq: "" }
    ],
    image: require("../assets/beaches/branksome-chine.jpg")
  },
  {
    title: "Branksome Dene Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.70766, longitude: -1.906429 },
      { name: "bottomLeft", latitude: 50.707354, longitude: -1.906306 },
      { name: "bottomRight", latitude: 50.70974, longitude: -1.899223 },
      { name: "topRight", latitude: 50.709998, longitude: -1.899438 }
    ],
    latitude: 50.7061,
    longitude: -1.902826,
    latitudeDelta: 0.012,
    longitudeDelta: 0.012,
    beachInfo: [
      {
        congestion: [
          {
            severity: "Low",
            colour: "green"
          }
        ]
      },
      { lifeguarded: "" },
      { toilets: "" },
      { dogs: "" },
      { cycling: "" },
      { bbq: "" }
    ],
    image: require("../assets/beaches/Branksome-Dene-beach.jpg")
  },
  {
    id: 1,
    title: "Alum Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.709999, longitude: -1.899438 },
      { name: "bottomLeft", latitude: 50.70974, longitude: -1.899223 },
      { name: "bottomRight", latitude: 50.711558, longitude: -1.893613 },
      { name: "topRight", latitude: 50.711806, longitude: -1.893869 }
    ],
    latitude: 50.708538,
    longitude: -1.895851,
    latitudeDelta: 0.012,
    longitudeDelta: 0.012,
    image: require("../assets/beaches/alum-chine-beach.jpg")
  }
];

export const getDefaultRegion = () => {
  return {
    latitude: 50.715733 - 0.0025,
    longitude: -1.875273,
    latitudeDelta: 0.008,
    longitudeDelta: 0.008
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

// export default getNoticeText;
