import { React, useEffect, useState, useContext } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { getProducts } from "../requests";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { carContext } from "./carContext";
import { cloudinary_name } from "../../backendPath";
import "./Caja.css";

const Caja = () => {
  const value = useContext(carContext);
  const [carOpen, setCarOpen] = value.menu;
  const [carItems] = value.carItems;

  const tooglemenu = () => {
    setCarOpen(!carOpen);
  };
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
      cloudName: cloudinary_name,
    },
  });

  const { addItemToCar } = useContext(carContext);
  return (
    <section className="menu section">
      <link
        href="https://cdn.lineicons.com/3.0/lineicons.css"
        rel="stylesheet"
      ></link>
      <div className="cart" onClick={tooglemenu}>
        <i className="lni lni-cart"></i>
        <span className="cantidad">{carItems.length}</span>
      </div>
      <div className="section-center">
        {products.map((menuItem) => {
          const { id, name, cloudinary_id } = menuItem;
          const image = cld
            .image(`${cloudinary_id}.jpg`)
            .resize(thumbnail().width(150).height(150));

          return (
            <article key={id} className="menu-item">
              <AdvancedImage cldImg={image} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{name}</h4>

                  <button
                    type="button"
                    onClick={() => addItemToCar(menuItem)}
                    className="btn-sm btn-outline-info "
                  >
                    Agregar al carrito
                  </button>
                </header>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Caja;
