/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../auth/Auth";
import "./Login.css";
const Login = () => {
  const { onLogin } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="Login">
      <title className="Title">Bienvenido</title>
      <img src="../recursos/logo.png" alt="" />
      <h1 className="Description">Lo mejor de la sasón, está en el sabor</h1>
      <div className="Cajas">
        <form className="Form" onSubmit={handleSubmit(onLogin)}>
          <div className="col-auto">
            <label htmlFor="user" className="visually-hidden">
              User
            </label>
            <input
              type="email"
              className="form-control form-control-lgl"
              placeholder="Email"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
          </div>
          {errors.email && errors.email.message}
          <hr />{" "}
          <label htmlFor="password" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            className="form-control form-control-lgl"
            placeholder="Contraseña"
            {...register("password", {
              required: "Required",
            })}
          />
          <hr /> {errors.username && errors.username.message}
          <button type="submit" className="btn btn-success">
            Iniciar Sesión
          </button>
        </form>

        {/* <iframe
          ancho="350"
          altura="430"
          allow=";"
          src="https://console.dialogflow.com/api-client/demo/embedded/5d8ca842-c817-4c8d-a2a8-b7a5dc420bbd"
        ></iframe> */}
      </div>
    </div>
  );
};

export default Login;
