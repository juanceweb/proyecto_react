import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';
import Container from './components/ItemListConteiner';
import ClassAddRest from './components/ItemCountClass';
import FunctAddRest from './components/ItemCountFunct';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Container nombre="Juance"/>
        <h2 className="p-1">Con Class</h2>
        <ClassAddRest valorInicial={1} stock={10}/>
        <hr className="p-1"></hr>
        <h2 className="p-1">Con Function</h2>
        <FunctAddRest valorInicial={1} stockIni={8} />
    </div>
  );
}

export default App;