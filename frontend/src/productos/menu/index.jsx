import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Categories from "./Categories";
import Products from "./Products";

import { getProducts } from "../requests";

const allCategories = ["Todo", "Desayunos", "Platos Fuertes", "Bebidas"];

const MenuGeneral = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState(allCategories);
  const [categorySelected, setCategorySelected] = useState(allCategories[0]);

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts();
      setMenuItems(products);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <main>
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="login-btn">
          <NavLink to="login">
            <button type="button">Log in</button>
          </NavLink>
        </div>
      </main>
      <section className="menu section">
        <Categories categories={categories} filterItems={setCategorySelected} />
        <Products items={menuItems} category={categorySelected} />
      </section>
    </>
  );
};

export default MenuGeneral;
