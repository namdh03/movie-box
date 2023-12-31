import { Container, Typography } from "@mui/material";
import Banner from "@components/Banner";
import MovieList from "@components/MovieList";
import dummy from "@components/MovieList/MovieList.dummy";
import * as St from "./Home.styled";

export default function Home() {
    return (
        <>
            <Banner />

            <St.MovieSection component="section">
                <Container maxWidth="lg">
                    <St.MovieNavbar size="large" variant="text">
                        <St.MovieNavbarItem variant="contained">
                            All
                        </St.MovieNavbarItem>
                        <St.MovieNavbarItem>Movies</St.MovieNavbarItem>
                        <St.MovieNavbarItem>TV Shows</St.MovieNavbarItem>
                    </St.MovieNavbar>

                    <St.MovieLabelWrapper variant="h2">
                        <Typography>All</Typography>
                        <Typography>(120)</Typography>
                    </St.MovieLabelWrapper>

                    <MovieList movies={dummy.movies} />
                </Container>
            </St.MovieSection>
        </>
    );
}
