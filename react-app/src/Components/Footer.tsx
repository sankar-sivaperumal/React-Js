function Footer(){
  return (
    <>
  <footer className="footer bg-light text-dark py-2 mx-2 fixed-bottom ">
  <div className="container d-flex justify-content-between align-items-center">

    <div className="text-start">
      <p className="text-left"><strong>Email:</strong> gallery@email.com</p>
      <p className="text-left"><strong>Phone:</strong> 044-999-666</p>
    </div>
  
    <div className="text-center">
      <p className="text m-0 mb-2">&copy; <strong>React</strong></p>

      <div className="d-flex gap-2">
        <a className="btn btn-info" href="https://instagram.com">Instagram</a>
        <a className="btn btn-primary" href="https://facebook.com">Facebook</a>
        <a className="btn btn-danger" href="https://youtube.com">YouTube</a>
      </div>
    </div>
   
    <div className="text-end">
      <p><strong>Address:</strong></p>
      <p >10, Beach Road Chennai</p>
    </div>

  </div>
</footer>
</>
);
}
    
 export default Footer;
