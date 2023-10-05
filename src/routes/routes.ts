import configs from "@/configs";
import MainLayout from "@layouts/MainLayout";
import Home from "@pages/Home";

const publicRoutes = [
    { id: 1, path: configs.routes.home, component: Home, layout: MainLayout },
];

export { publicRoutes };
