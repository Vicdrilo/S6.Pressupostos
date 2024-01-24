import React, { useState } from "react";
import budgetOptions from "../data/BudgetData.json";

const crearCheckboxes = React.createContext();
const totalPrice = React.createContext();
const setTotalPrice = React.createContext();

const options = JSON.stringify(budgetOptions.options);
/*const options = [
  {
    title: "Seo",
    description: "Programació d'una web responsive completa",
    price: 300,
  },
  {
    title: "Ads",
    description: "Programació d'una web responsive completa",
    price: 400,
  },
  {
    title: "Web",
    description: "Programació d'una web responsive completa",
    price: 500,
  },
];*/

export function DataProvider({ children }) {
  const [total, setTotal] = useState(0);
  const changeTotalPrice = (checked, price) => {
    if (checked) {
      setTotal(total + price);
    } else {
      setTotal(total - price);
    }
  };

  const checkBox = options.map((option, index) => {
    return (
      <CheckBox
        key={index}
        title={option.title}
        description={option.description}
        price={option.price}
        changeTotalPrice={changeTotalPrice}
      />
    );
  });

  return (
    <crearCheckboxes.Provider value={checkBox}>
      <totalPrice.Provider value={total}>
        <setTotalPrice.Provider value={changeTotalPrice}>
          {children}
        </setTotalPrice.Provider>
      </totalPrice.Provider>
    </crearCheckboxes.Provider>
  );
}
