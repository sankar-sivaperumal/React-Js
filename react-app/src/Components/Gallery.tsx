//with model full 

/* import { useEffect, useState } from "react";
import Swal from "sweetalert2";
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

export default function Gallerys() {
  const [gallery, setGallery] = useState<galleryImages[]>(() => {
    const saved = localStorage.getItem("userGalleryData");
    if (saved) {
      const savedGallery: galleryImages[] = JSON.parse(saved);
      return [...defaultGallery, ...savedGallery];
    }
    return defaultGallery;
  });

  // edit images
  const [showModal, setShowModal] = useState(false);
  const [newImageName, setNewImageName] = useState("");
  const [newImageDescr, setNewImageDescr] = useState("");
  const [newImageFile, setNewImageFile] = useState<string | ArrayBuffer | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // file for edit
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewImageFile(reader.result);
      reader.readAsDataURL(file);
    }
  };

  //  save after edit
  const handleSaveEdit = () => {
    if (!newImageName) {
      Swal.fire("Oops!", "Please provide a name.", "warning");
      return;
    }

    const updatedGallery = [...gallery];
    updatedGallery[editIndex as number] = {
      name: newImageName,
      image: newImageFile ? (newImageFile as string) : gallery[editIndex as number].image,
      descr: newImageDescr || "No description",
    };
    setGallery(updatedGallery);
    setShowModal(false);
    setNewImageName("");
    setNewImageDescr("");
    setNewImageFile(null);
    setEditIndex(null);
  };

  // cancel of edit modal
  const handleCancelEdit = () => {
    setShowModal(false);
    setNewImageName("");
    setNewImageDescr("");
    setNewImageFile(null);
    setEditIndex(null);
  };

  // the edit modal 
  const handleEdit = (index: number) => {
    const item = gallery[index];
    setNewImageName(item.name);
    setNewImageDescr(item.descr);
    setNewImageFile(item.image);
    setEditIndex(index);
    setShowModal(true);
  };

  // Handle delete
  const handleDelete = (index: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedGallery = gallery.filter((_, idx) => idx !== index);
        setGallery(updatedGallery);
        Swal.fire("Deleted!", "Your image has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    const userImages = gallery.filter(
      (img) => !defaultGallery.some((def) => def.name === img.name)
    );
    localStorage.setItem("userGalleryData", JSON.stringify(userImages));
  }, [gallery]);

  return (
    <div className="container mt-3">
      <div className="row">
        {gallery.map((Images, index) => (
          <div className="col-3 mb-5 text-center" key={index}>
            <div className="card" style={{ width: '100%', height: '380px' }}>
              <img src={Images.image as string} className="card-img-top" alt={Images.name} />
              <div className="card-body">
                <h3 className="card-title">{Images.name}</h3>
                <p className="card-text text-truncate-description" title={Images.descr}>
                  {Images.descr}
                </p>
                <button className="btn btn-info mt-2 me-2" onClick={() => handleEdit(index)}>Edit</button>
                <button className="btn btn-danger mt-2" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      {showModal && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Image</h5>
                <button className="btn-close" onClick={handleCancelEdit}></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Image Name"
                  value={newImageName}
                  onChange={(e) => setNewImageName(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="About the Image"
                  value={newImageDescr}
                  onChange={(e) => setNewImageDescr(e.target.value)}
                />
                <input type="file" className="form-control mb-2" onChange={handleFileChange} />
                {newImageFile && <img src={newImageFile as string} alt="preview" className="img-fluid mt-1" />}
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleCancelEdit}>Cancel</button>
                <button className="btn btn-success" onClick={handleSaveEdit}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )} 
    </div>
  );
} */
 


// with  model for  delete and useeffrct


/* import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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



export default function Gallerys() {
  const [gallery, setGallery] = useState<galleryImages[]>(() => {
    const saved = localStorage.getItem("userGalleryData");
    if (saved) {
      const savedGallery: galleryImages[] = JSON.parse(saved);
      return [...defaultGallery, ...savedGallery];
    }
    return defaultGallery;
  });



  // Handle delete
  const handleDelete = (index: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedGallery = gallery.filter((_, idx) => idx !== index);
        setGallery(updatedGallery);
        Swal.fire("Deleted!", "Your image has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    const userImages = gallery.filter(
      (img) => !defaultGallery.some((def) => def.name === img.name)
    );
    localStorage.setItem("userGalleryData", JSON.stringify(userImages));
  }, [gallery]);



  return (
    <div className="container mt-3">
      <div className="row">
        {gallery.map((Images, index) => (
          <div className="col-3 mb-5 text-center" key={index}>
            <div className="card" style={{ width: '100%', height: '380px' }}>
              <img src={Images.image} className="card-img-top" alt={Images.name} />
              <div className="card-body">
                <h3 className="card-title">{Images.name}</h3>
                <p className="card-text text-truncate-description" title={Images.descr}>
                  {Images.descr}
                </p>   
                <button className="btn btn-info mt-2 me-2" onClick={() => ({})}>Edit</button>             
                <button className="btn btn-danger mt-2" onClick={() => handleDelete(index)}>
                  Delete
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
  */


