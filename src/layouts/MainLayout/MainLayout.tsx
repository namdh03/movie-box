import { ReactNode } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer/Footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />

            <main>{children}</main>

            <Footer />
        </>
    );
};

export default MainLayout;
