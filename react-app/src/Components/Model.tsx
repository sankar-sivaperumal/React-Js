/* import { useState } from "react";
import Swal from "sweetalert2";

type Props = {
  onClose: () => void;
};

export default function Model({ onClose }: Props) {
  const [newImageName, setNewImageName] = useState("");
  const [newImageDescr, setNewImageDescr] = useState("");
  const [newImageFile, setNewImageFile] = useState<string | ArrayBuffer | null>(null);

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

    // Save logic 
    onClose();
  };

  return (
    <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Add New Image</h5>
            <button className="btn-close" onClick={onClose}></button>
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
          </div>

          <div className="modal-footer">
            <button className="btn btn-primary" onClick={onClose}>Cancel</button>
            <button className="btn btn-success" onClick={handleSave}>Save</button>
          </div>

        </div>
      </div>
    </div>
  );
} */


  import { useState } from "react";
import Swal from "sweetalert2";

type galleryImages = {
  name: string;
  image: string;
  descr: string;
  fileName: string;
};

type Props = {
  onClose: () => void;
  onSave: (newImage: galleryImages) => void; 
};

export default function Model({ onClose, onSave }: Props) {
  const [newImageName, setNewImageName] = useState("");
  const [newImageDescr, setNewImageDescr] = useState("");
  const [newImageFile, setNewImageFile] = useState<string | ArrayBuffer | null>(null);

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

    const newImage = {
      name: newImageName,
      image: newImageFile as string,
      descr: newImageDescr || "No description",
      fileName: newImageName.toLowerCase().replace(/\s+/g, '-') + '.jpg', 
    };

    onSave(newImage); 
    onClose(); 
  };

  return (
    <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Add New Image</h5>
            <button className="btn-close" onClick={onClose}></button>
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
          </div>

          <div className="modal-footer">
            <button className="btn btn-primary" onClick={onClose}>Cancel</button>
            <button className="btn btn-success" onClick={handleSave}>Save</button>
          </div>

        </div>
      </div>
    </div>
  );
}
