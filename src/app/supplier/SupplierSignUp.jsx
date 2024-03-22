import { SignUpForm } from "./SupplierSignUpForm"

export const SupplierSignUp = () => {
    return (
        <>
            <div className="parent-login">
                <div className="login-box">
                    <div className="img-login">
                        <h1>Supplier Login</h1>
                    </div>
                    <div className="login-form">
                        <h1>Login In as a Supplier</h1>
                        <p className="subtitle-login">Please Fill up the Form to Procced ahead</p>
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </>
    )
}