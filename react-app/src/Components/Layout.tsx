import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import Home from './home';




function Main() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/Header" element={<Home />} />
          <Route path="/Gallery" element={<Gallery/>} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default Main;
