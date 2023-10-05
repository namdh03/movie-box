import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { Container, InputAdornment, InputLabel } from "@mui/material";
import * as St from "./Banner.styled";

const Banner = () => {
    return (
        <St.BannerSection component="section">
            <Container disableGutters>
                <St.BannerContent>
                    <St.BannerTitle variant="h1">MaileHereko</St.BannerTitle>
                    <St.BannerDesc variant="body1">
                        List of movies and TV Shows, I,
                        <Link to="https://www.linkedin.com/in/pramod-poudel-phd-6335ab17">
                            Pramod Poudel
                        </Link>
                        have watched till date. Explore what I have watched and
                        also feel free to make a suggestion. 😉
                    </St.BannerDesc>
                    <St.BannerSearch
                        id="banner-search"
                        placeholder="Search Movies or TV Shows"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <InputLabel htmlFor="banner-search">
                                        <RiSearch2Line
                                            size={24}
                                            cursor="pointer"
                                        />
                                    </InputLabel>
                                </InputAdornment>
                            ),
                        }}
                    />
                </St.BannerContent>
            </Container>
        </St.BannerSection>
    );
};

export default Banner;
