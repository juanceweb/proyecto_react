import React from "react";

function NavBar() {

    const tomato = {
        backgroundColor : "tomato",
        width : "100%",
        display : "flex",
    }

    const padding = {
        padding : "0px 30px",
        listStyleType: "none",    
    }

    const a = {
        textDecoration: "none",
        color: "white"
    }

    return (
        <nav style={tomato}>
            <ul style={{justifyContent:"left"}}>
                <li style={padding}><a style={a} href="#">Maria Maria</a></li>
            </ul>    
            <ul style={{display:"flex", width:"80%", justifyContent:"center"}}>
                <li style={padding}>
                    <a style={a} href="">Inicio</a>
                </li>
                <li style={padding}>
                    <a style={a} href="">Quienes Somos</a>
                </li>
                <li style={padding}>
                    <a style={a} href="">Tienda</a>
                </li>
                <li style={padding}>
                    <a style={a} href="">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar