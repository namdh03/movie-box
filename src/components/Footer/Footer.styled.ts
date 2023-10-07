import { Box, styled } from "@mui/material";
import theme from "@themes/index";

export const FooterSection = styled(Box)`
    padding: 8px 0;
    background-color: ${theme.palette.background.header};
    box-shadow: none;
    backdrop-filter: blur(20px);
    text-align: center;
    color: ${theme.palette.neutralGrey?.[19]};
`;
