import { Link } from 'react-router-dom';

 function Navbar() {
    return (
   <>
    <nav className="navbar navbar-expand-sm bg-light mx-1  my-1 px-1">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li><Link className="nav-link" to= "/Header" >Home</Link></li> 
          <li><Link className="nav-link" to="/Gallery">Gallery</Link></li>   
          <li><Link className="nav-link" to="/Contact">Contact</Link></li>
        </ul>

        <form className="d-flex">
         <input className="form-control me-2" type="text" placeholder="Search"></input>
         <button className="btn btn-primary" type="button">Search</button>

        </form>
     </div>
    </nav>
  </>
  );
}

export default Navbar;