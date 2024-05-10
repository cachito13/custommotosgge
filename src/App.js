import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Cardtitle} from './components/CardTitle/Cardtitle.js';
import { NavBar } from './components/Navbar/Navbar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import { Carusel } from './components/Carusel/carusel.js';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Cardtitle/>
    <Carusel/>
    <ItemListContainer props={"Item list container"} />
    
  
    </div>
  );
}

export default App;
