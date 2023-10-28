import { Container, Typography } from "@mui/material";
import Decor from "@components/Decor";
import MovieList from "@components/MovieList";
import Search from "@components/Search";
import theme from "@themes/index";
import { TVShowSection } from "./TVShow.styled";
import dummy from "@components/MovieList/MovieList.dummy";

const TVShow = () => {
    return (
        <TVShowSection>
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
                            TV Shows
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

                <MovieList movies={dummy.tvShow} />
            </Container>
        </TVShowSection>
    );
};

export default TVShow;
