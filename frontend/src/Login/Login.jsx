import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Auth/Auth";
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
      <img src="./logo.png" alt="" />
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
      </div>
      {/* <script type="text/javascript">(function () {
        var ldk = document.createElement('script'); 
        ldk.type = 'text/javascript'; ldk.async = true; 
        ldk.src = 'https://s.cliengo.com/weboptimizer/6289ae794e749e002acb83eb/6289ae7b4e749e002acb83ee.js?platform=view_installation_code';
       var s = document.getElementsByTagName('script')[0]; 
       s.parentNode.insertBefore(ldk, s); })();</script> */}
    </div>
  );
};

export default Login;
