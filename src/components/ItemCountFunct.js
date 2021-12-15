import React, {useState} from "react";



const FunctAddRest = ({valorInicial = 0, stockIni = 5}) => {
    const [valor, setValor] = useState(valorInicial)
    const [stock, setStock] = useState(stockIni)

    const add = () => {
        const addition = (valor < stock ) ? setValor((prev) => prev + 1) : "stock max";
    }

    const rest = () => {
        const resta = (valor > 0 ) ? setValor((prev) => prev - 1) : "stock min"
    }


    return (
        <div className="d-flex justify-content-center">
            <button className="btn bg-danger" onClick={rest}>-</button>
            <p className="m-2">{valor}</p>
            <button className="btn bg-success" onClick={add}>+</button>
        </div> 
    );
    }

export default FunctAddRest
