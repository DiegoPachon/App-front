import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = ["Todo", "Desayunos", "Platos fuertes", "Bebidas"];
const items = [{
  id: 1,
  title: 'akara and akamu',
  category: 'Desayunos',
  price: 1500,
  img:
    'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
  desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
}, {
  id: 2,
  title: 'Yam and Egg sauce',
  category: 'lunch',
  price: 1700,
  img:
    'https://ocdn.eu/pulscms-transforms/1/zI6k9kpTURBXy8yMzRlMTBmNDBmMzg0YTFjZDZiYjczZDIxZTc2YzE3MC5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
  desc: `Boiled or fried yam and egg sauce is a usual suspect on the tables of Nigerians. It is quite filling and can last you the whole day, if not careful. Egg sauce is an easy-to-prepare Nigerian sauce made by sautéing tomatoes and eggs. `,
},];

const MenuGeneral = () => {
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
      <Menu items={menuItems} />
    </section>
  );
};

export default MenuGeneral;
