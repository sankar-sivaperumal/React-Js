/* 
function Home() {
  return (
    <>
      <div>
        <h1 style={{ fontFamily: "Inter", textAlign: "center" }}>Home Page</h1>
      </div>
    </>
    
  );
}
export default Home;

 */



//Model from other fc to show only button and tag

 /* import { useState } from "react";
import Model from "./Model";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <h1 style={{ fontFamily: "Inter", textAlign: "center" }}>
          Home Page
        </h1>
      </div>

      <button
        className="btn btn-primary position-absolute"
        style={{ right: "10px", top: "10px", width: "auto" }}
        onClick={() => setShowModal(true)}
      >
        Add New Image
      </button>

     
      {showModal && (
        <Model onClose={() => setShowModal(false)} />
      )}
    </>
  );
}  */


/* import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

type GalleryImage = {
  name: string;
  image: string;
  descr: string;
};

export default function Home() {
  const [gallery, setGallery] = useState<GalleryImage[]>(() => {
    const saved = localStorage.getItem("userGalleryData");
    return saved ? JSON.parse(saved) : [];
  });

  const [showModal, setShowModal] = useState(false);
  const [newImageName, setNewImageName] = useState("");
  const [newImageDescr, setNewImageDescr] = useState("");
  const [newImageFile, setNewImageFile] = useState<string | ArrayBuffer | null>(null);
  const [newImageFileName, setNewImageFileName] = useState<string>("");
  const navigate = useNavigate();


  useEffect(() => {
    localStorage.setItem("userGalleryData", JSON.stringify(gallery));
  }, [gallery]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewImageFile(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!newImageName || !newImageFile) {
      Swal.fire("Oops!", "Please provide both a name and an image.", "warning");
      return;
    }

    setGallery([
      ...gallery,
      { name: newImageName, image: newImageFile as string, descr: newImageDescr || "No description" }
    ]);

    handleCancel();

    navigate("/gallery");
  };

  const handleCancel = () => {
    setShowModal(false);
    setNewImageName("");
    setNewImageDescr("");
    setNewImageFile(null);
    setNewImageFileName("");
  };

  return (
    <>
      <div>
        <h1 style={{ fontFamily: "Inter", textAlign: "center" }}>Home Page</h1>
      </div>

      <button
        className="btn btn-primary position-absolute"
        style={{ right: '10px', top: '10px', width: 'auto' }}
        onClick={() => setShowModal(true)}
      >
        Add New Image
      </button>

      {showModal && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Image</h5>
                <button className="btn-close" onClick={handleCancel}></button>
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
                 {newImageFileName && (
                    <p className="mt-1">Selected file: {newImageFileName}</p>
                  )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleCancel}>Cancel</button>
                <button className="btn btn-success" onClick={handleSave}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}  */ 

//if  not reload that can be retain again

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

type GalleryImage = {
  name: string;
  image: string;
  descr: string;
};

export default function Home() {
  const [gallery, setGallery] = useState<GalleryImage[]>(() => {
    const saved = localStorage.getItem("userGalleryData");
    return saved ? JSON.parse(saved) : [];
  });

  const [showModal, setShowModal] = useState(false);
  const [newImageName, setNewImageName] = useState("");
  const [newImageDescr, setNewImageDescr] = useState("");
  const [newImageFile, setNewImageFile] = useState<string | ArrayBuffer | null>(null);
  const [newImageFileName, setNewImageFileName] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("userGalleryData", JSON.stringify(gallery));
  }, [gallery]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewImageFileName(file.name); 
      const reader = new FileReader();
      reader.onloadend = () => setNewImageFile(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!newImageName || !newImageFile) {
      Swal.fire("Oops!", "Please provide both a name and an image.", "warning");
      return;
    }

    setGallery([
      ...gallery,
      {
        name: newImageName,
        image: newImageFile as string,
        descr: newImageDescr || "No description"
      }
    ]);

    
    setNewImageName("");
    setNewImageDescr("");
    setNewImageFile(null);
    setNewImageFileName("");

    setShowModal(false);
    navigate("/gallery");
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <h1 style={{ fontFamily: "Inter", textAlign: "center" }}>Home Page</h1>
      </div>

      <button
        className="btn btn-primary position-absolute"
        style={{ right: '10px', top: '10px', width: 'auto' }}
        onClick={() => setShowModal(true)}
      >
        Add New Image
      </button>

      {showModal && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Image</h5>
                <button className="btn-close" onClick={handleCancel}></button>
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
                  <img src={newImageFile as string} alt="preview" className="img-fluid mt-1" />
                )}
                {newImageFileName && (
                  <p className="mt-1">Selected file: {newImageFileName}</p>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleCancel}>Cancel</button>
                <button className="btn btn-success" onClick={handleSave}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



