import React, { useEffect, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import "./index.css";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dynkblhi3",
  },
});

const Menu = ({ items, category }) => {
  const [showItems, setShowItems] = useState(items);

  useEffect(() => {
    if (category === "Todo") {
      setShowItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setShowItems(newItems);
  }, [category, items]);

  return (
    <div className="section-center">
      {showItems.map((menuItem) => {
        const { id, name, cloudinary_id, price, description } = menuItem;
        const image = cld.image(`${cloudinary_id}.jpg`);
        return (
          <article key={id} className="menu-item">
            <AdvancedImage cldImg={image} className="photo" />
            <div className="item-info">
              <header>
                <h4>{name}</h4> <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
