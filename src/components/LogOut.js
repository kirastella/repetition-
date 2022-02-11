import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";
import { toast } from 'react-toastify';

const LogOut = () => {
    const { setToken } = useContext(TokenContext);
    const navigate = useNavigate();

    const handleClick = () => {  
        toast("Login out...",{ 
            autoClose: 800, 
            position: "bottom-center",
        });
    setTimeout(() => {
        sessionStorage.removeItem("token");
            setToken(null);
            navigate("/");
    }, 2000);
    };
    return (

    <>
        <button onClick={handleClick}>Log Out</button>
    </> 
    );
}
 
export default LogOut;