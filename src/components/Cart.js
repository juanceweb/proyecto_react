import React from "react";
import CartContext from "../contexts/CartContext";
import {useContext, useState} from "react";
import ButtonFunct from "./Commons";
import { NavLink } from "react-router-dom";
import { addDoc, collection, getFirestore} from "firebase/firestore"



const CartBody = () => {

    const context = useContext(CartContext)
    const {arr} = useContext(CartContext)

    const db = getFirestore();

    const sendOrder = (arr) =>{

        const order = {
            buyer: { name: "juan", phone:"55555", email: "test@test.com"},
            items: arr.map((pokemon) => (
                {nombre: pokemon.nombre, precio: pokemon.precio , cantidad: pokemon.cantidad, total_parcial: pokemon.precio*pokemon.cantidad } ))
        }

        const ordersCollection = collection(db, "orders")

        addDoc(ordersCollection, order).then(({id}) =>{
            console.log(id)
        })

    }


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
                            <img src={pokemon.img} className="border border-dark border-3 m-3 bg-white" height={"60px"} alt="..."></img>
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
                <ButtonFunct nombre="Comprar" funcion={() => sendOrder(context.check())} />
            </div>)
    }
}


export default CartBody