import { AppBar, Box, styled } from "@mui/material";
import theme from "@themes/index";

export const Header = styled(AppBar)`
    padding: 8px 0;
    background-color: ${theme.palette.background.header};
    box-shadow: none;
    backdrop-filter: blur(20px);

    & .MuiToolbar-root {
        padding: 0;
    }
`;

export const Navbar = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 16px;
    margin-left: auto;

    & a {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 8px;
        padding: 12px 16px;
        color: ${theme.palette.neutralGrey?.[19]};
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: 0.32px;

        &.active {
            color: ${theme.palette.success.main};
        }
    }
`;
