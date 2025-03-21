import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
 
import Footer from "./Components/Footer/";


 
import Academics from "./Pages/Academics/Academics";
import './App.css'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Events from './Pages/Events/Events'
import OurServices from "./Pages/OurServices/OurServices";
import News from "./Pages/News/News";
import Gallery from "./Pages/Gallery/Gallery";
import Entrance from "./Pages/Entrance/Entrance";
import Magazine from "./Pages/Magazine/Magazine";
import Results from "./Pages/Results/Results";

function App() {
  return (
    <>
     <Router>
      <Navbar/>
      
      <Routes>
        <Route path = '/' element={<Home/> } />
        <Route path = '/about' element = {<About/> } />
        <Route path = '/news' element = {<News/> } />
        <Route path = '/events' element = {<Events/> } />
        <Route path = '/ourservices' element = {<OurServices/> } />
        <Route path = '/contactus' element = {<Contact/> } />
        <Route path = '/academics' element = {<Academics/> } />
        <Route path = '/entrance' element = {<Entrance/> } />
        <Route path = '/magazine' element = {<Magazine/> } />
        <Route path = '/results' element = {<Results/> } />
        

       
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
     </Router>
      <Footer />
    </>
  );
}

export default App;
