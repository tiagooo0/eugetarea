// src/components/ImageSelector.jsx
import React from 'react';

// Función para mezclar aleatoriamente un array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const ImageSelector = ({ onAnswer, level }) => {
  // Simulación de datos para las imágenes por nivel
  const levelImages = {
    1: [
      { id: 1, src: './Correcta.jpeg', isCorrect: true },
      { id: 2, src: './Incorrecta.jpeg', isCorrect: false },
      { id: 3, src: './IncorrectaP.jpeg', isCorrect: false },
    ],
    2: [
      { id: 4, src: './Correc.jpeg', isCorrect: true },
      { id: 5, src: './Incorrec.jpeg', isCorrect: false },
      { id: 6, src: './Incorrect.jpeg', isCorrect: false },
    ],
    3: [
      { id: 7, src: 'correcta3.png', isCorrect: true },
      { id: 8, src: 'incorrecta5.png', isCorrect: false },
      { id: 9, src: 'incorrecta6.png', isCorrect: false },
    ],
    4: [
      { id: 10, src: 'correcta3.png', isCorrect: true },
      { id: 11, src: 'incorrecta5.png', isCorrect: false },
      { id: 12, src: 'incorrecta6.png', isCorrect: false },
    ],
    5: [
      { id: 13, src: 'correcta3.png', isCorrect: true },
      { id: 14, src: 'incorrecta5.png', isCorrect: false },
      { id: 15, src: 'incorrecta6.png', isCorrect: false },
    ],
    // Agrega más niveles si es necesario
  };

  // Selecciona las imágenes correspondientes al nivel actual, si no existe usa el nivel 1 como predeterminado
  const images = shuffleArray(levelImages[level] || levelImages[1]);

  const handleClick = (isCorrect) => {
    onAnswer(isCorrect);
  };

  return (
    <div className="flex justify-center mt-6 space-x-4">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={`Postura ${image.isCorrect ? 'Correcta' : 'Incorrecta'}`}
          onClick={() => handleClick(image.isCorrect)}
          className="w-24 h-24 rounded-md shadow-md hover:scale-105 transform cursor-pointer"
        />
      ))}
    </div>
  );
};

export default ImageSelector;
