import React, { useState } from 'react';
import styles from './ImageUploader.module.css';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Imagem enviada com sucesso!');
  };

  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className={styles.imageUploader}>
      <form onSubmit={handleSubmit}>
        {/* Campo de input file escondido */}
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        
        {/* Botão personalizado */}
        <button
          type="button"
          onClick={triggerFileInput}
          className={styles.uploadButton}
        >
          Escolha uma imagem
        </button>

        {selectedImage && (
          <div className={styles.preview}>
            <p>Pré-visualização:</p>
            <img src={selectedImage} alt="Pré-visualização da imagem" />
          </div>
        )}

        <button type="submit" className={styles.submitButton}>
          Enviar Imagem
        </button>
      </form>
    </div>
  );
}

export default ImageUploader;
