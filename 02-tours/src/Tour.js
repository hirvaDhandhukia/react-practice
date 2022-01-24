// this module basically shows how each tour will be represented
// all data is imported in form of variables that can can be called for each tour
import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-inline">
          <h4> {name} </h4>
          <h4 className="tour-price"> ${price} </h4>
        </div>
        <p>
          {/* the info.substring(startindex, length) will return the 0 to 175 length's data.
          show the readMore btn with info.
          when readmore btn is clicked, the useState value changes with help of setReadMore function.
          */}
          {readMore ? info : `${info.substring(0, 175)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        {/* removeTOur function is defined in App.js file */}
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
