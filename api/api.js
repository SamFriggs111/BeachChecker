const noticeText = {
    Intro: "Due to the close of the summer season, congestion statuses will be continually reviewed and updated when required.", Desc: "Groyne renewal works are taking place between Alum & Middle Chine until Spring 2021"
} // Pretend value from database

const helpText = "Colour coded maps are for guidance only and predict likely crowding of promenade and beach areas today based on previous footfall, CCTV, weather patterns and observation. Information is then updated via live observation by the Seafront Team between 11am - 5pm.";

const warnings = [
    {colour: "red", text: "Avoid, safe social distancing not possible"},
    {colour: "orange", text: "Congested, stay alert"},
    {colour: "green", text: "Low congestion"}
]

export const getNoticeText = () => {
    if (typeof noticeText !== 'undefined')
        return noticeText;
    else
        return { Intro: "No notices at this time", Desc: "All updates will be displayed here" };
}

export const getHelpText = () => {
    if (typeof helpText !== 'undefined')
        return helpText;
    else
        return "No advice at this time";
}

export const getCongestion = () => {
    if (typeof warnings !== 'undefined')
        return warnings;
}

// export default getNoticeText;