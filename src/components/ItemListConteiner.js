import FunctItemList from "./ItemList"


const Container = ({nombre}) => {
    return (
        <div>
            <h1 className="p-5 color-red">Bienvenido {nombre}!</h1>
            <FunctItemList />
        </div>
    )
}

export default Container