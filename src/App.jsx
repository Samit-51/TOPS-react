import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
<<<<<<< HEAD
import Footer from "./Components/Footer/";
=======
import Footer from "./Components/Footer";
>>>>>>> 74563c1cef386b5eaa8922cd6f7baa45ce255d69
import Academics from "./Pages/Academics/Academics";
import './App.css'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Events from './Pages/Events/Events'
<<<<<<< HEAD
import OurServices from "./Pages/OurServices/OurServices";
import News from "./Pages/News/News";
=======
import OurServices from "./Pages/Our services/OurServices";
import Gallery from "./Pages/Gallery/Gallery";
>>>>>>> 74563c1cef386b5eaa8922cd6f7baa45ce255d69

function App() {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Home/> } />
        <Route path = '/about' element = {<About/> } />
<<<<<<< HEAD
        <Route path = '/news' element = {<News/> } />
        <Route path = '/events' element = {<Events/> } />
        <Route path = '/ourservices' element = {<OurServices/> } />
        <Route path = '/contactus' element = {<Contact/> } />
        <Route path = '/academics' element = {<Academics/> } />
        
=======
        <Route path = '/Academics' element = {<Academics/> } />
        <Route path = '/OurServices' element = {<OurServices/>} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/events" element = {<Events />} />
        <Route path="/gallery" element={<Gallery />} />
>>>>>>> 74563c1cef386b5eaa8922cd6f7baa45ce255d69
      </Routes>
     </Router>
      <Footer />
    </>
  );
}

export default App;
