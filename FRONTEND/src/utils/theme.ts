// import { getCookie } from "./cookie";

// export const light = getCookie("theme") === "1";
export const light = false;

export const theme = {
  breakpoint: {
    sm: 1024,
    md: 1280,
  },
  white: "#ffffff",
  blue: "#377dff",
  red: "#f93025",
  redError: "#d32f2f",
  green: "#1e8e3e",
  gold: "#f3ca20",
  text: "#2C2C2C",
  hover: "#007bff",
  mainColor: "#335eea",
  secondaryColor: "#108cff",
  disabledColor: "#939393",
  mainBorderColor: "#e3e3e3",
  blackPearl: "#061a2a",
  pastelGreen: "#55de61",
  conifer: "#8ade53",
  navyBlue: "#425792",
  lighBlue: "#f0f8fa",
  secondaryBorderColor: "#f3f3f3",
  body: {
    backgroundColor: light ? "#f4f6f8" : "#1c1e21",
    color: light ? "#101010" : "#e4e6eb",
  },
  button: {
    backgroundColor: light ? "#007bff" : "#007bff",
    backgroundColorHover: light ? "#108cff" : "#108cff",
    color: "#f4f6f8",
  },
  navBar: {
    backgroundColor: light ? "#007bff" : "#242526",
    borderColor: light ? "#e3e3e3" : "#393a3b",
    color: light ? "#ffffff" : "#007bff",
    toggler: light ? "#ffffff" : "#108cff",
  },
  navMenu: {
    backgroundColor: light ? "#f4f6f8" : "#1c1e21",
    borderColor: light ? "#e3e3e3" : "#242526",
    color: light ? "#101010" : "#e4e6eb",
  },
  searchBar: {
    backgroundColor: light ? "#ffffff" : "#242526",
    borderColor: light ? "#e3e3e3" : "#242526",
    color: light ? "#101010" : "#e4e6eb",
    controlBackgroundColor: light ? "#f4f6f8" : "#1c1e21",
  },
  joke: {
    backgroundColor: light ? "#ffffff" : "#242526",
    backgroundColorHover: light ? "#f4f6f8" : "#242526",
    color: light ? "#101010" : "#e4e6eb",
    borderColor: light ? "#e3e3e3" : "#242526",
  },
  summary: {
    backgroundColor: light ? "#ffffff" : "#242526",
    backgroundColorHover: light ? "#f4f6f8" : "#242526",
    color: light ? "#101010" : "#e4e6eb",
    borderColor: light ? "#e3e3e3" : "#242526",
  },
  section: {
    backgroundColor: light ? "#ffffff" : "#242526",
    backgroundColorHover: light ? "#f4f6f8" : "#242526",
    color: light ? "#101010" : "#e4e6eb",
    borderColor: light ? "#e3e3e3" : "#242526",
  },
  ranking: {
    backgroundColor: light ? "#ffffff" : "#242526",
    backgroundColorHover: light ? "#f4f6f8" : "#242526",
    color: light ? "#101010" : "#e4e6eb",
    borderColor: light ? "#e3e3e3" : "#242526",
  },
  rgpd: {
    backgroundColor: light ? "#f4f6f8" : "#242526",
    borderColor: light ? "#e3e3e3" : "#393a3b",
    color: light ? "#101010" : "#e4e6eb",
  },
  card: {
    backgroundColor: light ? "#f4f6f8" : "#242526",
    borderColor: light ? "#e3e3e3" : "#393a3b",
    color: light ? "#101010" : "#e4e6eb",
  },
  personalize: {
    backgroundColorHover: light ? "#108cff" : "#393a3b",
    color: light ? "#101010" : "#e4e6eb",
    borderValueColor: light ? "#ffffff" : "#242526",
    borderColor: light ? "#e3e3e3" : "#393a3b",
  },
  addJoke: {
    backgroundColor: light ? "#007bff" : "#393a3b",
    color: light ? "#e4e6eb" : "#939393",
  },
};
