// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h2>Learn how to delete a single element form a list and refresh it back.</h2>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./App.css";
// api to import data
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // arrow function for button removeing tour
  const removeTour = (id) => {
    // we will just return a new variable sending all tours except 
    // the tour's id that we want to remove. so it's not actually removed/deleted, 
    // we just passed all other tours with a new variable and ignored the particular tour who'se id is passed
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // https://dmitripavlutin.com/javascript-fetch-async-await/#:~:text=%7D)%3B-,response.,json()%20.
  // fetching the data from api in form of json and then using useState hook to show them
  const fetchTours = async () => {
    setLoading(true);
    // try and catch to wait for response from api in json format. 
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false); // making setLoadin false because we fetched the data into 'tours' variable
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  // loading effect
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // the refresh button
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
