import blackWidowImg from "@assets/images/black-widow.jpg";
import blackWidowBanner from "@assets/images/black-widow-banner.jpg";
import shangChiImg from "@assets/images/shang-chi.jpg";
import shangChiBanner from "@assets/images/shang-chi-banner.jpg";
import endgameImg from "@assets/images/endgame.jpg";
import endgameBanner from "@assets/images/endgame-banner.jpg";
import captainMarvelImg from "@assets/images/captain-marvel.jpg";
import captainMarvelBanner from "@assets/images/captain-marvel-banner.jpg";
import captainAmericaImg from "@assets/images/captain-america.jpg";
import captainAmericaBanner from "@assets/images/captain-america-banner.jpg";
import theAvengersImg from "@assets/images/the-avengers.jpg";
import theAvengersBanner from "@assets/images/the-avengers-banner.jpg";
import ageOfUltronImg from "@assets/images/age-of-ultron.jpg";
import ageOfUltronBanner from "@assets/images/age-of-ultron-banner.jpg";
import infinityWarImg from "@assets/images/infinity-war.jpg";
import infinityWarBanner from "@assets/images/infinity-war-banner.jpg";
import lostInSpaceImg from "@assets/images/lost-in-space.jpg";
import lostInSpaceBanner from "@assets/images/lost-in-space-banner.jpg";

export interface IMovie {
    id: number;
    rating: number;
    title: string;
    poster: string;
    thumbnail: string;
    trailer: string;
    type: string;
    quote: string;
    plot: string;
    release_date: string;
    run_time: string;
    genres: string[];
}

interface ITVShow {
    id: number;
    rating: number;
    title: string;
    poster: string;
    type: string;
    thumbnail: string;
    trailer: string;
    status: string;
    quote: string;
    plot: string;
    first_air_date: string;
    last_air_date: string;
    no_of_seasons: number;
    no_of_episodes: number;
    episode_run_time: string;
    genres: string[];
}

interface IDummy {
    movies: IMovie[];
    tvShow: ITVShow[];
}

