import { ReactNode } from "react";
import Header from "@components/Header";
import theme from "@themes/index";

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />

            <main
                style={{
                    height: "2000px",
                    background: theme.palette.background.main,
                }}
            >
                {children}
            </main>
        </>
    );
};

export default MainLayout;
