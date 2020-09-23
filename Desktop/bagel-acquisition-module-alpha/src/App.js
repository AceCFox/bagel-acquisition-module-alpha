import React from 'react';
import './App.css';
import MainList from "./modules/MainList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Bagel Aquisition Module Alpha
        </p>
        <MainList/>
      </header>
    </div>
  );
}

export default App;
