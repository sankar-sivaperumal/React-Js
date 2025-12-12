import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';  
import Gallery from './Redux toolkit/gallery';  
import Contact from './Contact';  
import Footer from './Footer';  
import Home from './Redux toolkit/home';  
import JsonTable from './jsondata';  

export default function Main() {
  return (
    <Router>
      <Navbar />  
      <div className="container mt-3">  
        <Routes>
          <Route path="/Home" element={<Home />} />  
          <Route path="/Gallery" element={<Gallery />} /> 
          <Route path="/Contact" element={<Contact />} />  
          <Route path="/JsonTable" element={<JsonTable />} />  
        </Routes>
      </div>
      <Footer />  
    </Router>
  );
}
