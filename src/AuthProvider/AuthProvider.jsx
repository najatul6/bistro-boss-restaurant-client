import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Config/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createuser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Email Log In
    const logIn = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Update User Profile 
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const googleprovider = new GoogleAuthProvider();
    const facebookprovider = new FacebookAuthProvider();
    const githubprovider = new GithubAuthProvider();

    // Facebook Log In
    const facebookLogin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, facebookprovider)
    }

    // Google Log In 
    const googleLogIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleprovider)
    }

    // Git Hub Log In
    const githubLogIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubprovider)
    }

    // Log Out
    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setIsLoading(false);
        });
        return () => {
            return unsubscribe()
        }
    }, [])

    const userInfo = {
        user,
        isLoading,
        createuser,
        updateUserProfile,
        logIn,
        googleLogIn,
        facebookLogin,
        githubLogIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;