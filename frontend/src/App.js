import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from './login/Login'; 
import Inicio from './inicio/Inicio';
import Menu from './menu/Menu';
import Usuarios from './usuarios/Usuarios';
import Caja from './caja/Caja';
import CrearUsuario from './usuarios/CrearUsuario'
import CrearProducto from './menu/CrearProducto';

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
        <Route path="crearproducto" element={<CrearProducto />} />
      </Routes>
    </div>

    
  );
}

export default App;
