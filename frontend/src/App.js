import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./login/Login";
import Header from "./header/index";
import Menu from "./menu/index";
import Usuarios from "./usuarios/Usuarios";
import Caja from "./caja/Caja";
import CrearUsuario from "./usuarios/CrearUsuario";
import CrearProducto from "./crearProducto/CrearProducto";
import AuthProvider from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="menu" element={<Menu />} />
          <Route
            path="usuarios"
            element={
              <ProtectedRoute>
                <Usuarios />
              </ProtectedRoute>
            }
          />
          <Route
            path="caja"
            element={
              <ProtectedRoute>
                <Caja />
              </ProtectedRoute>
            }
          />
          <Route path="crearusuario" element={<CrearUsuario />} />
          <Route path="crearproducto" element={<CrearProducto />} />
          <Route path="caja" element={<Caja />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
