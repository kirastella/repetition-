import { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const {setToken} = useContext(TokenContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        toast("Login in");
        axios
        .post("http://localhost:4000/auth/token", data)
        .then((response) => {
            console.log(data.keep)
            setToken(response.data.token);
    
           if(data.keep){
              Cookies.set("token", response.data.token, {
                samSite: "Strict",
           });
        }
            navigate("/secret");
        });
    };
   
    return ( 
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label htmlFor="username">Username:</label>
        <input type="text" {...register("username")}/>
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input type="password"{...register("password")}/>
        </div>
        <div>
        <input type="checkbox" {...register("keep")} />
        <label htmlFor="keep">Keep me logged in..</label>
        </div>
        <button type="submit">Log in</button>
    </form>
   
    </> )
    
    ;
}
 
export default Login;
//spread: onblur, onchange, name og ref. 