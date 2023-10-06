import { Box, Button, Container, Typography } from "@mui/material";
import * as St from "./Suggest.styled";
import Decor from "@components/Decor";
import theme from "@themes/index";
import Search from "@components/Search";

const Suggest = () => {
    return (
        <St.SuggestSection>
            <Container maxWidth="lg">
                <Decor>
                    <>
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
                            Suggest me
                        </Typography>

                        <Typography
                            sx={{
                                display: "block",
                                marginTop: "16px",
                                color: theme.palette.neutralGrey?.[15],
                                fontSize: "1.6rem",
                                fontWeight: 400,
                                lineHeight: 1.5,
                            }}
                            variant="caption"
                        >
                            I will really appericiate it if you take time to
                            suggest me something good to watch.
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                columnGap: "8px",
                            }}
                        >
                            <Search />
                            <Button
                                sx={{
                                    marginTop: "24px",
                                    padding: "16px 32px",
                                    color: theme.palette.neutralWhite?.main,
                                    fontSize: "1.6rem",
                                    fontWeight: 400,
                                    lineHeight: 1.5,
                                    borderRadius: "12px",
                                    background: theme.palette.primary[13],
                                }}
                                variant="contained"
                            >
                                Search
                            </Button>
                        </Box>
                    </>
                </Decor>
            </Container>
        </St.SuggestSection>
    );
};

export default Suggest;
