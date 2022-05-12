import React from "react";
import { useAuth } from "../Auth/Auth";
import "./Caja.css";

const Caja = () => {
  const { token } = useAuth();
  return (
    <div className="Caja">
      {token && <>Authenticated as {token}</>}
      <div id="recibo">
        <h2>Empresa S.A.S</h2>
        <h5>Dirección </h5>
        <h5>NIT </h5>
        <hr />
        <h3>Factura de venta:</h3>
        <h5>Fecha: </h5>
        <h5>Cliente: </h5>
        <hr />
        <table>
          <tbody>
            <tr>
              <td>Cant.</td>
              <td>Descripción</td>
              <td>Valor</td>
            </tr>
          </tbody>
        </table>

        <hr />
        <h5>TOTAL </h5>
        <button type="submit" className="btn btn-success ">
          PAGAR
        </button>
      </div>
      <div id="botones">
        <h5>Seleccione una opción </h5>
        <div id="Espacio"></div>
        <button type="submit" className="btn btn-warning">
          Platos
        </button>
        <div id="Espacio"></div>
        <button type="submit" className="btn btn-warning">
          Bebidas
        </button>
        <div id="Espacio"></div>
        <button type="submit" className="btn btn-warning">
          Postres
        </button>
      </div>
      <div id="productos"></div>
    </div>
  );
};

export default Caja;
