import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
    Box,
    Breadcrumbs,
    Button,
    Container,
    Link,
    Typography,
} from "@mui/material";
import Rating from "@components/Rating";
import dummy, { IMovie, ITVShow } from "@components/MovieList/MovieList.dummy";
import configs from "@configs/index";
import * as St from "./MovieDetail.styled";
import theme from "@themes/index";

const MovieDetail = () => {
    const path = useLocation();
    const { movieId } = useParams();
    let movie: ITVShow | IMovie = dummy.movies[Number(movieId)];

    if (path.pathname.includes("tv-show")) {
        movie = dummy.tvShow[Number(movieId)];
    }
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <St.MovieDetailBannerSection component="section">
                <Container>
                    <St.MovieDetailBannerInner>
                        <St.MovieDetailBannerImg component="figure">
                            <img src={movie.thumbnail} alt="" />
                        </St.MovieDetailBannerImg>

                        <St.MovieDetailBannerContent>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link
                                    underline="none"
                                    color="inherit"
                                    href={configs.routes.home}
                                >
                                    MaileHereko
                                </Link>
                                <Link
                                    underline="none"
                                    color="inherit"
                                    href={configs.routes.movie}
                                >
                                    Movies
                                </Link>
                            </Breadcrumbs>

                            <Box>
                                <Typography variant="h1">
                                    {movie.title}
                                </Typography>

                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleOpen}
                                    >
                                        Watch Now
                                    </Button>

                                    <St.MovieDetailModal
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <Box>
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={movie.trailer}
                                                style={{
                                                    borderRadius: "40px",
                                                    border: "none",
                                                    boxShadow:
                                                        theme.palette.background
                                                            .card,
                                                }}
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                            />
                                        </Box>
                                    </St.MovieDetailModal>
                                </div>
                            </Box>
                        </St.MovieDetailBannerContent>
                    </St.MovieDetailBannerInner>
                </Container>
            </St.MovieDetailBannerSection>

            <St.MovieDetailBodySection component="section">
                <Container>
                    <St.MovieDetailBodyInner>
                        <St.MovieDetailPoster component="figure">
                            <img src={movie.poster} alt="" />
                        </St.MovieDetailPoster>

                        <St.MovieDetailContent>
                            <Typography variant="h2">{movie.quote}</Typography>

                            <Typography variant="body1">
                                {movie.plot}
                            </Typography>

                            <Rating
                                rating={movie.rating}
                                bgColor={theme.palette.neutralBlack?.[6]}
                            />

                            <St.MovieDetailInfo>
                                <Typography variant="h3">Type</Typography>
                                <Typography variant="body1">
                                    {movie.type}
                                </Typography>
                            </St.MovieDetailInfo>

                            <St.MovieDetailInfo>
                                <Typography variant="h3">
                                    Release Date:
                                </Typography>
                                <Typography variant="body1">
                                    {movie.release_date}
                                </Typography>
                            </St.MovieDetailInfo>

                            <St.MovieDetailInfo>
                                <Typography variant="h3">Run time</Typography>
                                <Typography variant="body1">
                                    {movie.run_time} min
                                </Typography>
                            </St.MovieDetailInfo>

                            <St.MovieDetailInfo>
                                <Typography variant="h3">Genres</Typography>
                                <Typography variant="body1">
                                    {movie.genres.join(", ")}
                                </Typography>
                            </St.MovieDetailInfo>
                        </St.MovieDetailContent>
                    </St.MovieDetailBodyInner>
                </Container>
            </St.MovieDetailBodySection>
        </>
    );
};

export default MovieDetail;
