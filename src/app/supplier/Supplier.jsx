import { Link } from "react-router-dom"

export const Supplier = () => {
    return (
        <>
            <h1>Supplier</h1>
            <Link to='/supplier/sign-up'>Login</Link>
            <Link to='/supplier/registration'>Create Account</Link>

        </>
    )
}