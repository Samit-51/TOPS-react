import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Academics from "./Pages/Academics";
import './App.css'
import Contact from './Pages/Contact'
import Home from './Pages/Home/Home'
import About from './Pages/About'
import Events from './Pages/Events'

function App() {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Home/> } />
        <Route path = '/about' element = {<About/> } />
        <Route path = '/Academics' element = {<Academics/> } />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/events" element = {<Events />} />
      </Routes>
     </Router>
      <Footer />
    </>
  );
}

export default App;
