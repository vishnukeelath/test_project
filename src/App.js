import React from 'react';
import Home from './container/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/*"  element= {<Home />} />
      </Routes>

    </div>
  )
}

export default App