import React, { useState, createContext } from 'react';
import './assets/all.scss';
import Header from './components/Header';
import HomePage from './components/Home';
import Subscribe from './components/Subscribe';
import ProductPage from './components/ProductPage';
import WishlistPage from './components/WishlistPage';
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//create context
export const WishlistContext = createContext();

function App() {
  const [wishlist, setWishlist] = useState([]);


  //add to the Wishlist 
  // const addWishlist = (product)=>{

  //   if(!wishlist.some((item)=>
  //     item.id===product.id
  //   )){
  //     setWishlist((prev)=>[...prev, product]);
  //     console.log('add product to wishlist ')
  //   }
  // }

  // const removeProducts = (productId)=>{
  //   setWishlist((prev) => prev.filter((product)=>product.id !== productId))

  // }

  return (
    <>
    <WishlistContext.Provider value={{wishlist}}>
      <Router basename="/perfume_ecommerce_react">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/product" element={<ProductPage />} />
          <Route path='/wishlist' element={<WishlistPage/>}/>
        </Routes>
        <Subscribe/>
        <Footer />
    </Router>
    </WishlistContext.Provider>
    </>
  )
}

export default App
