export const ROUTES = [
  { pathname: "/", title: "About" },
  { pathname: "/data", title: "Data" },
  {
    pathname: "/methods",
    title: "Methods",
    children: [
      { pathname: "/methods/data-sources", title: "Data sources" },
      { pathname: "/methods/yield-response", title: "Yield response" },
      { pathname: "/methods/lime-requirements", title: "Lime requirements" },
      {
        pathname: "/methods/profitability-assessment",
        title: "Profitability assessment",
      },
      { pathname: "/methods/software", title: "Software" },
    ],
  },
  { pathname: "/publications", title: "Publications" },
  { pathname: "/downloads", title: "Downloads" },
  { pathname: "/partners", title: "Partners" },
];

export const SIDEBAR_WIDTH_PX = 400;

export const DEFAULT_LIME_PRICE = "60";
