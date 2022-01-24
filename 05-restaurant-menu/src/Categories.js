// ther's a key named category in each menuItem, so we pass on the categories variable from the data.js module
// i mapped through the array and set a new string that gives the category of each menu item

// var Set: SetConstructor; new <string>(iterable?: Iterable<string>) => Set<string> 

// the filterItems function basically uses the categories of all menu elements and sorts out which category the user has choose.

import React from 'react';

const Categories = ({ categories, filterItems }) => {

    return (
        
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  };

export default Categories;