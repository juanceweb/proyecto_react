import React, { useState } from "react";
import imgCarrito from "../media/img-carrito.png";
import BottonCarrito from "./CartWidget"
import { Link, NavLink } from "react-router-dom";
import {useContext, useEffect} from "react";
import CartContext from "../contexts/CartContext";

function NavBar() {

    const {arr} = useContext(CartContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <div className="container-fluid">
                <Link className="nav-link text-white" to="/">POKEMON</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100 justify-content-evenly">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to={"/category/gen1"}>GEN 1</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to={"/category/gen2"}>GEN 2</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-gray disabled" href="#">GEN 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled text-gray" href="#" tabIndex="-1" aria-disabled="true">GEN 4</a>
                        </li>
                    </ul>
                </div>
                <NavLink to={"/cart"}><BottonCarrito img={imgCarrito}/><span className="badge bg-secondary">{arr.length}</span></NavLink>                
            </div>
        </nav>
    )
}

export default NavBar