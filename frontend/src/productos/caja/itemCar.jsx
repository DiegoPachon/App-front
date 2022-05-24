import { React, useContext } from "react";
import { carContext } from "./carContext";
import "./itemCar.css";

export const ItemCar = ({ item }) => {
  const { deleteItemToCar, addItemToCar } = useContext(carContext);
  const { amount } = item;

  return (
    <div className="cartItem">
      <img src={item.img} alt={item.name} />
      <div className="dataContainer">
        <div className="left">
          <p>{item.name}</p>
          <div className="buttons">
            <button onClick={() => addItemToCar(item.id, "add", amount)}>
              AGREGAR
            </button>
            <button onClick={() => deleteItemToCar(item.id, "del", amount)}>
              SACAR
            </button>
          </div>
        </div>
        <div className="right">
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};
