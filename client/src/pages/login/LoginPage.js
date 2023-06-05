import { useRef } from "react";

const LoginPage = ({ func, login }) => {
    const loginRef = useRef();
    const passwordRef = useRef();
    const phoneRef = useRef();
    const nameRef = useRef();
    return (
        <>
            <form>
                <input type="text" placeholder="Login" required ref={loginRef}/>
                <input type="text" placeholder="Password" required ref={passwordRef}/>
                <input type="text" placeholder="Phone" required ref={phoneRef}/>
                <input type="text" placeholder="Name" required ref={nameRef}/>
            </form>
            <button onClick={() => func('login')}>Login</button>
            <button onClick={() => func('signup')}>Signup</button>
            <br/>
            <button onClick={() => login({
                login: loginRef.current.value,
                password: passwordRef.current.value,
                phone: phoneRef.current.value,
                name: nameRef.current.value
                })}>Login</button>
        </>
    );
};

export default LoginPage;