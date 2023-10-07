import { useContext } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import {
    Avatar,
    Box,
    Container,
    IconButton,
    Toolbar,
    useTheme,
} from "@mui/material";

import logo from "@assets/svgs/logo.svg";
import { ColorModeContext } from "@components/ToggleColorMode/ToggleColorMode";
import configs from "@configs/index";

import nav from "./Header.nav";
import * as St from "./Header.styled";

const Header = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <St.Header position="fixed">
            <Container maxWidth="lg">
                <Toolbar>
                    <Link to={configs.routes.home}>
                        <Avatar alt="MaileHereko" src={logo} />
                    </Link>

                    <St.Navbar component="nav">
                        {nav.map((page) => (
                            <Box key={page.id}>{page.label}</Box>
                        ))}

                        <IconButton
                            onClick={colorMode.toggleColorMode}
                            color="inherit"
                        >
                            {theme.palette.mode === "dark" ? (
                                <MdOutlineDarkMode size={24} />
                            ) : (
                                <MdOutlineLightMode size={24} />
                            )}
                        </IconButton>
                    </St.Navbar>
                </Toolbar>
            </Container>
        </St.Header>
    );
};

export default Header;
