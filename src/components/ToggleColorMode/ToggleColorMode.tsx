import { PaletteMode, ThemeProvider, createTheme } from "@mui/material";
import { FC, PropsWithChildren, createContext, useMemo, useState } from "react";
import theme from "@themes/index";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        ...(mode === "light"
            ? theme.palette
            : {
                  primary: {
                      main: "#5A4AF4",
                      23: "#EBE9FE",
                      21: "#DEDBFD",
                      19: "#BEB7FB",
                      15: "#9C92F8",
                      13: "#7B6EF6",
                      9: "#483BC3",
                      7: "#120F31",
                      5: "#362C92",
                      1: "#362C92",
                  },
                  secondary: {
                      main: "#1EA5FC",
                      25: "#0C4265",
                  },
                  tertiary: {
                      main: "#B66DFF",
                      35: "#492C66",
                  },
                  success: {
                      main: "#05CE91",
                      47: "#02523A",
                  },
                  warning: {
                      main: "#FFAD49",
                  },
                  background: {
                      default: "#fff",
                      paper: "#fff",
                      main: "#121829",
                      header: "rgba(18, 24, 41, 0.80)",
                      card: "rgba(32, 40, 62, 0.80)",
                  },
                  neutralWhite: {
                      main: "#fff",
                  },
                  neutralBlack: {
                      main: "#000",
                      1: "rgba(0, 0, 0, 0.10)",
                      2: "rgba(0, 0, 0, 0.20)",
                      6: "rgba(0, 0, 0, 0.65)",
                  },
                  neutralGrey: {
                      main: "#61697F",
                      19: "#A8AEBF",
                      23: "#EBEEF5",
                      15: "#8E95A9",
                      13: "#767E94",
                      9: "#475069",
                      5: "#323B54",
                  },
              }),
        mode,
    },
});

const ToggleColorMode: FC<PropsWithChildren> = ({ children }) => {
    const [mode, setMode] = useState<PaletteMode>("light");
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const _theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={_theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ToggleColorMode;
