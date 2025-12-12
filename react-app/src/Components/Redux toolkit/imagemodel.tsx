import { useState } from "react";
import Swal from "sweetalert2";


const ImageModal: React.FC<any> = ({ showModal, onClose, onSave, initialData }) => {
  const [newImageName, setNewImageName] = useState(initialData?.name || "");
  const [newImageDescr, setNewImageDescr] = useState(initialData?.description || "");
  const [newImageFile, setNewImageFile] = useState<string | ArrayBuffer | null>(initialData?.imageData || ""); 
  const [newImageFileName, setNewImageFileName] = useState(initialData?.fileName || "");

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

    const updatedData = {
      name: newImageName,
      description: newImageDescr || "No description",
      fileName: newImageFileName,
      imageData: newImageFile as string, 
    };

    onSave(updatedData); 
    setNewImageName("");
    setNewImageDescr("");
    setNewImageFile(null);
    setNewImageFileName("");
  };

  return (
    <div>
      {showModal && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add / Edit Image</h5>
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
                  <div className="mt-2">
                    <img src={newImageFile as string} alt="preview" className="img-fluid mb-1" />
                    {newImageFileName && <div><strong>File Name:</strong> {newImageFileName}</div>}
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={onClose}>
                  Cancel
                </button>
                <button className="btn btn-success" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
