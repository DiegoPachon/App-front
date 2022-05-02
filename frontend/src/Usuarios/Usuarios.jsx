import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container } from "react-bootstrap";
import "./Usuarios.css";

const data = [
  { id: 1, nombre: "Diego", email: "diego@hotmail.com", contraseña: "123" },
  {
    id: 2,
    nombre: "Sebastian",
    email: "sebastian@hotmail.com",
    contraseña: "456",
  },
  {
    id: 3,
    nombre: "Leonardo",
    email: "leonardo@hotmail.com",
    contraseña: "789",
  },
];

const CreateUserForm = () => {
  const [users, setUsers] = useState(data);

  return (
    <>
      <Container>
        <br />
        <button type="submit" className="btn btn-success">
          Crear Usuario
        </button>
        <br />
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Contaseña</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((elemento) => (
              <tr key={elemento.id}>
                <td>{elemento.id}</td>
                <td>{elemento.nombre}</td>
                <td>{elemento.email}</td>
                <td>{elemento.contraseña}</td>
                <td>
                  <Button color="primary">Editar</Button>{" "}
                  <button type="submit" className="btn btn-danger">
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

export default CreateUserForm;
