import React, { useState } from "react";
import CartContext from "./CartContext";

function CustomContext ({children}){
    
    const [arr, setArr] = useState([])

    function add(pokemon, cantidad) {
        const result = arr.find(element => element.id == pokemon.poke_id)
        if (result == undefined) {
            const aux = [...arr,{id: pokemon.poke_id, nombre: pokemon.nombre, cantidad: cantidad, img : pokemon.img, precio: pokemon.precio, stock: pokemon.stock}]
            setArr(aux)
        }else {
            if (result.cantidad + cantidad > result.stock){
                console.log("no hay tanta cantidad de ese producto");
            } else {
            result.cantidad += cantidad;
            }
        }
    }

    function check() {
        return arr;
    }

    function remove(id) {
        const newArray = arr.filter(element => element.id != id)
        setArr(newArray)
    }

    function wype() {
        setArr([])
    }

    return (
        <CartContext.Provider value={{add, wype, check,remove, arr}}>
            {children}
        </CartContext.Provider>
    )

}

export default CustomContext;