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
        <Route path="/" element={<ListContainer />}></Route>
        <Route path="/category/:id" element={<ListContainer />}></Route>
        <Route path="/item/:id" element={<DetailContainer nombre="Pedro"/>}></Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;