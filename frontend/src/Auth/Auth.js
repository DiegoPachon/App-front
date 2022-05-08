import { createContext, useContext } from "react";
import axios from "axios";

const Authentication = (email, password) => {
  const URLBackend = "http://localhost:3000";
  return axios
    .post(`${URLBackend}/login`, {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((response) => {
      console.log(response);
      return response.response.data;
    });
};

const AuthContext = createContext(null);

const useAuth = () => {
  return useContext(AuthContext);
};

export { Authentication, AuthContext, useAuth };
