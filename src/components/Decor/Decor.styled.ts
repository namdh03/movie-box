import { Box, styled } from "@mui/material";
import theme from "@themes/index";

export const DecorWrapper = styled(Box)`
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
