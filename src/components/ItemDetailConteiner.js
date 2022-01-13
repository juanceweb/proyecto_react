import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ButtonFunct from "./Commons";

const DetailContainer = () => {

    const {id} = useParams() || ""

    // const [pokemon, setPokemon] = useState({});
    // const [idpoke, setIdpoke] = useState(parseInt(id))

    const [index, setIndex] = useState(id)
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        const db = getFirestore();

        const q = query(collection(db, "items"), where("poke_id","==", index));
        getDocs(q).then((snapshot) => {
            setPokemon(snapshot.docs.map((doc) => ({ id: doc.id,...doc.data()})))
        });
    }, [index]);


    // const fetchPokemon = async () => {
    //     const call = await fetch(`https://pokeapi.co/api/v2/pokemon/${idpoke}`);
    //     const result = await call.json();
    //     setPokemon(result);
    // };

    // useEffect(() => {
    //     fetchPokemon();
    //     },[idpoke]);

    // const AddId = () => {
    //     (idpoke >= 500) ? console.log("maximo") : setIdpoke ((prev) => prev + 1);
    // }

    // const RestId = () => {
    //     (index <= 1) ? console.log("minimo") : setIndex ((prev) => prev - 1);

    // }

    return (
        <div className="App poke-background">
            {/* <ButtonFunct funcion={RestId} nombre={"BEFORE"}/> */}
            {/* <ButtonFunct funcion={AddId} nombre={"NEXT"}/> */}
            <ItemDetail pokemon={pokemon[0]}/>
        </div>
    )
}

export default DetailContainer