const noticeText = {
    Intro: "Due to the close of the summer season, congestion statuses will be continually reviewed and updated when required.", Desc: "Groyne renewal works are taking place between Alum & Middle Chine until Spring 2021"
} // Pretend value from database

const getNoticeText = () => {
    if (typeof noticeText !== 'undefined')
        return noticeText;
    else
        return { Intro: "No notices at this time", Desc: "All updates will be displayed here" };
}

export default getNoticeText;

// const getBeachData = () => {
//     return "test";
// }