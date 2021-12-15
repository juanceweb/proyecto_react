import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';
import Container from './components/ItemListConteiner';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Container nombre="Juance"/>
    </div>
  );
}

export default App;