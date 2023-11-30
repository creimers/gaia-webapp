export const ROUTES = [
  { pathname: "/", title: "About" },
  { pathname: "/data", title: "Data" },
  {
    pathname: "/methods",
    title: "Methods",
    children: [
      {
        pathname: "/methods/what-is-soil-acidity",
        title: "What is soil acidity?",
      },
      { pathname: "/methods/framework", title: "Framework" },
      { pathname: "/methods/data-sources", title: "Data Sources" },
      { pathname: "/methods/lime-requirements", title: "Lime requirements" },
      {
        pathname: "/methods/crop-yield-response",
        title: "Crop yield response",
      },
      {
        pathname: "/methods/profitability",
        title: "Profitability",
      },
    ],
  },
  { pathname: "/publications", title: "Publications" },
  { pathname: "/downloads", title: "Downloads" },
  { pathname: "/partners", title: "Partners" },
];

export const SIDEBAR_WIDTH_PX = 400;

export const DEFAULT_LIME_PRICE = "60";
