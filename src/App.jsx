import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import About from './Components/About/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';



function App() {

  return (
    <>
      <Navbar />
      <Home/>
      <Footer />
    </>
  )
}

export default App
