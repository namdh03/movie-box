import { Box, TextField, Typography, styled } from "@mui/material";
import theme from "@themes/index";

export const BannerSection = styled(Box)`
    padding-top: 160px;
`;

export const BannerContent = styled(Box)`
    position: relative;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 12px;
        right: -47px;
        width: 402px;
        height: 267px;
        transform: rotate(-135deg);
        border-radius: 402px;
        background: ${theme.palette.primary[1]};
        filter: blur(175px);
    }
`;

export const BannerTitle = styled(Typography)`
    color: ${theme.palette.neutralGrey?.[23]};
    font-size: 6.4rem;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -1.28px;
`;

export const BannerDesc = styled(Typography)`
    margin-top: 16px;
    max-width: 588px;
    color: ${theme.palette.neutralGrey?.[15]};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;

    & a {
        padding: 0 5px;
        color: ${theme.palette.primary[15]};
    }
`;

export const BannerSearch = styled(TextField)`
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
        width: 488px;
        height: 345px;
        background-color: ${theme.palette.secondary[25]};
        filter: blur(175px);
    }
`;
