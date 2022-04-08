import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from './Login/Login'; 
import Inicio from './Inicio/Inicio';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>

    
  );
}

export default App;
