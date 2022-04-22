import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'react-bootstrap';
import './Menu.css';

const data = [
    { id: 1, nombre: "Carne asada", costo: "15000" },
    { id: 2, nombre: "Pechuga a la plancha", costo: "17000" },
    { id: 3, nombre: "Sopa", costo: "10000" },
    { id: 4, nombre: "Agua", costo: "5000" },
    { id: 5, nombre: "Gaseosa", costo: "5000" },
    { id: 6, nombre: "Cerveza", costo: "10000" },
];

class Platos extends React.Component {

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
                            <th>Costo</th>
                            <th>Acciones</th>
                        </tr></thead>
                        <tbody>
                            {this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.nombre}</td>
                                    <td>{elemento.costo}</td>
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

export default Platos;