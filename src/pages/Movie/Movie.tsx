import { Container, Typography } from "@mui/material";
import MovieList from "@components/MovieList";
import Decor from "@components/Decor";
import Search from "@components/Search";
import theme from "@themes/index";
import * as St from "./Movie.styled";

const Movie = () => {
    return (
        <St.MovieBannerSection component="section">
            <Container maxWidth="lg">
                <Decor>
                    <>
                        <Typography
                            sx={{
                                color: theme.palette.primary[19],
                                fontSize: "1.2rem",
                                fontWeight: 400,
                                lineHeight: 1.33333,
                            }}
                            variant="caption"
                        >
                            MaileHereko
                        </Typography>
                        <Typography
                            sx={{
                                color: theme.palette.neutralGrey?.[23],
                                fontSize: "6.4rem",
                                fontWeight: 600,
                                lineHeight: 1.25,
                                letterSpacing: "-1.28px",
                            }}
                            variant="h1"
                        >
                            Movies
                        </Typography>

                        <Search />

                        <Typography
                            sx={{
                                display: "block",
                                margin: "48px 0 24px",
                                color: theme.palette.neutralGrey?.[13],
                                fontSize: "1.6rem",
                                fontWeight: 400,
                                lineHeight: 1.5,
                            }}
                            variant="caption"
                        >
                            120 items
                        </Typography>
                    </>
                </Decor>

                <MovieList />
            </Container>
        </St.MovieBannerSection>
    );
};

export default Movie;
