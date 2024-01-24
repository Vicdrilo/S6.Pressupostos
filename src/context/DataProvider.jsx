import React, { useContext, useState } from "react";
import budgetOptions from "../data/BudgetData.json";
import { CheckBox } from "../components/CheckBox";

const crearCheckboxes = React.createContext();
const dataJSON = React.createContext();
const totalPrice = React.createContext();
const setTotalPrice = React.createContext();
const checkboxChecked = React.createContext();
const setStateCheck = React.createContext();

const options = budgetOptions.options;
console.log(options);

export function useCrearCheckbox() {
  return useContext(crearCheckboxes);
}
export function useDataJSON() {
  return useContext(dataJSON);
}

export function useTotalPrice() {
  return useContext(totalPrice);
}

export function useSetTotalPrice() {
  return useContext(setTotalPrice);
}

export function useCheckboxChecked() {
  return useContext(checkboxChecked);
}

export function useSetStateCheck() {
  return useContext(setStateCheck);
}

export function DataProvider({ children }) {
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

  /*const checkBox = options.map((option, index) => {
    return <CheckBox key={index} changeTotalPrice={changeTotalPrice} />;
  });*/

  return (
    <dataJSON.Provider value={options}>
      <totalPrice.Provider value={total}>
        <setTotalPrice.Provider value={changeTotalPrice}>
          <checkboxChecked.Provider value={isChecked}>
            <setStateCheck.Provider value={changeStateCheck}>
              {children}
            </setStateCheck.Provider>
          </checkboxChecked.Provider>
        </setTotalPrice.Provider>
      </totalPrice.Provider>
    </dataJSON.Provider>
  );
}
