import React, {useState} from 'react';
import './App.css';
import data from './data';

function App() {
  return (
    <div className="App">
      <h1>Text Generatinator</h1>

    {/* input */}
      <div>
        <form action="">
        <label>Paragraphs:</label>
        <input type="number"/>
        <button>GENERATE</button>
      </form>
      </div>

    {/* output */}
      <div>

      </div>
    </div>
  );
}

export default App;
