import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import theme from "@themes/index";
import { Link } from "react-router-dom";
import configs from "@configs/index";
import { IMovie, ITVShow } from "@/components/MovieList/MovieList.dummy";
import Rating from "@components/Rating";

const MovieItem = ({ movie }: { movie: IMovie | ITVShow }) => {
    let url = `${configs.routes.tvShow}/${movie.id}`;

    if (movie.type === "Movies") {
        url = `${configs.routes.movie}/${movie.id}`;
    }

    return (
        <Link to={url}>
            <Card
                sx={{
                    position: "relative",
                    width: "270px",
                    height: "100%",
                    padding: "8px",
                    borderRadius: "12px",
                    bgcolor: theme.palette.background.card,
                    backdropFilter: "blur(40px)",
                }}
            >
                <Rating
                    position="absolute"
                    top="18px"
                    left="16px"
                    rating={movie.rating}
                    bgColor={theme.palette.neutralBlack?.[6]}
                />
                <CardMedia
                    sx={{ height: "400px", borderRadius: "8px" }}
                    image={movie.poster}
                    title={movie.title}
                />
                <CardContent
                    sx={{
                        "&.MuiCardContent-root": {
                            paddingTop: "16px",
                            paddingBottom: "16px",
                        },
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            padding: "8px",
                            color: theme.palette.neutralGrey?.[23],
                            fontSize: "1.6rem",
                            fontWeight: 600,
                            lineHeight: 1.5,
                            letterSpacing: "0.32px",
                        }}
                    >
                        {movie.title}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default MovieItem;
