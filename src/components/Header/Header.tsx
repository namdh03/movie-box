// MdOutlineDarkMode
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { Avatar, Box, Container, Toolbar } from "@mui/material";
import logo from "@assets/svgs/logo.svg";
import configs from "@configs/index";
import * as St from "./Header.styled";
import nav from "./Header.nav";

const Header = () => {
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

                        <MdOutlineLightMode size={24} cursor="pointer" />
                    </St.Navbar>
                </Toolbar>
            </Container>
        </St.Header>
    );
};

export default Header;
