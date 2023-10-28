import { NavLink } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";
import configs from "@configs/index";

interface INav {
    id: number;
    label: JSX.Element;
    url: string;
}

const nav: INav[] = [
    {
        id: 1,
        label: <NavLink to={configs.routes.movie}>Movies</NavLink>,
        url: configs.routes.movie,
    },
    {
        id: 2,
        label: <NavLink to={configs.routes.tvShow}>TVShows</NavLink>,
        url: configs.routes.tvShow,
    },
    {
        id: 3,
        label: <NavLink to={configs.routes.contact}>Contact</NavLink>,
        url: configs.routes.contact,
    },
    {
        id: 4,
        label: (
            <NavLink to={configs.routes.suggest}>
                Suggest me <ArrowForward />
            </NavLink>
        ),
        url: configs.routes.movie,
    },
];

export default nav;
