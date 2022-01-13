// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ListContainer from './components/ItemListConteiner';
import DetailContainer from './components/ItemDetailConteiner';
import CartBody from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomContext from './contexts/CustomContext';
import NavBar from './components/NavBar';
import CatalogContainer from './components/CatalogConteiner';

function App() {


  return (
    <CustomContext>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ListContainer />}></Route>
          <Route path="/category/:id" element={<ListContainer />}></Route>
          <Route path="/catalog" element={<CatalogContainer />}></Route>
          <Route path="/item/:id" element={<DetailContainer/>}></Route>
          <Route path="/cart" element={<CartBody/>}></Route>
        </Routes>  
      </BrowserRouter>
    </CustomContext>
  );
}

export default App;