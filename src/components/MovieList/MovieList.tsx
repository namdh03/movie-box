import { Grid } from "@mui/material";
import MovieItem from "./MovieItem";
import { MovieListBox, MovieListDecor } from "./MovieList.styled";
import { IMovie, ITVShow } from "./MovieList.dummy";

const MovieList = ({ movies }: { movies: ITVShow[] | IMovie[] }) => {
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
                {movies.map((film) => (
                    <Grid key={film.id} item>
                        <MovieItem movie={film} />
                    </Grid>
                ))}
            </Grid>
        </MovieListBox>
    );
};

export default MovieList;
