import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#53de62",
        light: "#53de62",
        dark: "#8ADE53",
        contrastText: "#1E2439",
      },
      secondary: {
        light: "#ffb74d",
        main: "#53de62",
        dark: "#8ADE53",
        contrastText: "#1E2439",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: `${500} !important`,
          },
        },
      },
      MuiCircularProgress: {
        styleOverrides: {
          root: {
            width: "25px !important",
            height: "25px !important",
          },
        },
      },
    },
  }),
);

export default theme;
