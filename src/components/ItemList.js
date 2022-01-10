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
                <div class="d-flex justify-content-center">
                    <div class="spinner-border m-5 text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }else {
        return (
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                {listaPokemons?.map((pokemon) => (
                    <Item pokemon={pokemon}/>
                ))}
                </div>
            </div>
        )
    }

    // return (
    //     <div className="container-fluid">
    //         <div className="row d-flex justify-content-center">
    //         {listaPokemons?.map((pokemon) => (
    //             <Item pokemon={pokemon}/>
    //         ))}
    //         </div>
    //     </div>
    // );
}

export default FunctItemList