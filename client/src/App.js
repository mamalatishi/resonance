import React,{lazy,Suspense} from 'react';
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer.js'
import Navbar from './components/navbar/Navbar.js'
const Homepage = lazy(() => import('./pages/Homepage'))
const Products = lazy(() => import('./pages/Products.js'))
const Productpage = lazy(() => import('./pages/Productpage.js'))
const Cart = lazy(() => import('./pages/Cart.js'))
const Categorypage = lazy(() => import('./pages/Categorypage.js'))

function App() {
  return (
    <div className="App" >
      <Suspense fallback={<div>isLoading...</div>} >
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:productid' element={<Productpage/>}/>
          <Route path='/categories' element={<Categorypage/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
