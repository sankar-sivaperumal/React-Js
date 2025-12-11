import lion from '../assets/lion.jpeg';
import Peacock from '../assets/peacock.jpg';
import cat from '../assets/cat.jpg';
import Butterfly from '../assets/Butterfly.jpg';
import Bird from '../assets/Bird.jpg';
import Waterfall from '../assets/waterfall.jpg';
import Tiger from '../assets/Tiger.jpg';
import Dog from '../assets/golden-retriever.jpg';

import '../App.css';

type galleryImages = {
  name: string;
  image: string;
  descr: string;
};

const defaultGallery: galleryImages[] = [
  { name: "Lion", image: lion, descr: "The majestic lion, the king of the jungle." },
  { name: "Peacock", image: Peacock, descr: "A beautiful peacock with colorful feathers." },
  { name: "Cat", image: cat, descr: "A cute and curious cat with soft fur." },
  { name: "Butterfly", image: Butterfly, descr: "A beautiful butterfly on a flower." },
  { name: "Bird", image: Bird, descr: "A beautiful bird on a flower." },
  { name: "Waterfall", image: Waterfall, descr: "A waterfall in somewhere." },
  { name: "Dog", image: Dog, descr: "A Golden Retriever dog." },
  { name: "Tiger", image: Tiger, descr: "A Tiger looking around." },
];

export default function GalleryPage() {
  return (
    <div className="container mt-3">
      <div className= "row" >
        {defaultGallery.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 text-center" key={index}>
            <div className="card h-100">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-truncate-description" title={item.descr}>
                  {item.descr}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
