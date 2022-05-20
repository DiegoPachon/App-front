import { React, useEffect, useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useAuth } from "../Auth/Auth";
import { getProducts } from "../menu/productosGet";
import "./Caja.css";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
const Caja = () => {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const product = await getProducts();

      console.log(product);
      setProducts(product);
    }
    fetchUsers();
  }, []);
  const cld = new Cloudinary({
    cloud: {
      cloudName: "djlpt2ubq",
    },
  });
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
      {products.map((menuItem) => {
        const { id, name, cloudinary_id, description } = menuItem;
        const image = cld
          .image(`${cloudinary_id}.jpg`)
          .resize(thumbnail().width(150).height(150));
        <div id="productos">
          <article key={id} className="menu_item">
            <AdvancedImage cldImg={image} className="photo" />
            <header>
              <h4>{name}</h4>
              <p className="item_text">{description}</p>
            </header>
          </article>
          ;
        </div>;
      })}
    </div>
  );
};

export default Caja;
