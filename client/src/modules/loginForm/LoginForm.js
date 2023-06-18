import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

import useAuth from '../../utils/useAuth';

import './style.scss'

const LoginForm = ({ type }) => {
    const loginRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmationRef = useRef(null);

    return (
        <>
            {
                type === 'login' ? 
                <Login 
                    loginRef={loginRef}
                    passwordRef={passwordRef}
                /> : 
                <Signup 
                    loginRef={loginRef}
                    passwordRef={passwordRef}
                    confirmationRef={confirmationRef}
                />
            }
        </>
    );
};

const Login = ( { loginRef, passwordRef, loading} ) => {
    const { login, authStatus } = useAuth();
    const handleSubmit = async(e, userLogin, password) => {
        e.preventDefault();
        login(userLogin, password);
    }

    return (
        <form 
            className="login-form"
            onSubmit={(e) => handleSubmit(e, loginRef.current.value, passwordRef.current.value)}
        >
            <h1>Login</h1>
            {
                authStatus?.type === 'error' ?
                <span className="login-form__error">{authStatus?.message}</span> : null
            }

            <input type="text" placeholder="Login" required ref={loginRef}/>
            <input type="password" placeholder="Password" required ref={passwordRef}/>
            
            <button type="submit" className={loading === 'loading' ? 'loading-btn' : null}>Login</button>
            
            <span className="login-form__signup">
                Don't have an account? <Link to={ROUTES.signup}>Sign up</Link>
            </span>

        </form>
    )
}

const Signup = ({ loginRef, passwordRef, confirmationRef, loading }) => {
    const { signup, authStatus } = useAuth();
    const handleSubmit = async(e, userLogin, password, confirmation) => {
        e.preventDefault();
        signup(userLogin, password, confirmation);
    }

    return (
        <form 
            className="login-form"
            onSubmit={(e) => handleSubmit(e, loginRef.current.value, passwordRef.current.value, confirmationRef.current?.value)}
        >
            <h1>Sign up</h1>

            {
                authStatus?.type === 'error' ?
                <span className="login-form__error">{authStatus?.message}</span> : null
            }
            
            <input type="text" placeholder="Login" required ref={loginRef}/>
            <input type="password" placeholder="Password" required ref={passwordRef}/>
            
            <input type="password" placeholder="Confirm password" required ref={confirmationRef}/>
            
            <button type="submit" className={loading === 'loading' ? 'loading-btn' : null}>Sign Up</button>
            
            <span className="login-form__signup">
                Already have an account? <Link to={ROUTES.app}>Login</Link>
            </span>
        </form>
    )
}


export default LoginForm;