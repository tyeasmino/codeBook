import React from 'react'
import Home from '../pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import Books from '../pages/Books';
import ProductDetails from '../pages/ProductDetails';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AllProducts from '../pages/AllProducts';
import CartList from '../pages/cart/CartList';


const Index = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books/>} />
                
                <Route path="/products" element={<AllProducts/>} />

                <Route path="/product/:id" element={<ProductDetails/>} />

                <Route path="/cart" element={<CartList/>} />




            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default Index