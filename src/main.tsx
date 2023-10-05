import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme, { globalStyles } from "@themes/index";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Router>
                <CssBaseline />
                <App />
                <GlobalStyles styles={globalStyles} />
            </Router>
        </ThemeProvider>
    </React.StrictMode>
);
