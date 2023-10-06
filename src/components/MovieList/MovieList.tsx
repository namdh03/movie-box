import { Grid } from "@mui/material";
import MovieItem from "./MovieItem";
import dummy from "./MovieList.dummy";
import { MovieListBox, MovieListDecor } from "./MovieList.styled";

const MovieList = () => {
    return (
        <MovieListBox>
            <MovieListDecor />

            <Grid
                container
                position="relative"
                rowGap="20px"
                columnGap="24px"
                maxWidth="1200px"
                justifyContent="center"
            >
                {dummy.movies.map((film) => (
                    <Grid key={film.id} item>
                        <MovieItem movie={film} />
                    </Grid>
                ))}
            </Grid>
        </MovieListBox>
    );
};

export default MovieList;
