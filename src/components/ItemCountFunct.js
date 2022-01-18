import React, {useEffect, useState} from "react";



const FunctAddRest = ({valorInicial = 1, stockIni, getCantidad}) => {
    const [valor, setValor] = useState(valorInicial)
    const [stock, setStock] = useState(stockIni)

    const add = () => {
        const addition = (valor < stock ) ? setValor((prev) => prev + 1) : console.log("stock max");
    }

    const rest = () => {
        const resta = (valor > 1 ) ? setValor((prev) => prev - 1) : console.log("stock min");
    }

    useEffect(() => {
        getCantidad(valor)
    },[valor])

    return (
        <div className="d-flex justify-content-center">
            <button className="btn bg-success text-white border-2 border-dark  my-1 px-3" onClick={rest}>-</button>
            <p className="m-2 text-white">{valor}</p>
            <button className="btn bg-primary text-white border-2 border-dark my-1 px-3" onClick={add}>+</button>
        </div> 
    );
    }

export default FunctAddRest
