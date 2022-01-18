import React, {useContext, useState, useEffect} from "react";
import FunctAddRest from "./ItemCountFunct"
import CartContext from "../contexts/CartContext";

const ItemDetail = ({pokemon}) => {

    const [cantidad, setCantidad] = useState(0)

    const context = useContext(CartContext)

    return (
        <div className="container-fluid py-5">
            <div className="row d-flex justify-content-center">
                <div className="col-3 card border border-dark border-3 bg-danger">
                    <img src={pokemon?.img} className="border border-dark border-3 card-img-top mt-3 bg-white" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title text-white">{pokemon?.nombre}</h5>
                        <h4 className="card-title text-success">${pokemon?.precio}</h4>
                        <FunctAddRest getCantidad={(c) => setCantidad(c)} stockIni={pokemon?.stock} />
                        <a href="#" onClick={() => context.add(pokemon, cantidad)} className="btn btn-secondary m-3 border-dark border-2">AGREGAR AL CARRITO</a>
                    </div>
                </div>
                <div className="col-3 card border border-dark border-3 bg-danger">
                    <div className="card-body container ">
                        <h3 className="text-white">POKEDEX</h3>
                        <div className="row bg-secondary border align-items-center my-2">
                            <h5 className="h-100 col text-white text-start mt-2">ENTRY N°:</h5>
                            <h5 className="col text-white mt-2">{pokemon?.poke_id}</h5>
                        </div>
                        <div className="row bg-secondary border align-items-center my-2">
                            <h5 className="col text-white text-start mt-2">HEIGHT:</h5>
                            <h5 className="col text-white mt-2">{pokemon?.height} mts</h5>
                        </div>
                        <div className="row bg-secondary border align-items-center my-2">
                            <h5 className="col text-white text-start mt-2">WEIGHT:</h5>
                            <h5 className="col text-white mt-2">{pokemon?.weight} kgs</h5>
                        </div>
                        <div className="row bg-secondary border align-items-center my-2">
                            <h5 className="col text-white text-start mt-2">EVOLUTION:</h5>
                            <h5 className="col text-white mt-2">{pokemon?.evolution}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail