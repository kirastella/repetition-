import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    //variabel

    function handleClick(){
        setCount(count + 1)
    }

    return ( 
    <>
    <div>
       <p> count: {count} </p> 

       <button onClick={handleClick}>Klik her</button>
    </div>
    </> );
}
 
export default Counter;