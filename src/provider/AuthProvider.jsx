import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, GithubAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
//import { GithubAuthProvider } from "firebase/auth/cordova";


export const AuthContext = createContext(null);


 export const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password);
        
    }
    const signIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const signInWithGithub = () => {
        const providers = new GithubAuthProvider();
        return signInWithPopup(auth, providers);
    };


    const logOut = () => {
        
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        signInWithGithub

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;