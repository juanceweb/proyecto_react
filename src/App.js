// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ListContainer from './components/ItemListConteiner';
import DetailContainer from './components/ItemDetailConteiner';
import CartBody from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListContainer />}></Route>
        <Route path="/category/:id" element={<ListContainer />}></Route>
        <Route path="/item/:id" element={<DetailContainer/>}></Route>
        <Route path="/cart" element={<CartBody/>}></Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;