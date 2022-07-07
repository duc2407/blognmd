import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Registration from './components/pages/Registration';
import About from './components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/Services' element={<Services/>} exact/>
            <Route path='/Products' element={<Products/>} exact/>
            <Route path='/Sign-up' element={<SignUp/>} exact/>
            <Route path='/Registration' element={<Registration/>} exact/>
            <Route path='/Services/about' element={<About/>} />
          </Routes >
        <Footer />
      </Router>
    </>
  );
}

export default App;
