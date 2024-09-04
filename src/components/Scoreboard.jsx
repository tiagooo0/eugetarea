// src/components/Scoreboard.jsx
import React from 'react';

const Scoreboard = ({ score, level }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
      <h3 className="text-xl font-semibold">Puntuación: {score}</h3>
      <h3 className="text-xl font-semibold">Nivel: {level}</h3>
    </div>
  );
};

export default Scoreboard;
