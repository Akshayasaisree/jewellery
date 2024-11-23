import React, { useState } from 'react';
import './ImageUpload.css';

function ImageUpload1() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload an Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <div className="image-preview">
        {preview ? (
          <img src={preview} alt="Preview" />
        ) : (
          <p>No image selected</p>
        )}
      </div><br></br>
      <button class="upload">Upload</button>
    </div>
  );
}

export default ImageUpload1;

