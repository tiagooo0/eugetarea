import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Función para mezclar aleatoriamente un array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
const ImageSelector = ({ onAnswer, level, onGameEnd }) => { // Agrega onGameEnd
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
      { id: 7, src: './corre1.jpeg', isCorrect: true },
      { id: 8, src: './incorre.jpeg', isCorrect: false },
      { id: 9, src: './incorre1.jpeg', isCorrect: false },
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
  };
  const images = shuffleArray(levelImages[level] || levelImages[1]);
  const handleClick = (isCorrect) => {
    if (level === 5) {
      onGameEnd(); // Llama a onGameEnd cuando se llega al nivel 5
    } else {
      onAnswer(isCorrect);
    }
  };
  if (level > 5) { // Muestra el botón si el juego ha terminado
    return (
      <div className="flex flex-col items-center justify-center mt-8 space-y-6">
        <button onClick={onGameEnd} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Jugar de vuelta
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center mt-8 space-y-6">
      <h2 className="text-2xl font-bold ">Selecciona la postura correcta</h2>
      <div className="flex justify-center space-x-6">
        {images.map((image) => (
          <motion.div
            key={image.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={image.src}
              alt={`Postura ${image.isCorrect ? 'Correcta' : 'Incorrecta'}`}
              onClick={() => handleClick(image.isCorrect)}
              className="w-32 h-32 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default ImageSelector;