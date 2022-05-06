import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Header from "./Header";
import Menu from "./Menu/Menu";
import Usuarios from "./Usuarios/Usuarios";
import Caja from "./Caja/Caja";
import CrearUsuario from "./Usuarios/CrearUsuario";
import CrearProducto from "./Menu/CrearProducto";
import AuthProvider from "./Auth/AuthProvider";
import ProtectedRoute from "./Auth/ProtectedRoute";

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
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
