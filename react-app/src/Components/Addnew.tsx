type Addnew = {
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
