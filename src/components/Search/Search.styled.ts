import { TextField, styled } from "@mui/material";
import theme from "@themes/index";

export const SearchWrapper = styled(TextField)`
    position: relative;
    margin-top: 24px;
    min-width: 344px;

    & .MuiInputBase-root {
        padding: 0;
    }

    &.MuiTextField-root {
        border-radius: 12px;
        border: 1px solid ${theme.palette.neutralGrey?.[5]};
        background: ${theme.palette.neutralBlack?.[1]};
    }

    & .MuiInputBase-input {
        padding: 16px 12px 16px 8px;
        color: ${theme.palette.neutralGrey?.[23]};
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.14286;
    }

    & .MuiInputBase-input::placeholder {
        color: ${theme.palette.neutralGrey?.[13]};
    }

    & .MuiOutlinedInput-notchedOutline {
        border: transparent;
    }

    & .MuiFormLabel-root {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 16px;
    }

    & svg {
        color: ${theme.palette.neutralGrey?.[9]};
    }

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 250px;
        height: 150px;
        background-color: ${theme.palette.secondary[25]};
        filter: blur(80px);
        opacity: 0.9;
    }
`;
