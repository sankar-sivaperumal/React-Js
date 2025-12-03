import lion from '../assets/lion.jpeg'; 
import peacock from '../assets/peacock.jpg'; 
import cat from '../assets/cat.jpg'; 
import '../App.css'

export default function Gallery() {
  return (
    <>
  
 <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>

      <div className="card" style={{ width: '18rem', margin:"3rem",textAlign:"center"}}>
        <img src={lion} className="card-img-top" alt="Lion" />
        <div className="card-body">
          <h3 className="card-title">Lion</h3>
          <p className="card-text">The majestic lion, the king of the jungle.</p>
        </div>
        </div>

        <div className="card" style={{ width: '18rem', margin:"3rem",textAlign:"center"}}>
        <img src={peacock} className="card-img-top" alt="Peacock Feather" />
        <div className="card-body">
          <h3 className="card-title">Peacock Feather</h3>
          <p className="card-text">A beautiful peacock feather with vivid colors.</p>
        </div>
        </div>
        
      <div className="card" style={{ width: '18rem', margin:"3rem",textAlign:"center"}}>
           <img src={cat} className="card-img-top" alt="Cat" />
          <div className="card-body">
           <h3 className="card-title">Cat</h3>
           <p className="card-text">A cute and curious cat with soft fur.</p>
        </div>
      </div>
      </div>
    </>
  );
}
