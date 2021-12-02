import React, {useState} from 'react';
import './App.css';
import data from './data';

function App() {
  return (
    <div className="App">
      <h1>Text Generatinator</h1>

    {/* input */}
      <div>
        <p>Paragraphs:</p>
        <input type="number" />
        <button>GENERATE</button>
      </div>

    {/* output */}
      <div>

      </div>
    </div>
  );
}

export default App;
