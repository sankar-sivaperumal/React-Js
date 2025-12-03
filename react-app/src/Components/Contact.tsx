import './index.css'
function Contact() {
  return (
    <>
<form>
    <div className="container mt-5" style={{maxWidth:"60%",padding: "15px" ,width:"40%"}}>
      <h1>Contact Page</h1>

    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" placeholder="you@example.com" />
    </div>

     <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Name" />
    </div>

   
    <div className ="mb-3" >
        <label htmlFor="phone" className="form-label">Phone</label>
        <input type="telephone" className="form-control" id="phone"  placeholder="Phone" />
    </div>

    <div className="mb-3">
      <label htmlFor="message" className="form-label">Message</label>
      <textarea className="form-control" id="message" rows={4}></textarea>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
   </div>
</form>

 </>
  );
}

export default Contact;
 
{/*    <form>
    <div className="container mt-5"style={{maxWidth:"60%",padding: "15px" ,width:"40%"}}>
      <h1>Contact Page</h1>

    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" placeholder="you@example.com" />
    </div>

     <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Name" />
    </div>

    <div className ="mb-3" >
        <label htmlFor="Phone" className="form-label">Phone</label>
        <input type="telephone" className="form-control" id="phone"  placeholder="Phone" />
    </div>

    <div className="mb-3">
      <label htmlFor="message" className="form-label">Message</label>
      <textarea className="form-control" id="message" rows={4}></textarea>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
   </div>
  </form> */}