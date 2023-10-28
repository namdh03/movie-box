import { Box, styled } from "@mui/material";
import theme from "@themes/index";

export const FooterSection = styled(Box)`
    padding-bottom: 50px;
    background-color: ${theme.palette.background.main};
    text-align: center;
    color: ${theme.palette.neutralGrey?.[19]};
`;
