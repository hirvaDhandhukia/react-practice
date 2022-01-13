import data from "./data";
import List from "./List";
import React, { useState } from "react";
import './App.css';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className="App">
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          {/* printing the list of people (i.e. dumping data.js) here */}
          <List people={people} />
          {/* we setPeople into an empty array when the button is clicked */}
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
    </div>
  );
}

export default App;
