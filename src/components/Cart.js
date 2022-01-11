import React from "react";
import CartContext from "../contexts/CartContext";
import {useContext, useState} from "react";
import ButtonFunct from "./Commons";
import { NavLink } from "react-router-dom";



const CartBody = () => {

    const context = useContext(CartContext)
    const {arr} = useContext(CartContext)

    if (arr.length === 0){
        return (
            <div>
                <div>El Carrito esta vacio</div>
                <NavLink className="btn btn-secondary m-3 border-dark border-2" to={"/"}>Volver</NavLink>
            </div>
        )
    } else {
        return (
            <div className="container-fluid">
                {context.check().map((pokemon, index) => (
                    <div key={index} className="row justify-content-center d-flex align-items-center border border-dark border-3 bg-danger m-5">
                        <div className="col-1">
                            <img src={pokemon.img} className="border border-dark border-3 m-3 bg-white" alt="..."></img>
                        </div>
                        <div className="col-1 d-inline align-middle">
                            <h3 className="align-middle">{pokemon.nombre}</h3>
                        </div>
                        <div className="col-1">
                            <h3>x</h3>
                        </div>
                        <div className="col-1">
                            <h3>{pokemon.cantidad}</h3>
                        </div>
                        <div className="col-1 text-success">
                            <h3>${pokemon.precio}</h3>
                        </div>
                        <div className="col-1">
                            <h3>=</h3>
                        </div>
                        <div className="col-1 text-success">
                            <h3>${pokemon.precio*pokemon.cantidad}</h3>
                        </div>
                        <div className="col-1">
                            <ButtonFunct nombre="X" funcion={() => context.remove(pokemon.id)}/>
                        </div>
                    </div>))}
                <ButtonFunct nombre="Vaciar" funcion={() => context.wype()}/>
            </div>)
    }
}


export default CartBody