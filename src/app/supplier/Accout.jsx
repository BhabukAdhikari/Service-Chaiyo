import { SupplierAccount } from "./CreateAccount"

import './Supplier.css'

export const SupplierRegistration = () => {
    return (
        <>
            <div className="parent-login">
                <div className="login-box">
                    <div className="img-login">
                        <h1>Supplier Account</h1>
                    </div>
                    <div className="login-form">
                        <h1 className="supplier-heading">Supplier Account</h1>
                        <p className="subtitle-login">Please Fill up the Form to Procced ahead</p>
                        <SupplierAccount />
                    </div>
                </div>
            </div>
        </>
    )
}