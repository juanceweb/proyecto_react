import React, {useState} from "react";
import imgItem from "../media/hqdefault.jpg";
import Item from "./Item";


const FunctItemList = () => {

    const [array, setArray] = useState([])

    const newArray = [
        {id:1, titulo:"titulo1", descripcion:"hola esta es una descripcion del producto 1", precio:1000 , imagen:{imgItem}},
        {id:2, titulo:"titulo2", descripcion:"hola esta es una descripcion del producto 2", precio:2000 , imagen:{imgItem}}
    ]

    const promesaMetodo = () => {
        const auxiliar = new Promise ((resolve, reject) => {
            setTimeout (() => {
                setArray(newArray)
                resolve(true)
            }, 2000)
        })
        
        auxiliar.then ((res) =>{
            console.log(res)
        })
    }

    return (
        <div className="container-fluid">
            <a href="#" className="btn btn-primary m-3" onClick={promesaMetodo}>Ver Items (Tarde 2 segundos)</a>
            <div className="row d-flex justify-content-center">
                {array.map((el) => (
                    <Item id={el.id} titulo={el.titulo} descripcion={el.descripcion} precio={el.precio} img={el.imagen.imgItem} />
                ))}
            </div>
        </div>
    );
}

export default FunctItemList