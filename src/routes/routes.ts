import configs from "@configs/index";
import MainLayout from "@layouts/MainLayout";
import Contact from "@pages/Contact";
import Home from "@pages/Home";
import Movie from "@pages/Movie";
import MovieDetail from "@pages/MovieDetail";
import Suggest from "@pages/Suggest";
import TVShow from "@pages/TVShow";

const publicRoutes = [
    { id: 1, path: configs.routes.home, component: Home, layout: MainLayout },
    { id: 2, path: configs.routes.movie, component: Movie, layout: MainLayout },
    {
        id: 3,
        path: configs.routes.suggest,
        component: Suggest,
        layout: MainLayout,
    },
    {
        id: 4,
        path: configs.routes.movieId,
        component: MovieDetail,
        layout: MainLayout,
    },
    {
        id: 5,
        path: configs.routes.tvShowId,
        component: MovieDetail,
        layout: MainLayout,
    },
    {
        id: 6,
        path: configs.routes.tvShow,
        component: TVShow,
        layout: MainLayout,
    },
    {
        id: 7,
        path: configs.routes.contact,
        component: Contact,
        layout: MainLayout,
    },
];

export { publicRoutes };
