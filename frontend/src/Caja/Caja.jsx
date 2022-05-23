import { React, useEffect, useState, Fragment, useContext } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useAuth } from "../Auth/Auth";
import { getProducts } from "../menu/productosGet";
import "./Caja.css";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { carContext } from "./carContext";
const Caja = () => {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const product = await getProducts();

      console.log(product);
      setProducts(product);
    }
    fetchProducts();
  }, []);
  const cld = new Cloudinary({
    cloud: {
      cloudName: "djlpt2ubq",
    },
  });

  const { addItemToCar } = useContext(carContext);
  return (
    <div className="Caja">
      {token && <>Authenticated as {token}</>}
      {products.map((menuItem) => {
        const { id, name, cloudinary_id } = menuItem;
        const image = cld
          .image(`${cloudinary_id}.jpg`)
          .resize(thumbnail().width(150).height(150));

        return (
          <Fragment key={id}>
            <AdvancedImage cldImg={image} className="photo" />
            <header>
              <h4>{name}</h4>
              <button
                type="button"
                onClick={() => addItemToCar(menuItem)}
                className="btn-sm btn-outline-info "
              >
                Agregar
              </button>
              <div className="Espacio"></div>
            </header>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Caja;
