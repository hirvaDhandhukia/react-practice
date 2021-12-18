import React, {useState} from 'react';
import './App.css';
import text from './data';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(count <= 0) {
      amount = 1;
    } else if(count > 8) {
      amount = 8;
    }
    setText(data.slice(0,amount));
  };

  return (
    <div className="App">
      <h1>Text Generatinator</h1>

      <form onSubmit={submitHandler}>
        <label>Paragraphs:</label>
        <input 
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button>GENERATE</button>
      </form>

      <article className='output-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </div>
  );
}

export default App;
