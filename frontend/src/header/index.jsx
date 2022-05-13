import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../auth/Auth";
import Auth from "./Auth";
import NoAuth from "./NoAuth";

const Header = () => {
  const { token, onLogout } = useAuth();
  return (
    <div>
      {token && (
        <>
          <Auth onLogout={onLogout} />
        </>
      )}
      {!token && (
        <>
          <NoAuth />
        </>
      )}
    </div>
  );
};

export default Header;
