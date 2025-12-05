import lion from '../assets/lion.jpeg';
import peacock from '../assets/peacock.jpg';
import cat from '../assets/cat.jpg';
import Butterfly from '../assets/Butterfly.jpg';
import Bird from '../assets/Bird.jpg';
import Waterfall from '../assets/waterfall.jpeg';

export default function Gallerys() {

  const gallery = [
    { name: "Lion", image: lion, descr: "The majestic lion, the king of the jungle." },
    { name: "Peacock Feather", image: peacock, descr: "A beautiful peacock feather with vivid colors." },
    { name: "Cat", image: cat, descr: "A cute and curious cat with soft fur." },
    { name: "Butterfly", image: Butterfly, descr: "A Beautiful Butterfly in a flower." },
    { name: "Bird", image: Bird, descr: "A beautiful bird on a flower." },
    { name: "Waterfall", image: Waterfall, descr: "A waterfall in somewhere." },
    { name: "Butterfly", image: Butterfly, descr: "A Beautiful Butterfly in a flower." },
    { name: "Butterfly", image: Butterfly, descr: "A Beautiful Butterfly in a flower." },
    { name: "Bird", image: Bird, descr: "A beautiful bird on a flower." },
  ];

  const galleryImages = gallery.map((Images, index) => (
    <div className="col-2 mb-4 text-center" key={index}>
      <div className="card" style={{ width: '100%', height: '380px' }}>
        <img src={Images.image} className="card-img-top" alt={Images.name} />
        <div className="card-body">
          <h3 className="card-title">{Images.name}</h3>
          <p className="card-text">{Images.descr}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <form className="d-flex justify-content-right position-absolute" style={{ right: '10px', top: '10px', width: 'auto' }}>
        <input className="form-control me-2" type="text" placeholder="Search" style={{ width: '145px' }} />
        <button className="btn btn-primary" type="button">Search</button>
      </form>

      <div className="container">
        <div className="row">
          {galleryImages}
        </div>
      </div>
    </>
  );
}

