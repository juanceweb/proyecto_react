import React from "react";
import imgCarrito from "../media/img-carrito.png";
import BottonCarrito from "./CartWidget"

function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Maria Maria</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100 justify-content-evenly">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled text-white" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                <BottonCarrito img={imgCarrito}/>
            </div>
        </nav>
    )
}

export default NavBar