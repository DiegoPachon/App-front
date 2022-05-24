import React from "react";
import { NavLink } from "react-router-dom";
import { getProducts } from "../requests";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container } from "react-bootstrap";
import "./listarProductos.css";

const listarProductos = () => {
  return (
    <>
      <Container>
        <br />
        <NavLink to="../crearproducto">
          <button type="submit" className="btn btn-success">
            Insertar Producto
          </button>
        </NavLink>

        <br />
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {getProducts.map((elemento) => (
              <tr key={elemento.id}>
                <td>{elemento.id}</td>
                <td>{elemento.nombre}</td>
                <td>{elemento.precio}</td>
                <td>{elemento.imagen}</td>
                <td>
                  <button type="button" className="btn btn-primary">
                    Editar
                  </button>{" "}
                  <button type="button" className="btn btn-danger">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default listarProductos;
