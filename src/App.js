import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Cardtitle} from './components/CardTitle/Cardtitle.js';
import { NavBar } from './components/Navbar/Navbar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import { Carusel } from './components/Carusel/carusel.js';
import Nosotros from './components/Nosotros/Nosotros.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path='/' element={<><Cardtitle /><Carusel /></>} />
        <Route path='/ItemListContainer' element={<ItemListContainer />} />
        <Route path='/ItemListContainer/productos/:categoryId' element={ <ItemListContainer /> }/>
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='*' element = {<Navigate to= {"/"} />} />
    </Routes>
    <Footer/>
</BrowserRouter>
  );
}

export default App;
