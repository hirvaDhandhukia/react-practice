import React, {useState} from 'react';
import './App.css';
import text from './data';
import data from './data';

function App() {
  // how many paras would i want to generate; 0 will be initial value here
  const [count, setCount] = useState(0);
  // output text -> will be array of those paras. Starting it with a default value as empty 
  const [text, setText] = useState([]);

  // this is a submit handler so i'll access the event object of submit by 'e'
  const submitHandler = (e) => {
    // when we click the 'generate' btn, the text was setting itself back to 0; so using preventDefault function, we will be able to keep the output text as it is.
    e.preventDefault();
    // console.log(typeof count);
    // i get the count value here in number
    let amount = parseInt(count);
    console.log(typeof amount);
    if(count <= 0) {
      amount = 1;
    } else if(count > 8) {
      amount = 9;
    }
    // slice function will just give us the elements from '0' to 'amount' from the array of data (named text).
    // slice returns a new copy of array that starts from 0 to amount
    setText(data.slice(0,amount));
    // setText(data);
  };

  return (
    <div className="App">
      <h1>Text Generatinator</h1>

      <form className="input-form" onSubmit={submitHandler}>
        <label htmlFor="amount">Paragraphs:</label>
        <input 
          type="number"
          id="amount"
          // you can keep 'value' or not it's the same thing
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">GENERATE</button>
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
