/* type Addnew = {
  onClose: () => void;
};

function Addnew({ onClose }: Addnew) {
  function handleSave() {
    console.log("Saved!");
    onClose();
  }

  function handleCancel() {
    onClose();
  }

  return (
    <>
      <div className="modal show d-block"  style={{ background: "rgba(0,0,0,0.6)" }}>
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">File Upload</h5>
              <button onClick={handleCancel} className="btn-close"></button>
            </div>

            <div className="modal-body">
              <input type="text" className="form-control mb-2" placeholder="Image Name" />
              <input type="text" className="form-control mb-2" placeholder="About the Image" />
              <input type="file" className="form-control" />
            </div>

            <div className="modal-footer">
              <button onClick={handleCancel} className="btn btn-danger">Cancel</button>
              <button onClick={handleSave} className="btn btn-primary">Save</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Addnew; 
 

/* import { useState } from "react";

interface AddNewProps {
  onClose: () => void;
  onSave: (item: { name: string; descr: string; image: string }) => void;
}

export default function AddNew({ onClose, onSave }: AddNewProps) {
  const [name, setName] = useState<string>("");
  const [descr, setDescr] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleSubmit = () => {
    if (!name || !descr || !image) {
      alert("All fields are required!");
      return;
    }

    onSave({ name, descr, image });
  };

  return (
    <div className="modal show d-block" tabIndex={-1} style={{ background: "rgba(0,0,0,0.6)" }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Add New Image</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">

            <input
              className="form-control mb-2"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="Enter Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter Description"
              value={descr}
              onChange={(e) => setDescr(e.target.value)}
            ></textarea>

          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
          </div>

        </div>
      </div>
    </div>
  );
} 
 */

  