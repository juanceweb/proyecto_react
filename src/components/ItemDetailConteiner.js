import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import ButtonFunct from "./Commons";
import NavBar from './NavBar';

const DetailContainer = () => {

    const {id} = useParams() || ""

    const [pokemon, setPokemon] = useState({});
    const [idpoke, setIdpoke] = useState(parseInt(id))

    const fetchPokemon = async () => {
        const call = await fetch(`https://pokeapi.co/api/v2/pokemon/${idpoke}`);
        const result = await call.json();
        setPokemon(result);
    };

    useEffect(() => {
        fetchPokemon();
        },[idpoke]);

    const AddId = () => {
        (idpoke >= 500) ? console.log("maximo") : setIdpoke ((prev) => prev + 1);
    }

    const RestId = () => {
        (idpoke <= 1) ? console.log("minimo") : setIdpoke ((prev) => prev - 1);

    }

    return (
        <div className="App poke-background">
            <ButtonFunct funcion={RestId} nombre={"BEFORE"}/>
            <ButtonFunct funcion={AddId} nombre={"NEXT"}/>
            <ItemDetail pokemon={pokemon}/>
        </div>
    )
}

export default DetailContainer