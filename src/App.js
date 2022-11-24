import React from 'react';
import './App.css';
import "./style/landing.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Komponen/Navbar';
import Lobby from './Komponen/pages/Lobby';

function App() {


  return (
    <div className="myBG">
    <Router>
      <Navbar />
     <Routes>
      <Route path='/' exact component={Lobby} />
     </Routes>
      </Router>      
    </div>
  );
}

export default App;
