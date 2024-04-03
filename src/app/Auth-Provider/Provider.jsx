    import { createContext, useEffect, useState } from "react"
    import { getLocalStorage } from "../utils/local-storage";

    export const AuthContext = createContext();

    export const AuthProvider = ({ children }) => {
        const [isAuthorized, setisAuthorized] = useState(false);
        const [logined, setisLogined] = useState(false);

        useEffect(() => {
            const token = getLocalStorage('token')
        
            if (token) {
                setisLogined(true)
                setisAuthorized(true);
            } else {
                setisLogined(false)
                setisAuthorized(false);
            }
            console.log(token);
        }, [])

        return (
            <AuthContext.Provider value={{ isAuthorized, logined }}>
                {children}
            </AuthContext.Provider>
        )
    }

    export default AuthProvider;