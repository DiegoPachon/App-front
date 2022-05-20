import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./CrearProducto.css";

const CrearProducto = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append("image", values.file[0]);
    formData.append("name", values.name);
    formData.append("price", values.price);
    const URLBackend = "http://localhost:3001";
    axios
      .post(`${URLBackend}/product`, formData)
      .then((response) => {
        console.log(response);
        console.log(values);
      })
      .catch((res) => {
        console.log(res.response.data);
      });
  };

  return (
    <div className="CrearProducto">
      <Button href="http://localhost:3000/menu" className="btn btn-secondary">
        Volver a menu
      </Button>
      <div className="caja">
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
          <div className="title">Nuevo Producto</div>
          <div id="Espacio"></div>
          <div className="forma">
            <label htmlFor="user" className="visually-hidden">
              Nombre
            </label>
            <input
              type="text"
              className="form-control form-control-lgl"
              id=""
              placeholder="Nombre"
              {...register("name", {
                required: "Required",
              })}
            />
          </div>
          <div id="Espacio"></div>
          <div className="forma">
            <label htmlFor="user" className="visually-hidden">
              Precio
            </label>
            <input
              type="text"
              className="form-control form-control-lgl"
              id=""
              placeholder="Precio"
              {...register("price", {
                required: "Required",
              })}
            />
          </div>
          <div id="Espacio"></div>
          <div className="forma">
            <input type="file" {...register("file")} />
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

export default CrearProducto;
