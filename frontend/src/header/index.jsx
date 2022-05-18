import React from "react";
import { useAuth } from "../auth/Auth";
import Auth from "./Auth";

import "./Header.css";

const Header = () => {
  const { token, onLogout } = useAuth();
  return (
    <div>
      {token && (
        <>
          <Auth onLogout={onLogout} />
        </>
      )}
    </div>
  );
};

export default Header;
