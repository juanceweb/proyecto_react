import React from "react";

const CartBody = ({img="", nombre="", cantidad=""}) => {

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-3 border border-dark border-3 bg-danger m-5">
                    <img src={img} className="border border-dark border-3 card-img-top mt-3 bg-white" alt="..."></img>
                    <p>{nombre}</p>
                    <p>{cantidad}</p>
                </div>
            </div>
        </div>
    )
}

export default CartBody