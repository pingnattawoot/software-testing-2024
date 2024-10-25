import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF7E00",
      contrastText: "#fff",
    },
    secondary: {
      main: "#0081FF",
      contrastText: "#fff",
    },
    error: {
      main: "#FF5757",
    },
  },
  typography: {
    fontFamily:
      '"IBM Plex Sans Thai", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
  },
});
