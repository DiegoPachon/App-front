import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import { getProducts } from "./products";

const allCategories = ["Todo", "Desayunos", "Platos Fuertes", "Bebidas"];

const MenuGeneral = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState(allCategories);
  const [categorySelected, setCategorySelected] = useState("Todo");

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts();
      setMenuItems(products);
    }
    fetchProducts();
  }, []);

  return (
    <section className="menu section">
      <Categories categories={categories} filterItems={setCategorySelected} />
      <Menu items={menuItems} category={categorySelected} />
    </section>
  );
};

export default MenuGeneral;
