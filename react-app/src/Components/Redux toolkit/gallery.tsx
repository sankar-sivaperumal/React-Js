import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteImage, editImage } from "./imageSlice";
import type { RootState } from "./store";
import Swal from "sweetalert2";
import ImageModal from "./imagemodel";


const openDB = async (): Promise<IDBDatabase | null> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("galleryDB", 1);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains("images")) {
        db.createObjectStore("images", { keyPath: "id" });
      }
    };

    request.onsuccess = (event: Event) => {
      resolve((event.target as IDBOpenDBRequest).result);
    };

    request.onerror = (event: Event) => {
      reject(event);
    };
  });
};


const saveImagesToIndexedDB = async (images: any[]) => {
  try {
    const db = await openDB();
    if (db) {
      const transaction = db.transaction("images", "readwrite");
      const store = transaction.objectStore("images");

      images.forEach((image) => {
        store.put(image);
      });

      transaction.oncomplete = () => {
        console.log("Images successfully saved to IndexedDB.");
      };

      transaction.onerror = (e) => {
        console.error("Error saving images to IndexedDB:", e);
      };
    }
  } catch (error) {
    console.error("Failed to save images to IndexedDB:", error);
  }
};


const getImagesFromIndexedDB = async (): Promise<any[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openDB();
      if (db) {
        const transaction = db.transaction("images", "readonly");
        const store = transaction.objectStore("images");
        const request = store.getAll();

        request.onsuccess = () => {
          resolve(request.result);
        };

        request.onerror = (e) => {
          reject(e);
        };
      }
    } catch (error) {
      reject(error);
    }
  });
};

const Gallery: React.FC = () => {
  const dispatch = useDispatch();
  const images = useSelector((state: RootState) => state.images.images);

  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  
  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = await getImagesFromIndexedDB();
      if (fetchedImages && fetchedImages.length > 0) {
        
        fetchedImages.forEach((image) => {
          dispatch(editImage(image)); 
        });
      }
    };

    fetchImages();
  }, [dispatch]);


  useEffect(() => {
    if (images.length > 0) {
      saveImagesToIndexedDB(images);
    }
  }, [images]);

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setShowModal(true);
  };

  const handleSaveEdit = (updatedData: {
    name: string;
    description: string;
    fileName: string;
    imageData: string;
  }) => {
    const updatedImage = {
      id: images[editIndex!].id,
      ...updatedData,
    };

    dispatch(editImage(updatedImage));
    setShowModal(false);
    setEditIndex(null);
  };

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteImage(id));
        Swal.fire("Deleted!", "Your image has been deleted.", "success");
      }
    });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        {images.map((image, index) => (
          <div className="col-3 mb-5 text-center" key={image.id}>
            <div className="card" style={{ width: "100%", height: "380px" }}>
              <img src={image.imageData || ""} className="card-img-top" alt={image.name} />
              <div className="card-body">
                <h3 className="card-title">{image.name}</h3>
                <p className="card-text text-truncate" title={image.description}>
                  {image.description}
                </p>
                <button className="btn btn-info mt-2 me-2" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className="btn btn-danger mt-2" onClick={() => handleDelete(image.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editIndex !== null && (
        <ImageModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
          onSave={handleSaveEdit}
          initialData={images[editIndex]}
        />
      )}
    </div>
  );
};

export default Gallery;