import { useEffect, useState } from "react";
import Swal from "sweetalert2";
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
  fileName?: string; // optional field for file name
};

const defaultGallery: galleryImages[] = [
  { name: "Lion", image: lion, descr: "The majestic lion, the king of the jungle.", fileName: "lion.jpeg" },
  { name: "Peacock", image: Peacock, descr: "A beautiful peacock with colorful feathers.", fileName: "peacock.jpg" },
  { name: "Cat", image: cat, descr: "A cute and curious cat with soft fur.", fileName: "cat.jpg" },
  { name: "Butterfly", image: Butterfly, descr: "A beautiful butterfly on a flower.", fileName: "Butterfly.jpg" },
  { name: "Bird", image: Bird, descr: "A beautiful bird on a flower.", fileName: "Bird.jpg" },
  { name: "Waterfall", image: Waterfall, descr: "A waterfall in somewhere.", fileName: "waterfall.jpg" },
  { name: "Dog", image: Dog, descr: "A Golden Retriever dog.", fileName: "golden-retriever.jpg" },
  { name: "Tiger", image: Tiger, descr: "A Tiger looking around.", fileName: "Tiger.jpg" },
];

export default function Gallerys() {
  const [gallery, setGallery] = useState<galleryImages[]>(() => {
    const saved = localStorage.getItem("userGalleryData");
    if (saved) {
      const savedGallery: galleryImages[] = JSON.parse(saved);
      return [...defaultGallery, ...savedGallery];
    }
    return defaultGallery;
  });

  // edit modal states
  const [showModal, setShowModal] = useState(false);
  const [newImageName, setNewImageName] = useState("");
  const [newImageDescr, setNewImageDescr] = useState("");
  const [newImageFile, setNewImageFile] = useState<string | ArrayBuffer | null>(null);
  const [newImageFileName, setNewImageFileName] = useState<string | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImageFile(reader.result);
        setNewImageFileName(file.name); // store file name
      };
      reader.readAsDataURL(file);
    }
  };

  // Open edit modal
  const handleEdit = (index: number) => {
    const item = gallery[index];
    setNewImageName(item.name);
    setNewImageDescr(item.descr);
    setNewImageFile(item.image);
    setNewImageFileName(item.fileName || null);
    setEditIndex(index);
    setShowModal(true);
  };

  // Save edits
  const handleSaveEdit = () => {
    if (!newImageName) {
      Swal.fire("Oops!", "Please provide a name.", "warning");
      return;
    }

    const updatedGallery = [...gallery];
    updatedGallery[editIndex as number] = {
      name: newImageName,
      image: newImageFile ? (newImageFile as string) : gallery[editIndex as number].image,
      descr: newImageDescr || "No description",
      fileName: newImageFileName || gallery[editIndex as number].fileName,
    };
    setGallery(updatedGallery);
    setShowModal(false);
    setNewImageName("");
    setNewImageDescr("");
    setNewImageFile(null);
    setNewImageFileName(null);
    setEditIndex(null);
  };

  // Cancel modal
  const handleCancelEdit = () => {
    setShowModal(false);
    setNewImageName("");
    setNewImageDescr("");
    setNewImageFile(null);
    setNewImageFileName(null);
    setEditIndex(null);
  };

  // Delete image
  const handleDelete = (index: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedGallery = gallery.filter((_, idx) => idx !== index);
        setGallery(updatedGallery);
        Swal.fire("Deleted!", "Your image has been deleted.", "success");
      }
    });
  };

  // Persist user-added images
  useEffect(() => {
    const userImages = gallery.filter(
      (img) => !defaultGallery.some((def) => def.name === img.name)
    );
    localStorage.setItem("userGalleryData", JSON.stringify(userImages));
  }, [gallery]);

  return (
    <div className="container mt-3">
      <div className="row">
        {gallery.map((Images, index) => (
          <div className="col-3 mb-5 text-center" key={index}>
            <div className="card" style={{ width: '100%', height: '380px' }}>
              <img src={Images.image as string} className="card-img-top" alt={Images.name} />
              <div className="card-body">
                <h3 className="card-title">{Images.name}</h3>
                <p className="card-text text-truncate-description" title={Images.descr}>
                  {Images.descr}
                </p>
                <button className="btn btn-info mt-2 me-2" onClick={() => handleEdit(index)}>Edit</button>
                <button className="btn btn-danger mt-2" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Image</h5>
                <button className="btn-close" onClick={handleCancelEdit}></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Image Name"
                  value={newImageName}
                  onChange={(e) => setNewImageName(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="About the Image"
                  value={newImageDescr}
                  onChange={(e) => setNewImageDescr(e.target.value)}
                />
                <input type="file" className="form-control mb-2" onChange={handleFileChange} />

                {newImageFile && (
                  <div className="mt-2">
                    <img src={newImageFile as string} alt="preview" className="img-fluid mb-1" />
                    {newImageFileName && <div><strong>File Name:</strong> {newImageFileName}</div>}
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleCancelEdit}>Cancel</button>
                <button className="btn btn-success" onClick={handleSaveEdit}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
