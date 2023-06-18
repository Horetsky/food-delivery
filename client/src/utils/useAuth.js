import { useState } from "react"
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

import { auth } from "./firebase.js"


export default function useAuth(authType, loginData) {
    const [authStatus, setAuthStatus] = useState({}); // ['success', 'error']

    async function signup(login, password, comfirmation) {
        if (password !== comfirmation) return setAuthStatus({
            type: 'error',
            message: 'passwords do not match'
        });
        if (password.length < 6) return setAuthStatus({
            type: 'error',
            message: 'password is too short'
        });

        await createUserWithEmailAndPassword(auth, login, password)
            .then(() => setAuthStatus({
                type: 'success'
            }))
            .then(() => window.location.pathname = '/')
            .catch(e => setAuthStatus({
                type: 'error',
                message: e.message.split('/')[1].slice(0, -2)
            }))
    }

    async function login(login, password) {
        await signInWithEmailAndPassword(auth, login, password)
            .then(() => setAuthStatus({
                type: 'success'
            }))
            .catch(e => setAuthStatus({
                type: 'error',
                message: e.message.split('/')[1].slice(0, -2)
            }))
    }

    async function logOut() {
        await signOut(auth)
            .then(() => setAuthStatus({
                type: 'success'
            }))
            .catch(e => setAuthStatus({
                type: 'error',
                message: e.message
            }))
    }
   
    return {
        signup,
        login,
        logOut,

        authStatus
    }
}