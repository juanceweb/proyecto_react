import Item from "./Item";



const FunctItemList = ({listaPokemons}) => {

        return (
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                {listaPokemons?.map((pokemon, index) => (
                    <Item key={index} pokemon={pokemon}/>
                ))}
                </div>
            </div>
        )
}



export default FunctItemList