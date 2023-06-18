import { Navigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import {
    LoginForm
} from "../../modules";

const SignUpPage = () => {
    
    return (
        <div>
            <LoginForm type='signup' />
        </div>
    );
};

export default SignUpPage;