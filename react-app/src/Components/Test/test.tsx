function AddNew(){
      function handleSave(){
        
    }
    function handleCancel(){
        
    }
 return (
    <>
     <div className="modal-header">
        <h5 className="modal-title">File Upload</h5>
        <button onClick={AddNew} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    <div className="modal-body">
    <input type="text"className="form-control"id="imageName"placeholder="Enter Image Name"/>
    <input type="text"className="form-control"id="imageDescription"placeholder="Enter Image Description"/>
    <input type="file"className="form-control"id="fileInput"/>
    </div>

      <div className="modal-footer">
        <button onClick={handleCancel} className="btn btn-danger">Cancel</button>
        <button onClick={handleSave} className="btn btn-primary">Save</button>
      </div>
</>
 );
}



export default AddNew; 