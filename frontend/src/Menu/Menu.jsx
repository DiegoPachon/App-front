import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container} from 'react-bootstrap';
import './Menu.css';

const data = [
    { id: 1, nombre: "Carne asada", precio: "15000" },
    { id: 2, nombre: "Pechuga a la plancha", precio: "17000" },
    { id: 3, nombre: "Sopa", precio: "10000" },
    { id: 4, nombre: "Agua", precio: "5000" },
    { id: 5, nombre: "Gaseosa", precio: "5000" },
    { id: 6, nombre: "Cerveza", precio: "10000" },
];

class Platos extends React.Component {

    state = { data: data }

    render() {

        return (
            <>
                <Container>
                    <br />
                    <button type="submit" className="btn btn-success">Insertar Producto</button>
                    <br />
                    <Table>
                        <thead><tr><th>Id</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Imagen</th>
                            <th>Acciones</th>
                        </tr></thead>
                        <tbody>
                            {this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.nombre}</td>
                                    <td>{elemento.precio}</td>
                                    <td>{elemento.imagen}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary">Editar</button>{" "}
                                        <button type="button" className="btn btn-danger">Eliminar</button>
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