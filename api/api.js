const noticeText = {
  Intro:
    "Due to the close of the summer season, congestion statuses will be continually reviewed and updated when required.",
  Desc:
    "Groyne renewal works are taking place between Alum & Middle Chine until Spring 2021",
}; // Pretend value from database

const helpText =
  "Colour coded maps are for guidance only and predict likely crowding of promenade and beach areas today based on previous footfall, CCTV, weather patterns and observation. Information is then updated via live observation by the Seafront Team between 11am - 5pm.";

const warnings = [
  { colour: "red", text: "Avoid, safe social distancing not possible" },
  { colour: "orange", text: "Congested, stay alert" },
  { colour: "green", text: "Low congestion" },
];

// latitude: 50.711054,
// longitude: -1.895746,
// latitudeDelta: 0.008,
// longitudeDelta: 0.008

const beachData = [
  {
    title: "Branksome Dene Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.70746, longitude: -1.906429 },
      { name: "bottomLeft", latitude: 50.707354, longitude: -1.906306 },
      { name: "bottomRight", latitude: 50.70974, longitude: -1.899223 },
      { name: "topRight", latitude: 50.709998, longitude: -1.899228 },
    ],
    latitude: (50.70746 + 50.70974) / 2,
    longitude: (-1.906429 + -1.899223) / 2,
    latitudeDelta: 0.008,
    longitudeDelta: 0.008,
    beachInfo: [
      {
        congestion: [
          {
            severity: "Low",
            colour: "green",
          },
        ],
      },
      { lifeguarded: "" },
      { toilets: "" },
      { dogs: "" },
      { cycling: "" },
      { bbq: "" },
      { img: "" },
      { warning: "" },
    ],
  },
  {
    title: "Alum Chine Beach",
    polygonCoordinates: [
      { name: "topLeft", latitude: 50.709998, longitude: -1.899228 },
      { name: "bottomLeft", latitude: 50.70974, longitude: -1.899223 },
      { name: "bottomRight", latitude: 50.711558, longitude: -1.893613 },
      { name: "topRight", latitude: 50.711806, longitude: -1.893869 },
    ],
    latitude: 50.710778,
    longitude: -1.8964205,
    latitudeDelta: 0.008,
    longitudeDelta: 0.008,
  },
];

export const getDefaultRegion = () => {
  return {
    latitude: 50.715733,
    longitude: -1.875273,
    latitudeDelta: 0.008,
    longitudeDelta: 0.008,
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

// export default getNoticeText;
