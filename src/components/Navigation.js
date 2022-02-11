import { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";


const Navigation = () => {

const { token } = useContext(TokenContext);
    return ( 
    <header>
        <nav>
        <Link to="/">forside</Link>{" "}
        <Link to="/other">anden side</Link>{" "}
        <Link to="/list">listview</Link>{" "}
        <Link to="/detail">detail</Link>{" "}
        <Link to="/login">Login</Link>{" "}
        <Link to="/newuser">Create new user</Link>{" "}
        {token && <Link to="/secret">Show me..</Link>}{" "}
        {token && <Link to="/create">Create New Animal</Link>}
        </nav> 
        {token && <LogOut/> }
    </header>);
}
 
export default Navigation;




