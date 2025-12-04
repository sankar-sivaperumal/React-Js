import lion from '../assets/lion.jpeg'; 
import peacock from '../assets/peacock.jpg'; 
import cat from '../assets/cat.jpg'; 
import Butterfly from '../assets/Butterfly.jpg';
import Bird from '../assets/Bird.jpg'; 
import Waterfall from '../assets/waterfall.jpeg'; 

export default function Gallery() {
  // const galleryImages = [
  //   {name,}
  // ]
  return (
    <>
      <form className="d-flex justify-content-right position-absolute" style={{ right: '10px', top: '10px', width: 'auto' }}> 
        <input className="form-control me-2" type="text" placeholder="Search" style={{ width: '145px' }} />
        <button className="btn btn-primary" type="button">Search</button>
      </form>

      <div className="container">
        <div className="row">
         
          <div className="col-2 mb-4 text-center">
            <div className="card" style={{ width: '100%', height: '380px' }}>
              <img src={lion} className="card-img-top" alt="Lion" />
              <div className="card-body">
                <h3 className="card-title">Lion</h3>
                <p className="card-text">The majestic lion, the king of the jungle.</p>
              </div>
            </div>
          </div>

          <div className="col-2 mb-4 text-center">
            <div className="card" style={{ width: '90%', height: '380px' }}>
              <img src={peacock} className="card-img-top" alt="Peacock Feather" />
              <div className="card-body">
                <h3 className="card-title">Peacock Feather</h3>
                <p className="card-text">A beautiful peacock feather with vivid colors.</p>
              </div>
            </div>
          </div>
        
          <div className="col-2 mb-4 text-center">
            <div className="card" style={{ width: '100%', height: '380px' }}>
              <img src={cat} className="card-img-top" alt="Cat" />
              <div className="card-body">
                <h3 className="card-title">Cat</h3>
                <p className="card-text">A cute and curious cat with soft fur.</p>
              </div>
            </div>
          </div>

        
          <div className="col-2 mb-4 text-center">
            <div className="card" style={{ width: '100%', height: '380px' }}>
              <img src={Butterfly} className="card-img-top" alt="Butterfly" />
              <div className="card-body">
                <h3 className="card-title">Butterfly</h3>
                <p className="card-text">A Beautiful Butterfly in a flower.</p>
              </div>
            </div>
          </div>

          <div className="col-2 mb-4 text-center">
            <div className="card" style={{ width: '100%', height: '380px' }}>
              <img src={Bird} className="card-img-top" alt="Bird" />
              <div className="card-body">
                <h3 className="card-title">Bird</h3>
                <p className="card-text">A beautiful bird on a flower</p>
              </div>
            </div>
          </div>

          <div className="col-2 mb-4 text-center">
            <div className="card" style={{ width: '100%', height: '380px' }}>
              <img src={Waterfall} className="card-img-top" alt="Waterfall" />
              <div className="card-body">
                <h3 className="card-title">Waterfall</h3>
                <p className="card-text">A waterfall in somewhere.</p>
              </div>
            </div>
          </div>  
        
             <div className="col-2 mb-4 text-center">
            <div className="card" style={{ width: '100%', height: '380px' }}>
              <img src={Butterfly} className="card-img-top" alt="Butterfly" />
              <div className="card-body">
                <h3 className="card-title">Butterfly</h3>
                <p className="card-text">A Beautiful Butterfly in a flower.</p>
              </div>
            </div>
          </div>
          
           <div className="col-2 mb-4 text-center">
            <div className="card" style={{ width: '100%', height: '380px' }}>
              <img src={Butterfly} className="card-img-top" alt="Butterfly" />
              <div className="card-body">
                <h3 className="card-title">Butterfly</h3>
                <p className="card-text">A Beautiful Butterfly in a flower.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
 