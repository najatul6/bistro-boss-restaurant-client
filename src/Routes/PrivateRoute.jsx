import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import spiningimg from "../assets/others/loader2.gif";
import PropTypes from 'prop-types'

const PrivateRoute = ({children}) => {
    const {user,isLoading} = useContext(AuthContext);
    const location = useLocation();
    if(isLoading){
        return <img className="w-full flex justify-center items-center" src={spiningimg} alt="" />
    }
    if(user){
        return children;
    }

    return <Navigate to="/signIn" state={{form:location}} replace></Navigate>
};

PrivateRoute.propTypes ={
    children:PropTypes.node,
}

export default PrivateRoute;