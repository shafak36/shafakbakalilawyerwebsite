"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Urbanist, sans-serif",
  },
  palette: {
    primary: {
      light: "#9BACCA",
      main: "#354664",
      dark: "#121721",
    },
    secondary: {
      light: "#C9BA9C",
      main: "#635436",
      dark: "#211C12",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          borderRadius: "64px",
          textTransform: "none",
          fontWeight: 500,
        }),
        sizeSmall: {
          fontSize: "14px",
        },
        sizeMedium: {
          fontSize: "16px",
        },
        sizeLarge: {
          fontSize: "18px",
        },
      },
    },
  },
});

export default theme;
