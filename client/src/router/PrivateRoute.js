import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {
    LoginPage
} from "../pages";
import { auth } from "../utils/firebase";


const PrivateRoute = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                // User is signed in
                setUser(firebaseUser)
            } else {
              // User is signed out
              setUser(null)
            }
          });
    }, [])

    if (!user) return <LoginPage />

    return children
    
};

export default PrivateRoute;