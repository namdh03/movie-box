import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import Search from "@components/Search";
import Decor from "@components/Decor";
import * as St from "./Banner.styled";

const Banner = () => {
    return (
        <St.BannerSection component="section">
            <Container maxWidth="lg">
                <Decor>
                    <>
                        <St.BannerTitle variant="h1">
                            MaileHereko
                        </St.BannerTitle>
                        <St.BannerDesc variant="body1">
                            List of movies and TV Shows, I,
                            <Link to="https://www.linkedin.com/in/pramod-poudel-phd-6335ab17">
                                Pramod Poudel
                            </Link>
                            have watched till date. Explore what I have watched
                            and also feel free to make a suggestion. 😉
                        </St.BannerDesc>

                        <Search />
                    </>
                </Decor>
            </Container>
        </St.BannerSection>
    );
};

export default Banner;
