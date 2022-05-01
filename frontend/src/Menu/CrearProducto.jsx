import React from "react";
import "./CrearProducto.css";
const CrearProducto = () => {
  return (
    <div className="CrearProducto">
      <button type="submit" className="btn btn-secondary">
        Volver a menu
      </button>
      <div className="caja">
        <form className="Form">
          <div className="title">Nuevo Producto</div>
          <div id="Espacio"></div>
          <div className="forma">
            <label for="user" className="visually-hidden">
              Nombre
            </label>
            <input
              type="text"
              className="form-control form-control-lgl"
              id=""
              placeholder="Nombre"
            />
          </div>
          <div id="Espacio"></div>
          <div className="forma">
            <label for="user" className="visually-hidden">
              Precio
            </label>
            <input
              type="text"
              className="form-control form-control-lgl"
              id=""
              placeholder="Precio"
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
