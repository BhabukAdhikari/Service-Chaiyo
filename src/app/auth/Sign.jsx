import { SignUpForm } from "./SignUpForm"

export const SignUp = ({ title }) => {
    return (
        <>
            <div className="parent-login">
                <div className="login-box">
                    <div className="img-login">
                        <h1>SignUp to Service Chaiyo</h1>
                    </div>
                    <div className="login-form">
                        <h1>SignUp</h1>
                        <p className="subtitle-login">Please Fill up the Form to Procced ahead</p>
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </>
    )
}