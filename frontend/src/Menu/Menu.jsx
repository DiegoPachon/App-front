import React, { useState, useEffect } from "react";
import { delProducts } from "./productosDel";
import { getProducts } from "./productosGet";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container } from "react-bootstrap";
import "./Menu.css";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const product = await getProducts();
      setProducts(product);
    }
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    await delProducts(id);
    const product = await getProducts();
    setProducts(product);
  };
  return (
    <>
      <Container>
        <br />
        <Button href="crearproducto" className="btn btn-success">
          Insertar Producto
        </Button>
        <br />
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((values) => (
              <tr key={values.id}>
                <td>{values.name}</td>
                <td>{values.price}</td>
                <td>{values.cloudinary_id}</td>
                <td>
                  <Button color="primary">Editar</Button>{" "}
                  <button
                    onClick={() => deleteProduct(values.id)}
                    className="btn btn-danger"
                  >
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

export default ProductTable;
