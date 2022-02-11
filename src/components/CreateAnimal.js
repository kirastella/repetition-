import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { TokenContext } from '../contexts/TokenContext';
import { Link } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
    name: yup.string().required("Give the animal a name.."),
    description: yup.string().required("You have to write a description"),
    age: yup.number().required("You have to insert the age of the animal"),
    assetId: yup.number().required("You need to give the animal an id!"),
})

const CreateAnimal = () => {

    const { token } = useContext(TokenContext);
    const { register, handleSubmit, formState: { errors },
    } = useForm({
        resolver:yupResolver(schema),
    });
   

    const [animal, setAnimal] = useState();

    const onSubmit = (data) => {
        axios.post("http://localhost:4000/api/v1/animals", data, {
            headers : {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`,
            }
        })
        .then(response => setAnimal(response.data))
    };
    return ( 
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="name">Name on animal:</label>
            <input type="text" {...register("name")} /*4 props: onblur, onchange, name, ref*/  />
        </div>
        <div>{errors.username?.message}</div>
        <div>
            <label htmlFor="description">Description:</label>
            <textarea {...register("description")} cols="30" rows="10"></textarea>
        </div>
        <div>
            <label htmlFor="age">Write the age of the animal:</label>
            <input type="number" {...register("age")} />
        </div>
        <div>
            <label htmlFor="assetId">Insert Picture Id:</label>
            <input type="number" {...register("assetId")}/>
        </div>
        <button type="submit">Create Animal</button>
    </form>
    { animal && (
        <>
        <Link to="/create">Opret et nyt dyr</Link>
        <Link to="/list">Se listen med dyr</Link>
        <Link to={`/detail/${animal.id}`}>Se {animal.name} </Link>
        </>
    )}
    </> 
    );

}
 
export default CreateAnimal;
