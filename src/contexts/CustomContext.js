import React, { useState } from "react";
import CartContext from "./CartContext";

function CustomContext ({children}){
    
    const [arr, setArr] = useState([])

    function add(pokemon, cantidad) {
        console.log(arr)
        console.log(arr.length);
        const result = arr.find(element => element.id == pokemon.id)
        if (result == undefined) {
            console.log("se cargo al carrito");
            arr.push({id: pokemon.id, nombre: pokemon.name, cantidad: cantidad, img : pokemon.sprites.front_default, precio: pokemon.weight})
        }else {
            result.cantidad = cantidad;
        }
    }

    function check() {
        return arr;
    }

    function length() {
        return arr.length
    }

    function remove(id) {
        const newArray = arr.filter(element => element.id != id)
        setArr(newArray)
    }

    function wype() {
        setArr([])
    }

    return (
        <CartContext.Provider value={{add, wype, check,remove, length}}>
            {children}
        </CartContext.Provider>
    )

}

export default CustomContext;