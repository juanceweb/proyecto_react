import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import FunctItemList from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Pokeimg from "../media/pngegg.png";
import ButtonFunct from "./Commons";

const CatalogContainer = () => {

    const [ListPokemon, setListPokemon] = useState([])

    useEffect(() => {
        const db = getFirestore();

        const collect = collection(db, "items");
        getDocs(collect).then((snapshot) => {
            setListPokemon(snapshot.docs.map((doc) => ({ id: doc.id,...doc.data()})))
        })
    }, [])

    // const {id} = useParams() || ""

    // let nombre;
    // let index;
    // let max;
    // let min;
    // let dif;

    // switch (id) {
    //     case "gen2":
    //         nombre = "Gen 2";
    //         index = 151;
    //         max = 220;
    //         min = 151;
    //         dif = 20;
    //         break;
    
    //     default:
    //         nombre = "Gen 1";
    //         index = 0;
    //         max = 140;
    //         min = 0;
    //         dif = 11;
    //         break;
    // }

    // const [pokemon, setPokemon] = useState([]);
    // const [indice, setIndice] = useState(index)
    // const [limite, setLimite] = useState(20)

    // const fetchPokemon = async () => {
    //     const call = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${indice}&limit=${limite}`);
    //     const result = await call.json();
    //     setPokemon(result.results);
    // };

    // useEffect(() => {
    //     setIndice(index)
    //     console.log("cambio el id");
    // },[id]);

    // useEffect(() => {
    //     fetchPokemon();
    //     console.log("use efect de fetch");
    // },[indice]);

    // const AumentarIndicePokemon = () => {
    //     if (indice >= max) {
    //         console.log(`maximoo para ${nombre}`);
    //     } else if(indice >= max-20) {
    //         setLimite (dif)
    //         setIndice ((prev) => prev + 20)
    //     } else {
    //         setIndice ((prev) => prev + 20)
    //     }
    // }

    // const BajarIndicePokemon = () => {
    //     indice === min ? console.log(`indice minimo para ${nombre}`): setIndice ((prev) => prev - 20);
    // }

    const Type = (type) =>{
        if (type == ""){
            const db = getFirestore();

            const collect = collection(db, "items");
            getDocs(collect).then((snapshot) => {
                setListPokemon(snapshot.docs.map((doc) => ({ id: doc.id,...doc.data()})))
            })
        }else{
        const db = getFirestore();

        const q = query(collection(db, "items"), where("type","==", type));
        getDocs(q).then((snapshot) => {
            setListPokemon(snapshot.docs.map((doc) => ({ id: doc.id,...doc.data()})))
        });
    }}

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    },[]);

    if (loading) {
        return (
            <div className="loading poke-background">
                <img src={Pokeimg} alt="" height="500px" width="1200px"></img>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border m-5 text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }else {
        return (
                <div className="App poke-background">
                    {/* <h1 className="p-5 color-red">Bienvenido a {nombre}!</h1> */}
                    {/* {/* <ButtonFunct funcion={BajarIndicePokemon} nombre={"ANTERIOR"}/> */}
                    <ButtonFunct funcion={() => Type("")} nombre={"ALL"}/>
                    <ButtonFunct funcion={() => Type("plant")} nombre={"PLANT"}/>
                    <ButtonFunct funcion={() => Type("fire")} nombre={"FIRE"}/>
                    <ButtonFunct funcion={() => Type("water")} nombre={"WATER"}/>
                    <FunctItemList listaPokemons={ListPokemon}/>
                    {/* <ButtonFunct funcion={BajarIndicePokemon} nombre={"ANTERIOR"}/>
                    <ButtonFunct funcion={AumentarIndicePokemon} nombre={"SIGUIENTE"}/> */}
                </div>
            )  
    }
}

export default CatalogContainer