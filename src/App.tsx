import React from 'react';
import './Styles/App.css';

import { Container } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from './Components/Navbar';
import { Store } from './Pages/Store';
import { ProductDetails } from './Pages/ProductDetails';

function App() {


  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/store" />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<h1>Cart</h1>} />
        </Routes>
      </Container>
    </React.Fragment>
  )
}

export default App;
