import { Grid } from "@mui/material";
import MovieItem from "./MovieItem";

const MovieList = () => {
    return (
        <Grid container rowGap="20px" columnGap="24px" justifyContent="center">
            <Grid item>
                <MovieItem
                    src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/285805248_1455312944900035_7083852304312506073_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=mnQltxT7oXQAX9EH_eP&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBkbspiqJWis1nfVNaCZBZWg-gAnAKcV4ruhAXhpytpdw&oe=65237C77"
                    title="🦖 #48HMOVEMENT2022"
                />
            </Grid>

            <Grid item>
                <MovieItem
                    src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/273113052_1370058890092108_5557553350760535319_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=J7BHEQhwx80AX9k_5a-&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfAIgq8ad-aO6MaMoCHiYlPnW03KrG2rUa4tn4B9_hx8xg&oe=65247F3E"
                    title=""
                />
            </Grid>

            <Grid item>
                <MovieItem
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.6435-9/135706101_1115656598865673_8019631250620964768_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7a1959&_nc_ohc=6IN0uYeNSNYAX89gqu4&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfB_4ydBtQXx73X9OReLFA5MxPmsyZW4SZjpa7AtzhQbmA&oe=654657A2"
                    title=""
                />
            </Grid>

            <Grid item>
                <MovieItem
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.6435-9/72546531_809482682816401_7056446742648061952_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7a1959&_nc_ohc=mpmYoZts1fcAX9d3rpl&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfBCUPRvpbVyGAxDj7i_wMBtBifThKJRv1_jPwYzbDAUsw&oe=65467104"
                    title=""
                />
            </Grid>
        </Grid>
    );
};

export default MovieList;
