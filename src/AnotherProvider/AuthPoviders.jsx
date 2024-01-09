import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from "../Firbase_config";


const auth=getAuth(app)

const AuthPoviders = ({children}) => {
   const [user,setUser]=useState(null);
   const [loading,setLoading]=useState(true)
   const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }
   const signIn=(email,password)=>{
    setLoading(true)
    return(signInWithEmailAndPassword(auth,email,password))
   }
const logOut=()=>{
    return signOut(auth)
}

//obseverr use auth state
useEffect(()=>{
   const unscubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
    });
    return ()=>{
        return unscubscribe();
    }
},[])

    const authInfo={
user,
loading,
createUser,
signIn,
logOut

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
{children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthPoviders;