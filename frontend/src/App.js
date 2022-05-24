import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./login/Login";
import Header from "./header/index";
import { CrearUsuario, ListarUsuarios } from "./usuarios/components";
import { AuthProvider, ProtectedRoute } from "./auth/components";
import {
  Menu,
  ListarProductos,
  CrearProducto,
  Caja,
  CarProvider,
} from "./productos/components";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="" element={<Menu />} />
          <Route path="login" element={<Login />} />
          <Route
            path="usuarios"
            element={
              // <ProtectedRoute>
              <ListarUsuarios />
              // </ProtectedRoute>
            }
          />
          <Route
            path="caja"
            element={
              // <ProtectedRoute>
              <CarProvider>
                <Caja />
              </CarProvider>
              // </ProtectedRoute>
            }
          />
          <Route path="productos" element={<ListarProductos />} />
          <Route path="crearusuario" element={<CrearUsuario />} />
          <Route path="crearproducto" element={<CrearProducto />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
