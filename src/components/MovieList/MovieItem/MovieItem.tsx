import { AiOutlineStar } from "react-icons/ai";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import theme from "@themes/index";
import { Link } from "react-router-dom";
import configs from "@configs/index";

const MovieItem = ({ src, title }: { src: string; title: string }) => {
    return (
        <Link to={`${configs.routes.movie}/$`}>
            <Card
                sx={{
                    position: "relative",
                    width: "282px",
                    height: "480px",
                    padding: "8px",
                    borderRadius: "12px",
                    bgcolor: theme.palette.background.card,
                    backdropFilter: "blur(40px)",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 18,
                        left: 16,
                        display: "flex",
                        alignItems: "center",
                        columnGap: "4px",
                        padding: "4px 8px",
                        borderRadius: "8px",
                        background: theme.palette.neutralBlack?.[6],
                        backdropFilter: "blur(4px)",
                    }}
                >
                    <AiOutlineStar
                        color={theme.palette.warning.main}
                        size={16}
                    />
                    <Typography
                        sx={{
                            color: theme.palette.warning.main,
                            fontSize: "1.6rem",
                            fontWeight: 400,
                            lineHeight: 1.5,
                        }}
                    >
                        6.8
                    </Typography>
                </Box>
                <CardMedia
                    sx={{ height: "400px", borderRadius: "8px" }}
                    image={src}
                    title={title}
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
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default MovieItem;
