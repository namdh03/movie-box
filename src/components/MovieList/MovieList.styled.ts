import { Box, styled } from "@mui/material";
import theme from "@themes/index";

export const MovieListBox = styled(Box)`
    position: relative;
`;

export const MovieListDecor = styled(Box)`
    &::before {
        content: "";
        display: block;
        position: absolute;
        left: 356px;
        bottom: 108px;
        width: 402px;
        height: 267px;
        transform: rotate(-135deg);
        border-radius: 402px;
        background: ${theme.palette.tertiary?.[35]};
        filter: blur(175px);
    }

    &::after {
        content: "";
        display: block;
        position: absolute;
        right: 10px;
        bottom: 141px;
        width: 488px;
        height: 345px;
        background-color: ${theme.palette.success[47]};
        filter: blur(175px);
        opacity: 0.5;
    }
`;
