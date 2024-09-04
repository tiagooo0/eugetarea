// src/App.jsx
import React from 'react';
import Game from './components/Game';
import './index.css'; // Importa Tailwind

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-8">Juego de Educación postural</h1>
        <Game />
      </div>
    </div>
  );
}

export default App;
