import { createContext, useState, useEffect } from "react";
// import { getProducts } from "../menu/productosGet";
export const carContext = createContext();

export const CarProvider = ({ children }) => {
  const [carItems, setCarItems] = useState(() => {
    try {
      const productsInCar = localStorage.getItem("cartProduct");
      return productsInCar ? JSON.parse(productsInCar) : [];
    } catch (err) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("carProducts", JSON.stringify(carItems));
    console.log(carItems);
  }, [carItems]);

  const addItemToCar = (product) => {
    const inCar = carItems.find(
      (ProductInCar) => ProductInCar.id === product.id
    );
    if (inCar) {
      setCarItems(
        carItems.map((ProductInCar) => {
          if (ProductInCar.id === product.id) {
            return { ...inCar, amount: inCar.amount + 1 };
          } else return ProductInCar;
        })
      );
    } else {
      setCarItems([...carItems, { ...product, amount: 1 }]);
    }
  };

  const deleteItemToCar = (menuItem) => {
    const inCar = carItems.find(
      (ProductInCar) => ProductInCar.id === menuItem.id
    );
    if (inCar.amount === 1) {
      setCarItems(
        carItems.filter((ProductInCar) => ProductInCar.id === menuItem.id)
      );
    } else {
      setCarItems((ProductInCar) => {
        if (ProductInCar.id === menuItem.id) {
          return { ...inCar, amount: inCar.amount - 1 };
        } else return ProductInCar;
      });
    }
  };
  return (
    <carContext.Provider value={{ carItems, addItemToCar, deleteItemToCar }}>
      {children}
    </carContext.Provider>
  );
};
