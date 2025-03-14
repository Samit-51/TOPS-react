
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Academics from "./Pages/Academics";
import './App.css'
import About from './Pages/About'
import OurServices from "./Pages/OurServices";





function App() {
  return (
    <>

     <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Home/> } />
        <Route path = '/about' element = {<About/> } />
        <Route path = '/Academics' element = {<Academics/> } />
        <Route path = '/OurServices' element = {<OurServices/>} />
 
      </Routes>
     </Router>
      <Footer />
    </>
  );
}

export default App;
