HEAD
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Academics from "./Pages/Academics";
import './App.css'
import About from './Components/About/About'



function App() {
  return (
    <>

     <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Home/> } />
        <Route path = '/Academics' element = {<Academics/> } />
        <Route path = '/About' element = {<About/>} />
      </Routes>
     </Router>
      <Footer />
    </>
  );
}

export default App;
