import { createContext, useState } from "react";

export const carContext = createContext();

export const CarProvider = ({ children }) => {
  const [carItems, setCarItems] = useState([]);

  const addItemToCar = (carItems) => {
    const inCar = carItems.find(
      (ProductInCar) => ProductInCar.id === carItems.id
    );
    if (inCar) {
      setCarItems(
        carItems.map((ProductInCar) => {
          if (ProductInCar.id === carItems.id) {
            return { ...inCar, amount: inCar.amount + 1 };
          } else return ProductInCar;
        })
      );
    } else {
      setCarItems([...carItems, { ...carItems, amount: 1 }]);
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
    <carContext.Provider value={(carItems, addItemToCar, deleteItemToCar)}>
      {children}
    </carContext.Provider>
  );
};
