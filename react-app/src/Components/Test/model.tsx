
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export type GalleryImage = {
  name: string;
  image: string;
  descr: string;
};

type GalleryManagerProps = {
  defaultGallery?: GalleryImage[];
};

export default function GalleryManager({ defaultGallery = [] }: GalleryManagerProps) {
  const [gallery, setGallery] = useState<GalleryImage[]>(() => {
    const saved = localStorage.getItem("userGalleryData");
    return saved ? JSON.parse(saved) : [];
  });

  const [showModal, setShowModal] = useState(false);
  const [newImageName, setNewImageName] = useState("");
  const [newImageDescr, setNewImageDescr] = useState("");
  const [newImageFile, setNewImageFile] = useState<string | ArrayBuffer | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // Persist gallery to localStorage
  useEffect(() => {
    const userImages = gallery.filter(
      (img) => !defaultGallery.some((def) => def.name === img.name)
    );
    localStorage.setItem("userGalleryData", JSON.stringify(userImages));
  }, [gallery, defaultGallery]);

  // File input handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewImageFile(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Add new image
  const handleSave = () => {
    if (!newImageName || !newImageFile) {
      Swal.fire("Oops!", "Please provide both a name and an image.", "warning");
      return;
    }

    setGallery([
      ...gallery,
      { name: newImageName, image: newImageFile as string, descr: newImageDescr || "No description" },
    ]);
    handleCancel();
  };

  // Edit existing image
  const handleSaveEdit = () => {
    if (!newImageName) {
      Swal.fire("Oops!", "Please provide a name.", "warning");
      return;
    }

    if (editIndex === null) return;

    const updatedGallery = [...gallery];
    updatedGallery[editIndex] = {
      name: newImageName,
      image: newImageFile ? (newImageFile as string) : gallery[editIndex].image,
      descr: newImageDescr || "No description",
    };
    setGallery(updatedGallery);
    handleCancel();
  };

  // Cancel modal
  const handleCancel = () => {
    setShowModal(false);
    setNewImageName("");
    setNewImageDescr("");
    setNewImageFile(null);
    setEditIndex(null);
  };

  // Open edit modal
  const handleEdit = (index: number) => {
    const item = gallery[index];
    setNewImageName(item.name);
    setNewImageDescr(item.descr);
    setNewImageFile(item.image);
    setEditIndex(index);
    setShowModal(true);
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

  return (
    <div>
      <h1 style={{ fontFamily: "Inter", textAlign: "center" }}>Gallery</h1>

      <button
        className="btn btn-primary position-absolute"
        style={{ right: "10px", top: "10px", width: "auto" }}
        onClick={() => setShowModal(true)}
      >
        {editIndex !== null ? "Edit Image" : "Add New Image"}
      </button>

      {/* Gallery Display */}
      <div className="gallery mt-4 d-flex flex-wrap gap-3">
        {gallery.map((item, index) => (
          <div key={index} className="card" style={{ width: "150px" }}>
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.descr}</p>
              <button className="btn btn-sm btn-warning me-1" onClick={() => handleEdit(index)}>
                Edit
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editIndex !== null ? "Edit Image" : "Add New Image"}</h5>
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
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="btn btn-success" onClick={editIndex !== null ? handleSaveEdit : handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// // Export functions to be used elsewhere if needed
// export { handleEdit, handleDelete, handleSave, handleSaveEdit, handleCancel };
