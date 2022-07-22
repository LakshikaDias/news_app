const newsList = [
  { headline: "headline1", summary: "summary1", details: "details1" },
  { headline: "headline2", summary: "summary2", details: "details2" },
  { headline: "headline3", summary: "summary3", details: "details3" },
  { headline: "headline4", summary: "summary4", details: "details4" },
];

export default newsList;

export function getRelatedData(headline) {
  return newsList.find((data) => data.headline === headline);
}
