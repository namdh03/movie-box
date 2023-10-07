import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "@/routes/routes";
import { useScrollToTop } from "./hooks";

type TLayout =
    | React.ExoticComponent<{
          children?: React.ReactNode;
      }>
    | (({ children }: { children: React.ReactNode }) => JSX.Element);

const App = () => {
    useScrollToTop();

    return (
        <Routes>
            {publicRoutes.map((route) => {
                let Layout: TLayout = Fragment;
                const Page = route.component;

                if (route.layout) {
                    Layout = route.layout;
                } else {
                    Layout = Fragment;
                }

                return (
                    <Route
                        key={route.id}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
};

export default App;
