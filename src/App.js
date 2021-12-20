// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ListContainer from './components/ItemListConteiner';
import DetailContainer from './components/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListContainer nombre="Gen 1" index={0} max={140} min={0} dif={11}/>}></Route>
        <Route exact path="/:id" element={<DetailContainer nombre="Pedro"/>}></Route>
      </Routes>  
    </BrowserRouter>



    // <div className="App">
    //     <ListContainer nombre="Gen 2" index={151} max={220} min={151} dif={20}/>
    // </div>
  );
}

export default App;