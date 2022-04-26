import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from './Login/Login'; 
import Inicio from './Inicio/Inicio';
import Menu from './Menu/Menu';
import Usuarios from './Usuarios/Usuarios';
import Caja from './Caja/Caja';
import CrearUsuario from './Usuarios/CrearUsuario'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="login" element={<Login />} />
        <Route path="menu" element={<Menu />} />
        <Route path="usuarios" element={<Usuarios />} />
        <Route path="caja" element={<Caja />} />
        <Route path="crearusuario" element={<CrearUsuario />} />
      </Routes>
    </div>

    
  );
}

export default App;
