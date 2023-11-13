import { Outlet } from "react-router-dom";
import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;