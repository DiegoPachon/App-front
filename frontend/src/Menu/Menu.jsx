import React from "react";
import "./index.css";

const Menu = ({ items }) => {
  return (
    <h2>Menu</h2>
    /*<div className="section-center">
      { {items.map((menuItem) => {
        const { id, title, img, price, desc } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">N{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })} }
    </div>*/
  );
};

export default Menu;