const dummy: IDummy = {
    movies: [
        {
            id: 0,
            rating: 6.7,
            title: "Black Widow",
            poster: blackWidowImg,
            thumbnail: blackWidowBanner,
            trailer:
                "https://www.youtube.com/embed/ybji16u608U?si=b9aCHi9mKgLb5QOP",
            type: "Movies",
            quote: "I used to have nothing. Then I got this job…this family…but nothing lasts forever.",
            plot: `In Marvel Studios' action-packed spy thriller "Black Widow," Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.`,
            release_date: "2021-07-08",
            run_time: "134",
            genres: ["Action", "Adventure", "Sci-Fi"],
        },
        {
            id: 1,
            rating: 7.4,
            title: "Shang Chi",
            poster: shangChiImg,
            thumbnail: shangChiBanner,
            trailer:
                "https://www.youtube.com/embed/giWIr7U1deA?si=J7p5FHBfU-3wlP12",
            type: "Movies",
            quote: "If You Aim At Nothing, You Hit Nothing.",
            plot: "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
            release_date: "2021-09-02",
            run_time: "132",
            genres: ["Action", "Adventure", "Fantasy"],
        },
        {
            id: 2,
            rating: 7.3,
            title: "Avengers: Age of Ultron",
            poster: ageOfUltronImg,
            thumbnail: ageOfUltronBanner,
            trailer:
                "https://www.youtube.com/embed/tmeOjFno6Do?si=sojwKC4VdKW5NH6u",
            type: "Movies",
            quote: "What Doesn't Kill Me Makes Me Stronger.",
            plot: "Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction.",
            release_date: "2015-04-30",
            run_time: "141",
            genres: ["Action", "Adventure", "Sci-Fi"],
        },
        {
            id: 3,
            rating: 6.8,
            title: "Captain Marvel",
            poster: captainMarvelImg,
            thumbnail: captainMarvelBanner,
            trailer:
                "https://www.youtube.com/embed/Z1BCujX3pw8?si=sFw-aDxfE3Z1-fpU",
            type: "Movies",
            quote: "I'm not what you think I am.",
            plot: "After crashing an experimental aircraft, Air Force pilot Carol Danvers is discovered by the Kree and trained as a member of the elite Starforce Military under the command of her mentor Yon-Rogg. Six years later, after escaping to Earth while under attack by the Skrulls, Danvers begins to discover there's more to her past. With help from S.H.I.E.L.D. agent Nick Fury, they set out to unravel the truth.",
            release_date: "2019-03-06",
            run_time: "123",
            genres: ["Action", "Adventure", "Sci-Fi"],
        },
        {
            id: 4,
            rating: 6.9,
            title: "Captain America",
            poster: captainAmericaImg,
            thumbnail: captainAmericaBanner,
            trailer:
                "https://www.youtube.com/embed/JerVrbLldXw?si=p8ubScGtjzuvHywW",
            type: "Movies",
            quote: "I Don't Like Bullies. I Don't Care Where They're From.",
            plot: "It is 1942, America has entered World War II, and sickly but determined Steve Rogers is frustrated at being rejected yet again for military service. Everything changes when Dr. Erskine recruits him for the secret Project Rebirth. Proving his extraordinary courage, wits and conscience, Rogers undergoes the experiment and his weak body is suddenly enhanced into the maximum human potential. When Dr. Erskine is then immediately assassinated by an agent of Nazi Germany's secret HYDRA research department (headed by Johann Schmidt, a.k.a. the Red Skull), Rogers is left as a unique man who is initially misused as a propaganda mascot; however, when his comrades need him, Rogers goes on a successful adventure that truly makes him Captain America, and his war against Schmidt begins.",
            release_date: "2011-09-01",
            run_time: "124",
            genres: ["Action", "Adventure", "Sci-Fi"],
        },
        {
            id: 5,
            rating: 8.4,
            title: "Avengers: Endgame",
            poster: endgameImg,
            thumbnail: endgameBanner,
            trailer:
                "https://www.youtube.com/embed/TcMBFSGVi1c?si=ANKJE3hWJN_Qd9Mp",
            type: "Movies",
            quote: "Part of the journey is the end.",
            plot: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
            release_date: "2019-04-24",
            run_time: "181",
            genres: ["Action", "Adventure", "Sci-Fi"],
        },
        {
            id: 6,
            rating: 8.0,
            title: "The Avengers",
            poster: theAvengersImg,
            thumbnail: theAvengersBanner,
            trailer:
                "https://www.youtube.com/embed/eOrNdBpGMv8?si=C3_G02VFBRY5mixX",
            type: "Movies",
            quote: "There Was An Idea... To Bring Together A Group Of Remarkable People To See If They Could Become Something More.",
            plot: "Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a. the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner, a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and the alien invasion.",
            release_date: "2012-05-03",
            run_time: "143",
            genres: ["Action", "Sci-Fi"],
        },
        {
            id: 7,
            rating: 8.4,
            title: "Avengers: Infinity War",
            poster: infinityWarImg,
            thumbnail: infinityWarBanner,
            trailer:
                "https://www.youtube.com/embed/6ZfuNTqbHE8?si=Afx4O4Du8c8wfbog",
            type: "Movies",
            quote: "It's all right. It's all right. I love you.",
            plot: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.",
            release_date: "2018-04-26",
            run_time: "149",
            genres: ["Action", "Adventure", "Sci-Fi"],
        },
    ],
    tvShow: [
        {
            id: 0,
            rating: 8.1,
            title: "Lost In Space",
            poster: lostInSpaceImg,
            thumbnail: lostInSpaceBanner,
            trailer:
                "https://www.youtube.com/embed/fzmM0AB60QQ?si=xV1gSuFUa7CuYV1F",
            type: "TV Show",
            status: "Returning Series",
            quote: "Have You Seen Our Robot?",
            plot: "The mission to save Scarecrow takes an unexpected turn, throwing the Resolute into chaos. Judy hatches a plan to get a ship to Alpha Centauri.",
            first_air_date: "2018-04-13",
            last_air_date: "2019-04-24",
            no_of_seasons: 2,
            no_of_episodes: 20,
            episode_run_time: "56",
            genres: ["Action", "Adventure", "Sci-Fi", "Fantasy", "Drama"],
        },
    ],
};

export default dummy;
