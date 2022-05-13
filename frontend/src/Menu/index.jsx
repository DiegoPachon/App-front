import React, { useState } from "react";
import Categories from "./Categories";

const allCategories = ["Todo", "Desayunos", "Platos fuertes", "Bebidas"];
const items = [];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "Todo") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <section className="menu section">
      <Categories categories={categories} filterItems={filterItems} />
      <h2>Menu</h2>
    </section>
  );
};

export default Menu;
