import { useState, useEffect } from "react";
import useAuth from "../utils/useAuth";
import {
    LoginPage
} from "../pages";

const PrivateRoute = ({ children }) => {
    const [authType, setAuthType] = useState('login'); // ['login', 'singup']
    const [loginData, setLoginData] = useState(null); // [login, password] / [name, login, password, phone]
    const accessToken = useAuth(authType, loginData);

    if (!accessToken) return <LoginPage 
                                func={setAuthType}
                                login={setLoginData}
                            />
    
    return  children 
};

export default PrivateRoute;