import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Authentication, AuthContext } from "./Auth";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState(null);

  const handleLogin = async (values) => {
    const response = await Authentication(values.email, values.password);
    if (!response.error) {
      const { user } = response;
      setToken(user.token);

      const origin = location.state?.from?.pathname || "/";
      navigate(origin);
    }
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
