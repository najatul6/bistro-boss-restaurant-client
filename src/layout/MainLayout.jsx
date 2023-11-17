import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";

const MainLayout = () => {
    const location = useLocation();
    const hideHeaderFooter = location.pathname.includes('signin') || location.pathname.includes('signUp')
    return (
        <div className="max-w-[1920px] mx-auto">
            {hideHeaderFooter || <NavBar />}
            <Outlet />
            {hideHeaderFooter || <Footer />}
        </div>
    );
};

export default MainLayout;