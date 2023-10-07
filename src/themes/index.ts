import { PaletteColorOptions, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    // allow configuration using `createTheme`
    interface PaletteOptions {
        neutralGrey?: PaletteColorOptions;
        neutralWhite?: PaletteColorOptions;
        neutralBlack?: PaletteColorOptions;
        tertiary?: PaletteColorOptions;
    }

    interface Palette {
        neutralGrey?: PaletteColor;
        neutralWhite?: PaletteColor;
        neutralBlack?: PaletteColor;
        tertiary?: PaletteColor;
    }

    interface PaletteColor {
        47?: string;
        35?: string;
        25?: string;
        23?: string;
        21?: string;
        19?: string;
        15?: string;
        13?: string;
        9?: string;
        7?: string;
        6?: string;
        5?: string;
        2?: string;
        1?: string;
    }

    interface SimplePaletteColorOptions {
        47?: string;
        35?: string;
        25?: string;
        23?: string;
        21?: string;
        19?: string;
        15?: string;
        13?: string;
        9?: string;
        7?: string;
        6?: string;
        5?: string;
        2?: string;
        1?: string;
    }

    interface TypeBackground {
        main?: string;
        header?: string;
        card?: string;
    }
}

const theme = createTheme({
    typography: {
        fontFamily: "'Poppins', sans-serif",
    },
    palette: {
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
    },
});

export { default as globalStyles } from "./globalStyles";
export default theme;
