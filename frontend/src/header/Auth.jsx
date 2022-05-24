import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Header.css";
// import Car from "../productos/caja/car";

const Auth = ({ onLogout }) => {
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
          <NavLink to="caja" className="box">
            <i className="lni lni-revenue"></i>
            <h5>CAJA</h5>
            <h4>CAJA</h4>
          </NavLink>
          <div className="box">
            <NavLink to="productos" className="box">
              <i className="lni lni-apple"></i>
              <h5>PRODUCTOS</h5>
              <h4>PRODUCTOS</h4>
            </NavLink>
          </div>
          <Button variant="contained" onClick={onLogout}>
            Sign Out
          </Button>
        </div>
        <div id="Espacio"></div>
        {/* <div>
          {" "}
          <Car></Car>
        </div> */}
      </main>
    </div>
  );
};

export default Auth;
