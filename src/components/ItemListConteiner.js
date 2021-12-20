import React, {useEffect, useState} from "react";
import FunctItemList from "./ItemList"
import ButtonFunct from "./Commons";
import NavBar from './NavBar';

const ListContainer = ({nombre, index, max, min, dif}) => {

    const [pokemon, setPokemon] = useState([]);
    const [indice, setIndice] = useState(index)
    const [limite, setLimite] = useState(20)

    const fetchPokemon = async () => {
        const call = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${indice}&limit=${limite}`);
        const result = await call.json();
        setPokemon(result.results);
    };

    const AumentarIndicePokemon = () => {
        if (indice >= max) {
            console.log(`maximoo para ${nombre}`);
        } else if(indice >= max-20) {
            setLimite (dif)
            setIndice ((prev) => prev + 20)
        } else {
            setIndice ((prev) => prev + 20)
        }
    }

    const BajarIndicePokemon = () => {
        const restar = (indice === min) ? console.log(`indice minimo para ${nombre}`): setIndice ((prev) => prev - 20);
    }

    useEffect(() => {
        fetchPokemon();
    },[indice]);

    return (
        <div className="App poke-background">
            <NavBar />
            <h1 className="p-5 color-red">Bienvenido a {nombre}!</h1>
            <ButtonFunct funcion={BajarIndicePokemon} nombre={"ANTERIOR"}/>
            <ButtonFunct funcion={AumentarIndicePokemon} nombre={"SIGUIENTE"}/>
            <FunctItemList listaPokemons={pokemon}/>
            <ButtonFunct funcion={BajarIndicePokemon} nombre={"ANTERIOR"}/>
            <ButtonFunct funcion={AumentarIndicePokemon} nombre={"SIGUIENTE"}/>
        </div>
    )
}

export default ListContainer