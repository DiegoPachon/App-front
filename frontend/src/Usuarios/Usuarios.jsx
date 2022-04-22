import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'react-bootstrap';
import './Usuarios.css';

const data = [
    { id: 1, nombre: "Diego", contraseña: "123" },
    { id: 2, nombre: "Sebastian", contraseña: "456" },
    { id: 3, nombre: "Leonardo", contraseña: "789" },
];

class Usuarios extends React.Component {

    state = { data: data }

    render() {

        return (
            <>
                <Container>
                    <br />
                    <button type="submit" class="btn btn-success">Insertar</button>
                    <br />
                    <Table>
                        <thead><tr><th>Id</th>
                            <th>Nombre</th>
                            <th>Contaseña</th>
                            <th>Acciones</th>
                        </tr></thead>
                        <tbody>
                            {this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.nombre}</td>
                                    <td>{elemento.contraseña}</td>
                                    <td>
                                        <Button color="primary">Editar</Button>{" "}
                                        <button type="submit" class="btn btn-danger">Eliminar</button>
                                         
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </>)
    }
}

export default Usuarios;