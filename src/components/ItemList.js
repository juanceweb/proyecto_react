import { useEffect, useState } from "react";
import Item from "./Item";
import Pokeimg from "../media/pngegg.png";


const FunctItemList = ({listaPokemons}) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    },[]);

    if (loading) {
        return (
            <div className="">
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
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                {listaPokemons?.map((pokemon, index) => (
                    <Item key={index} pokemon={pokemon}/>
                ))}
                </div>
            </div>
        )
    }

}

export default FunctItemList