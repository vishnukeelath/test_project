import React, { useState, useEffect } from 'react';
import logo1 from '../assets/logo1.png';
import { IoMdSearch } from 'react-icons/io';
import { FaFilter } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Filter from './Filter';

const Navbar = ({ searchTerm, setSearchTerm }) => {

  const navigate = useNavigate();
  const [temp, setTemp] = useState('');
  const [toogleFilter, setToogleFilter] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchTerm(temp);
    }, 2000)

    return () => clearTimeout(delayDebounceFn)
  }, [temp]);

  const changeToogleFilter = () => {
    setToogleFilter(!toogleFilter);
  }
  

  return (
    <div className="navbar-main">
      <Link to="/">
        <img src={logo1} alt="logo" className="main-logo" />
      </Link>
      <div className="navbar-search">
        <IoMdSearch fontSize={21} className="search-icon" />
        <input
            type="text"
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Search"
            value={temp}
            onFocus={() => navigate('/search')}
            className="navbar-input"
            >
            
        </input>
      </div>
      <div className="filter-button" onClick={changeToogleFilter}>
        <FaFilter fontSize={40} className="navbar-filter"  />
        <p className="filter">Filter</p>
      </div>

      {toogleFilter && (
          <div className="filter-design">
            <Filter setToogleFilter={setToogleFilter} />
          </div>
      )}

    </div>
  )
}

export default Navbar