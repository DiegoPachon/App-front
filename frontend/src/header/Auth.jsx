import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Header.css";

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
          <Button variant="contained" onClick={onLogout}>
            Sign Out
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Auth;
