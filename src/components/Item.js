import { NavLink } from "react-router-dom";


const Item = ({pokemon}) => {

    // const [pokemonData, setPokemonData] = useState([]);

    // const fetchPokemon = async () => {
    //     const call = await fetch(pokemon?.url);
    //     const result = await call.json();
    //     setPokemonData(result);
    // };

    // useEffect(() => {
    //     fetchPokemon();
    // },[pokemon]);

    return (
        <div className="col-2 card mx-5 my-3 border border-dark border-3 bg-danger">
            <h5 className="card-title text-white mt-1">N°{pokemon.poke_id}</h5>
            <img src={pokemon?.img} className="border bg-white border-dark border-3 card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title text-white">{pokemon.nombre.toUpperCase()}</h5>
                <NavLink className="btn btn-secondary m-3 border-dark border-2" to={`/item/${pokemon.poke_id}`}>VER MAS</NavLink>
            </div>
        </div>
    )
}

export default Item