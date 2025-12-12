import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addImage } from './imageSlice'; 
import ImageModal from './imagemodel'; 

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddImage = (imageData: {
    name: string;
    description: string;
    fileName: string;
    imageData: string;
  }) => {
    const newImageId = Date.now().toString(); 
    const newImage = { id: newImageId, ...imageData };

    dispatch(addImage(newImage)); 
    setShowModal(false);
    navigate("/gallery"); 
  };

  return (
    <div>
      <h1 style={{ fontFamily: "Inter", textAlign: "center" }}>Home Page</h1>

      <button
        className="btn btn-primary position-absolute"
        style={{ right: '10px', top: '10px', width: 'auto' }}
        onClick={() => setShowModal(true)}
      >
        Add New Image
      </button>

     
      <ImageModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleAddImage}
      />
    </div>
  );
};

export default Home;
