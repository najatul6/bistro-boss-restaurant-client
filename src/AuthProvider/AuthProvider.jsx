import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Config/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[ isLoading, setIsLoading]= useState(true);

    const createuser = (email, password) =>{
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn =(email, password)=>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut =()=>{
        setIsLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log(currentUser);
            setIsLoading(false);
        });
        return()=>{
            return unsubscribe()
        }
    },[])

    const userInfo ={
        user,
        isLoading,
        createuser,
        logIn,
        logOut,
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