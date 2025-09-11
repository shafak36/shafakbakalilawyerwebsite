"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Urbanist, sans-serif",
  },
  palette: {
    primary: {
      main: "#2c5086",
    },
    secondary: {
      main: "#297d70",
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
