import React, {useEffect, useState} from "react";
import FunctAddRest from "./ItemCountFunct"
import { Link, NavLink } from "react-router-dom";


const Item = ({pokemon}) => {

    const [pokemonData, setPokemonData] = useState([]);

    const fetchPokemon = async () => {
        const call = await fetch(pokemon?.url);
        const result = await call.json();
        setPokemonData(result);
    };

    useEffect(() => {
        fetchPokemon();
    },[pokemon]);

    return (
        <div className="col-2 card mx-5 my-3 border border-dark border-3 bg-danger">
            <h5 className="card-title text-white mt-1">N°{pokemonData?.id}</h5>
            <img src={pokemonData?.sprites?.front_default} className="border bg-white border-dark border-3 card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title text-white">{pokemonData?.name?.toUpperCase()}</h5>
                <FunctAddRest valorInicial={1} stockIni={8} />
                <a href="#" className="btn btn-secondary m-3 border-dark border-2"><NavLink to={`/item/${pokemonData?.id}`}>VER MAS</NavLink></a>
            </div>
        </div>
    )
}

export default Item