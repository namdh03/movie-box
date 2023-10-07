import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { globalStyles } from "@themes/index";
import App from "./App.tsx";
import ToggleColorMode from "@components/ToggleColorMode/ToggleColorMode.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ToggleColorMode>
            <Router>
                <CssBaseline />
                <App />
                <GlobalStyles styles={globalStyles} />
            </Router>
        </ToggleColorMode>
    </React.StrictMode>
);
