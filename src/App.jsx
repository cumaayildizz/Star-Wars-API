import React from 'react';
import './App.css'; // Global CSS stil dosyanız
import StarShips from './components/StarShips'; // StarShips bileşenini import ediyoruz

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Starships Explorer</h1>
      </header>
      <main>
        <StarShips />
      </main>
    </div>
  );
}

export default App;