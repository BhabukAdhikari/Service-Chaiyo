import { LoginForm } from "./LoginForm"
import './Login.css'
import { Title } from "../components/Title/Title"
import { Paragraph } from "../components/Title/Paragraph"

export const Login = () => {
    return (
        <div className="parent-login">
            <div className="login-box">
                <div className="img-login">
                    <Title title='Welcome Back to ServiceChaiyo' />
                </div>
                <div className="login-form">
                    <Title title='Login' />
                    <Paragraph className="subtitle-login" paragraph="Please Fill up the Form to Procced ahead" />
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}