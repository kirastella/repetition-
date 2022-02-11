import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListView = () => {

    const [animals, setAnimals] = useState();
    const [isloading, setisLoading] = useState(true);

    useEffect(() => {
        axios("http://localhost:4000/api/v1/animals").then((response) => {
       setAnimals(response.data);
       setisLoading(false);
    });
    }, []);



    return isloading ? (
        <p>loading..</p> 
    ) : (
    
    <ul>
        { animals.map(animal => (
        <Link key={animal.id} to={`/detail/${animal.id}`}>
           <li>{animal.name}</li> 
        </Link>
         ))}
    </ul>
     
    );
};
 
export default ListView;