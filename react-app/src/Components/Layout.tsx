import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Gallerys from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import Home from './home';
import JsonTable from './jsondata';





function Main() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/Header" element={<Home />} />
          <Route path="/Gallery" element={<Gallerys />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/JsonTable" element={<JsonTable />} />
        </Routes>
      </div>
      
      <Footer />
    </Router>
  );
}

export default Main;
