
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer';

import Cart from './Components/Cart'
import ItemDetails from './Components/ItemDetails';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <NavBar/>

     <Routes>
       <Route  exact path='/'  element={<ItemListContainer/>}/>
       <Route  exact path='/categoria/:idcategoria'  element={<ItemListContainer/>}/>
       <Route  exact path='/detalleproducto/:idproducto'  element={<ItemDetails/>}/>
       <Route  exact path='/cart' element={ <Cart/>}/>
      
     </Routes>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
