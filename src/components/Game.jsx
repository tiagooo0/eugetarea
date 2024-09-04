// src/components/Game.jsx
import React, { useState } from 'react';
import Level from './Level';
import Scoreboard from './Scoreboard';
import ImageSelector from './ImageSelector';

const Game = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 10);
      setFeedback('¡Correcto! ¡Buena postura!');
      nextLevel(); // Pasar al siguiente nivel inmediatamente
    } else {
      setScore(score - 5);
      setFeedback('Incorrecto. Revisa tu postura.');
    }
  };

  const nextLevel = () => {
    setLevel(level + 1);
    setFeedback('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md text-center">
      <Scoreboard score={score} level={level} />
      <Level level={level} />
      <ImageSelector onAnswer={handleAnswer} level={level} />
      {feedback && <p className="mt-4 text-lg font-semibold">{feedback}</p>}
    </div>
  );
};

export default Game;
