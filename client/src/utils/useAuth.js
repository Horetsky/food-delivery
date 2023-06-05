import { useState, useEffect } from "react"
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL

export default function useAuth(authType, loginData) {
    const [accessToken, setAccessToken] = useState(null)
    useEffect(() => {
        if (authType === 'login') login(loginData)
    }, [authType, loginData])

    function login(loginData) {
        axios
            .post(`${serverUrl}login`, {
                ...loginData
            })
            .then(res => {
                setAccessToken(res.data.accessToken)
            })
            .catch((e) => {
                console.log(e);
            })
    }

    return true
}