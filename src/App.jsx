// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import Productlist from './Pages/Product/Productlist';
import Header from './Components/Header';
import ProductDetail from './Pages/ProductDetail';
import ScrollTotop from './Components/ScrollTotop';
import Login from './Pages/Login';
import Register from './Pages/Register';
const App = () => {
  return (
    <div className='dark:bg-slate-800'>
      <Router>
        <Header />
        <ScrollTotop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Productlist />} />
          {/* Update the route path to /product/:id */}
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          

        </Routes>
      </Router>
    </div> 
  );
};

export default App;
