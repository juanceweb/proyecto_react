import FunctAddRest from "./ItemCountFunct"


const Item = ({id, titulo, descripcion, precio, img}) => {
    return (
        <div className="col-7 card m-5">
            <h5 className="card-title">{id}</h5>
            <img src={img} alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <h5 className="card-title">${precio}</h5>
                <p className="card-text">{descripcion}</p>
                <FunctAddRest valorInicial={1} stockIni={8} />
                <a href="#" className="btn btn-primary m-3">Comprar</a>
            </div>
        </div>
    )
}

// className="card-img-top"

export default Item