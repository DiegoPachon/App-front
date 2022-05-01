import React from "react";
import { NavLink } from "react-router-dom";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="Inicio">
      <link
        href="https://cdn.lineicons.com/3.0/lineicons.css"
        rel="stylesheet"
      ></link>
      <main>
        <div className="Container_Box">
          <NavLink to="usuarios" className="box">
            <i className="lni lni-consulting"></i>
            <h5>USUARIOS</h5>
            <h4>USUARIOS</h4>
          </NavLink>
          <NavLink to="menu" className="box">
            <i className="lni lni-library"></i>
            <h5>MENU</h5>
            <h4>MENU</h4>
          </NavLink>
          <NavLink to="caja" className="box">
            <i className="lni lni-revenue"></i>
            <h5>CAJA</h5>
            <h4>CAJA</h4>
          </NavLink>
          <NavLink to="/" className="box">
            <i className="lni lni-invest-monitor"></i>
            <h5>VENTAS</h5>
            <h4>VENTAS</h4>
          </NavLink>
        </div>
      </main>
    </div>
  );
};

export default Inicio;
