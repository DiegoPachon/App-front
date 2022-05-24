import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { delUsers, getUsers } from "../requests";
import { Table, Button, Container } from "react-bootstrap";
import "./ListarUsuarios.css";

const ListarUsuarios = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const user = await getUsers();
      setUsers(user);
    }
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    await delUsers(id);
    const user = await getUsers();
    setUsers(user);
  };

  return (
    <Container>
      <br />
      <Button
        href="http://localhost:3000/crearusuario"
        className="btn btn-success"
      >
        Crear Usuario
      </Button>
      <br />
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((values) => (
            <tr key={values.id}>
              <td>{values.name}</td>
              <td>{values.email}</td>
              <td>
                <Button color="primary">Editar</Button>{" "}
                <button
                  onClick={() => deleteUser(values.id)}
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
  );
};

export default ListarUsuarios;
