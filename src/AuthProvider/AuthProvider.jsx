import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth } from "firebase/auth";
import app from "../Config/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[ isLoading, setIsLoading]= useState(true);

    const userInfo ={
        user,
        isLoading,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node,
}

export default AuthProvider;