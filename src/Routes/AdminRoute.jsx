import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import spiningimg from "../assets/others/loader3.gif";

const AdminRoute = (children) => {
    const [user, isLoading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if (isLoading || isAdminLoading) {
        return <img className="w-full flex justify-center items-center" src={spiningimg} alt="" />
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/signIn" state={{ form: location }} replace></Navigate>
};

export default AdminRoute;