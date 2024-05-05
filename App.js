import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='product' element={<Product/>}>
          <Route path=':productID' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
