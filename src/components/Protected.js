import { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import { Link } from "react-router-dom";

const Protected = ({ children }) => {

    const { token } = useContext(TokenContext);
    return token ? (
        children
    ):(
        // JS6 - når der er HTML inde i JavaScript. 
        <article>
        <h2>Protected Page!</h2>
        <p>You have hit a protected page</p>
        <p>Please <Link to="/login">log in</Link></p>
        </article>
    );

};
 
export default Protected;