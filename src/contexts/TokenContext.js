import { useState, createContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export const TokenContext = createContext();

const TokenProvider = ({ children }) => {

    const [token, setToken] = useState( Cookies.get("token"));
    const [user] = useState(Cookies.get("user"));
    const [pass] = useState(Cookies.get("pass"));

    useEffect(() => {
        if(user && pass){
            axios.post("http://localhost:4000/auth/token", {
                username: user, 
                password: pass,
            })
            .then(response => {
                setToken(response.data.token);
                Cookies.set("token", response.data.token);
            })
        }
    }, [user, pass]);

    return (
        <TokenContext.Provider value={{ token, setToken}}>
            {children}
        </TokenContext.Provider>
    );
}

export default TokenProvider;