import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Filter = ({ setToogleFilter }) => {

  const categoryArray = ["Men's Clothing", "Women's Clothing", "Electronics", "Jewelery"];

  const handleCloseFilter = () => {
    if(setToogleFilter) setToogleFilter(false);
  }

  return (
    <div className="filter-list">
      
        {categoryArray?.map((category) => (
          <NavLink
          to={`/category/${category}`}
          onClick={handleCloseFilter}
          key={category}
          >
          <p>{category}</p>
          </NavLink>
         ))}
    </div>
  )
}

export default Filter