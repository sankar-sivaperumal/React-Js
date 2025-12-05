import { useEffect, useState } from "react";
import lion from '../assets/lion.jpeg';
import Feather from '../assets/Feather.jpg';
import cat from '../assets/cat.jpg';
import Butterfly from '../assets/Butterfly.jpg';
import Bird from '../assets/Bird.jpg';
import Waterfall from '../assets/waterfall.jpg';
import Tiger from '../assets/Tiger.jpg';
import Dog from '../assets/golden-retriever.jpg';

type galleryImages = {
  name: string;
  image: string;
  descr: string;
};

const defaultGallery: galleryImages[] = [
  { name: "Lion", image: lion, descr: "The majestic lion, the king of the jungle." },
  { name: "Peacock Feather", image: Feather, descr: "A beautiful peacock feather with vivid colors." },
  { name: "Cat", image: cat, descr: "A cute and curious cat with soft fur." },
  { name: "Butterfly", image: Butterfly, descr: "A Beautiful Butterfly in a flower." },
  { name: "Bird", image: Bird, descr: "A beautiful bird on a flower." },
  { name: "Waterfall", image: Waterfall, descr: "A waterfall in somewhere." },
  { name: "Dog", image: Dog, descr: "A Golden Retriever dog." },
  { name: "Tiger", image: Tiger, descr: "A Tiger Looking." },
];

export default function Gallerys() {
  const [gallery, setGallery] = useState<galleryImages[]>(() => {
    const saved = localStorage.getItem("galleryData");
    if (saved) {
      const savedGallery: galleryImages[] = JSON.parse(saved);
      return [
        ...defaultGallery,
        ...savedGallery.filter(
          item => !defaultGallery.some(def => def.name === item.name)
        ),
      ];
    }
    return defaultGallery;
  });

  useEffect(() => {
    localStorage.setItem("galleryData", JSON.stringify(gallery));
  }, [gallery]);

  const [showModal, setShowModal] = useState(false);
  const [newImageName, setNewImageName] = useState("");
  const [newImageDescr, setNewImageDescr] = useState("");
  const [newImageFile, setNewImageFile] = useState<string | ArrayBuffer | null>(null);
  const [editIndex, seteditIndex] = useState<number | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewImageFile(reader.result);
      reader.readAsDataURL(file);
    }
  };


const handleSave = () => {
  if (!newImageName) {
    alert("Please provide a name.");
    return;
  }

  if (editIndex !== null) {
    // Update existing
    const updatedGallery = [...gallery];
    updatedGallery[editIndex] = {
      name: newImageName,
      image: newImageFile ? (newImageFile as string) : gallery[editIndex].image, // use existing image if no new file
      descr: newImageDescr || "No description",
    };
    setGallery(updatedGallery);
  } else {
    // Add new
    if (!newImageFile) {
      alert("Please provide an image file.");
      return;
    }
    setGallery([
      ...gallery,
      { name: newImageName, image: newImageFile as string, descr: newImageDescr || "No description" }
    ]);
  }

  handleCancel();
};


  const handleCancel = () => {
    setShowModal(false);
    setNewImageName("");
    setNewImageDescr("");
    setNewImageFile(null);
    seteditIndex(null);
  };

  const handleEdit = (index: number) => {
    const item = gallery[index];
    setNewImageName(item.name);
    setNewImageDescr(item.descr);
    setNewImageFile(item.image);
    seteditIndex(index);
    setShowModal(true);
  };

  const handleDelete = () => {
    if (editIndex === null) return;
    if (window.confirm("Are you sure you want to delete this image?")) {
      setGallery(gallery.filter((_, idx) => idx !== editIndex));
      handleCancel();
    }
  };

  return (
    <>
      <form className="d-flex justify-content-right position-absolute" style={{ right: '10px', top: '10px', width: 'auto' }}>
        <input className="form-control me-2" type="text" placeholder="Search" style={{ width: '145px' }} />
        <button className="btn btn-info me-2" type="button">Search</button>
        <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>Add New Image</button>
      </form>

      {showModal && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editIndex !== null ? "Edit Image" : "Add New Image"}</h5>
                <button className="btn-close" onClick={handleCancel}></button>
              </div>
              <div className="modal-body">
                <input type="text"
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
                {newImageFile && <img src={newImageFile as string} alt="preview" className="img-fluid mt-2" />}
              </div>
              <div className="modal-footer">
                {editIndex !== null && (
                  <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                )}
                <button className="btn btn-primary" onClick={handleCancel}>Cancel</button>
                <button className="btn btn-success" onClick={handleSave}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mt-5 pt-5">
        <div className="row">
          {gallery.map((Images, index) => (
            <div className="col-3 mb-4 text-center" key={index}>
              <div className="card" style={{ width: '100%', height: '380px' }}>
                <img src={Images.image as string} className="card-img-top" alt={Images.name} />
                <div className="card-body">
                  <h3 className="card-title">{Images.name}</h3>
                  <p className="card-text">{Images.descr}</p>
                  <button className="btn btn-info mt-2" onClick={() => handleEdit(index)}>Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
