import { createContext, useReducer, useEffect } from "react";

export const AnimalContext = createContext();

const initialState = { 
    name: "",
    description: "",
    age:"",
    
}

const reducer = (state, action) => {
    switch(action.type){
        case "UPDATE":
            //validate action.payload(object)
            return{...state, ...action.payload};
        case "ADD_IMAGE" :
            //validate action.payload(string/number)
            return {...state, assetId: action.payload};
        default:
            return state;
    };
};

const AnimalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    useEffect(() => {
        console.log(state)
    }, [state]);

    return (
    <>
    <AnimalContext.Provider value={{ state, dispatch }}>
        {children}
    </AnimalContext.Provider>
    
    </> );
}
 
export default AnimalProvider;