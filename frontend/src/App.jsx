import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Avantage from './pages/Avantage'
import Services from './pages/Services'
import Statics from './pages/Statics'
import Products from './pages/Products'
import AdminProducts from './pages/Admin';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
import Avis from './pages/Avis';
import Descover from './pages/Descover';

const App = () => {
  return (
    <CartProvider>
      <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Avantage />
              <Services />
              <Statics />
              <Products />
              <Avis />
              <Descover />
            </>
          }
        />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin" element={<AdminProducts />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
};

export default App;