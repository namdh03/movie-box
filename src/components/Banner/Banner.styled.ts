import { Box, Typography, styled } from "@mui/material";
import theme from "@themes/index";

export const BannerSection = styled(Box)`
    padding-top: 160px;
    background: ${theme.palette.background.main};
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
