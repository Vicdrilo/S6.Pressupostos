import React, { useContext, useState } from "react";
import budgetOptions from "../data/BudgetData.json";
import { CheckBox } from "../components/CheckBox";

//Creación de los context //////////////////////////////////////////////////
const dataContext = React.createContext();

console.log("Prueba de que retorna el JSON: ", budgetOptions);

//useContext/////////////////////////////////////////////////////////////////
export function useDataContext() {
  return useContext(dataContext);
}

///////////////////////////////////////////////////////////////////////////////////
export function DataProvider({ children }) {
  //Datos que añadir al Provider//////////////////////////////////////////////

  //State para controlar el precio del presupuesto
  const [total, setTotal] = useState(0);
  //Método para cambiar el precio del presupuesto
  const changeTotalPrice = (checked, price) => {
    if (checked) {
      setTotal(total + price);
    } else {
      setTotal(total - price);
    }
  };

  //State para controlar si un checkbox está seleccionado o no
  const [isChecked, setCheck] = useState(false);
  //Método para cambiar el estado de selección del checkbox
  const changeStateCheck = (e) => setCheck(e);

  const data = {
    budgetOptions,
    total,
    changeTotalPrice,
    isChecked,
    changeStateCheck,
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}
