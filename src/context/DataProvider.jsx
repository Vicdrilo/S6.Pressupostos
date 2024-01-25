import React, { useContext, useState } from "react";
import budgetOptions from "../data/BudgetData.json";

//Creación de los context //////////////////////////////////////////////////
const budgetDataContext = React.createContext();
const summaryDataContext = React.createContext();

console.log("Prueba de que retorna el JSON: ", budgetOptions);

//useContext/////////////////////////////////////////////////////////////////
export function useBudgetDataContext() {
  return useContext(budgetDataContext);
}

export function useSummaryDataContext() {
  return useContext(summaryDataContext);
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
  const [checkedStates, setCheckedStates] = useState(
    budgetOptions.map(() => false)
  );
  // Método para cambiar el estado de selección del checkbox
  const changeStateCheck = (index, isChecked) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = isChecked;
    setCheckedStates(newCheckedStates);
  };

  const data = {
    budgetOptions,
    total,
    changeTotalPrice,
    checkedStates,
    changeStateCheck,
  };

  //State para cambiar Summary
  const [isSummary, setSummary] = useState(false);

  const changeToSummary = (bool) => {
    if (bool) {
      setSummary(bool);
    } else {
      setSummary(false);
    }
  };
  return (
    <budgetDataContext.Provider value={data}>
      <summaryDataContext.Provider value={{ isSummary, changeToSummary }}>
        {children}
      </summaryDataContext.Provider>
    </budgetDataContext.Provider>
  );
}
