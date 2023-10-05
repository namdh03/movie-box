import { Box, Button, ButtonGroup, Typography, styled } from "@mui/material";
import theme from "@themes/index";

export const MovieSection = styled(Box)`
    padding: 80px 0 160px;
`;

export const MovieNavbar = styled(ButtonGroup)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 12px;
    background: ${theme.palette.neutralBlack?.[2]};
    backdrop-filter: blur(40px);
`;

export const MovieNavbarItem = styled(Button)`
    padding: 8px 32px;
    color: ${theme.palette.neutralGrey?.[15]};
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.32px;
    text-transform: capitalize;

    &.MuiButton-contained {
        color: ${theme.palette.primary[23]};
        background-color: ${theme.palette.primary[13]};
    }
`;

export const MovieLabelWrapper = styled(Typography)`
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin: 24px 0;

    & .MuiTypography-root {
        color: ${theme.palette.neutralGrey?.[13]};
        font-size: 3.2rem;
        font-weight: 600;
        line-height: 1.25;
        letter-spacing: -0.64px;
    }

    & .MuiTypography-root:last-child {
        font-size: 1.6rem;
        font-weight: 400;
        letter-spacing: unset;
    }
`;
