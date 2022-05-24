import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./CrearUsuario.css";

const CrearUsuario = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    const URLBackend = "http://localhost:3001";
    axios
      .post(`${URLBackend}/user`, {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log(response);
        console.log(values);
      })
      .catch((res) => {
        console.log(res.response.data);
      });
  };

  return (
    <div className="CrearUsuario">
      <NavLink to="/usuarios">
        <Button className="btn btn-secondary">Volver a usuarios</Button>
      </NavLink>
      <div className="caja">
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
          <div className="title">Nuevo Usuario</div>
          <div id="Espacio"></div>
          <div className="forma">
            <label htmlFor="user" className="visually-hidden">
              Nombre
            </label>
            <input
              type="text"
              className="form-control form-control-lgl"
              placeholder="Nombre"
              {...register("name", {
                required: "Required",
              })}
            />
          </div>
          <div id="Espacio"></div>
          <div className="forma">
            <label htmlFor="user" className="visually-hidden">
              Email
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
          <div id="Espacio"></div>
          <div className="forma">
            <label htmlFor="user" className="visually-hidden">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control form-control-lgl"
              placeholder="Contraseña"
              {...register("password")}
            />
          </div>
          <div id="Espacio"></div>
          <div className="forma">
            <button type="submit" className="btn btn-success">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearUsuario;
