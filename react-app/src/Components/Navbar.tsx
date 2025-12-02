
 function Navbar() {
    return (
        <>
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
       <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href= "Header.tsx">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Gallery.tsx">Gallery</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href=".Footer.tsx">Contact</a>
      </li>
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

 





  