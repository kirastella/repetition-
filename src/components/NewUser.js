import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewUser = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data);
        axios.post(`http://localhost:4000/api/v1/users`, data)
            .then(response => {
                if (response.status === 200){
                    navigate("/login")
                }
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Create new user</h2>
            <label htmlFor="username">Username:</label>
            <input type="text" {...register("username")} />
            <label htmlFor="password">Password:</label>
            <input type="password" {...register("password")} />
            <button type="submit">Register</button>
        </form>
    );
}
 
export default NewUser;