import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
    <div>
  <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
   </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
