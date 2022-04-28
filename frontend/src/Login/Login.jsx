import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import "./Login.css";

const Example = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    const URLBackend = "http://localhost:3000"
    axios.post(`${URLBackend}/login`, {
      email: values.email,
      password: values.password
    }).then((response) => {
      console.log(response);
      console.log(values);
    }).catch((res) => {
      console.log(res.response.data)
    });
  };

  return (
    <div className="Login">
      <title className="Title">Bienvenido</title>
      <h1 className="Description">Lo mejor de la sasón, está en el sabor</h1>
      <div className="Cajas">
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
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
            className="form-control"
            placeholder="Contraseña"
            {...register("password", {
              required: "Required",
            })}
          />
          <hr />{" "}
          {errors.username && errors.username.message}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Example;
