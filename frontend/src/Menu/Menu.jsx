import React from "react";
// import { useForm } from "react-hook-form";
// import { delProducts } from "./productosDel";
import { getProducts } from "./productosGet";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container } from "react-bootstrap";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <Container>
        <br />
        <button type="submit" className="btn btn-success">
          Insertar Producto
        </button>
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

export default Menu;
