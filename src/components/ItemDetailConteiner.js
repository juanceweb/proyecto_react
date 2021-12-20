import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail"
import ButtonFunct from "./Commons";
import NavBar from './NavBar';

const DetailContainer = ({nombre}) => {

    const [pokemon, setPokemon] = useState({});
    const [id, setId] = useState(1)

    const fetchPokemon = async () => {
        const call = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const result = await call.json();
        setPokemon(result);
    };

    useEffect(() => {
        setTimeout(() => {
            fetchPokemon();
            },2000)
        },[id]);

    const AddId = () => {
        const suma = (id >= 151) ? console.log("maximo") : setId((prev) => prev + 1);
    }

    const RestId = () => {
        const rest = (id <= 1) ? console.log("minimo") : setId ((prev) => prev - 1);

    }

    return (
        <div className="App poke-background">
            <NavBar />
            <ButtonFunct funcion={RestId} nombre={"BEFORE"}/>
            <ButtonFunct funcion={AddId} nombre={"NEXT"}/>
            <ItemDetail pokemon={pokemon}/>
        </div>
    )
}

export default DetailContainer