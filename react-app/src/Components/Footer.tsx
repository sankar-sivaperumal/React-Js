function Footer(){
  return (
    <>
      <footer className="footer bg-light text-dark fixed-bottom d-flex justify-content-between align-items-center px-3 py-1 my-0">

        <div>
          <p className="m-0"><strong>Email:</strong> gallery@email.com</p>
          <p className="m-0"><strong>Phone:</strong> 044-999-666</p>
        </div>

        
        <div className="text-center">
          <p className="m-0">&copy; <strong>React</strong></p>
          <div>
            <a className="btn btn-info mx-1 btn-sm" href="https://instagram.com">Instagram</a>
            <a className="btn btn-primary mx-1 btn-sm" href="https://facebook.com">Facebook</a>
            <a className="btn btn-danger mx-1 btn-sm" href="https://youtube.com">YouTube</a>
          </div>
        </div>

       
        <div className="text-end">
          <p className="m-0"><strong>Address:</strong></p>
          <p className="m-0">10, Beach Road Chennai</p>
        </div>

      </footer>
    </>
  );
}

export default Footer;
