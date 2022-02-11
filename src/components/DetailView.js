import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { AnimalContext } from "../contexts/AnimalContext";

const DetailView = () => {
    const {id} = useParams();
    const {state, dispatch } = useContext(AnimalContext);

    const [animal, setAnimal] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios(`http://localhost:4000/api/v1/animals/${id}`).then((response) => {
            setAnimal(response.data);
            dispatch({type: "UPDATE", payload: response.data})
            setIsLoading(false);
        })
    }, [id]);

    return isLoading ? 
    (<p>Loading..</p>
        ) : (
        <>
        <article>
            <h2>{state.name}</h2>
            <p>{state.description}</p>
            <p>Alder: {state.age}</p>
            {state.asset && (
            <img src={animal.asset.url} alt={animal.name} />
            )}
            <button onClick={() => dispatch({type: "ADD_IMAGE", payload: animal.asset})}>Update state in reducer</button>
        </article>
        </>
      );
}
 
export default DetailView;