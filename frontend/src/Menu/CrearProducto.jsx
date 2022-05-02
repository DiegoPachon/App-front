import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./CrearProducto.css";

const CrearProducto = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (values) => {
    const URLBackend = "http://localhost:3001";
    axios
      .post(`${URLBackend}/product`, {
        name: values.name,
        price: values.price,
        image: values.image,
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
    <div className="CrearProducto">
      <button type="submit" className="btn btn-secondary">
        Volver a menu
      </button>
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
            <input type="file" className="imagenes" maxLength={10000000} />
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
