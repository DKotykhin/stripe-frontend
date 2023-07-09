import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#00a1b6",
        },
    },
});

export { theme, ThemeProvider };
