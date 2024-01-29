import React, { useContext, useState } from "react";
import serviceOptions from "../data/BudgetData.json";

//Creación de los context //////////////////////////////////////////////////
const budgetDataContext = React.createContext();
const summaryDataContext = React.createContext();

console.log("Prueba de que retorna el JSON: ", serviceOptions);

//useContext/////////////////////////////////////////////////////////////////
export function useBudgetDataContext() {
  return useContext(budgetDataContext);
}

export function useSummaryDataContext() {
  return useContext(summaryDataContext);
}

///////////////////////////////////////////////////////////////////////////////////
export function DataProvider({ children }) {
  //Datos de los presupuestos que se guardan//////////////////////////////////
  const [servicesChecked, setServicesChecked] = useState([]);

  const changeServicesCheckedList = (bool, title) => {
    let newServicesChecked = [...servicesChecked];
    if (bool) {
      let isAlreadyListed = newServicesChecked.filter(
        (service) => service === title
      );
      if (isAlreadyListed.length < 1) {
        newServicesChecked.push(title);
      }
    } else if (!bool) {
      newServicesChecked = newServicesChecked
        .map((service) => {
          console.log(service);
          if (service === title) {
            return null;
          }
          return service;
        })
        .filter((e) => e !== null);
    }
    setServicesChecked(newServicesChecked);
  };

  const [savedBudgets, setSavedBudgets] = useState([]);

  const changeSavedBudgets = (newBudget) => {
    const newSavedBudgets = [...savedBudgets];
    newSavedBudgets.push(newBudget);
    setSavedBudgets(newSavedBudgets);
  };
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
    serviceOptions.map(() => false)
  );
  // Método para cambiar el estado de selección del checkbox

  const changeStateCheck = (index, isChecked) => {
    const newCheckedStates = [...checkedStates];

    newCheckedStates[index] = isChecked;
    console.log("ARRAY PRESUPUESTOS: ", savedBudgets);
    setCheckedStates(newCheckedStates);
  };

  //Estado que almacena en un array el número de páginas y de lenguajes
  const [subservicesQuantity, setSubservicesQuantity] = useState([0, 0]);
  const changeSubservicesQuantity = (id, num) => {
    console.log("Argumentos de changeSubservicesQuant: ", id, " y ", num);
    let datos = [...subservicesQuantity];
    console.log("Variable datos de changeSubservicesQuant: ", datos);
    if (id === "pages") {
      datos[0] = num;
      setSubservicesQuantity(datos);
      console.log(
        "Variable subservicesQuantity despues de cambiar el primer indice: ",
        subservicesQuantity
      );
    }

    if (id === "languaje") {
      datos[1] = num;
      setSubservicesQuantity(datos);
      console.log(
        "Variable subservicesQuantity despues de cambiar el segundo indice: ",
        subservicesQuantity
      );
    }
  };

  //Método para resetear todos los valores de los checkbox y el precio total
  const resetForm = () => {
    setCheckedStates(checkedStates.map(() => false));
    setTotal(0);
    setServicesChecked([]);
    setSubservicesQuantity([0, 0]);
    console.log(
      "Variable subservicesQuantity despues de reset: ",
      subservicesQuantity
    );
  };

  const data = {
    serviceOptions,
    total,
    changeTotalPrice,
    checkedStates,
    changeStateCheck,
    servicesChecked,
    changeServicesCheckedList,
    subservicesQuantity,
    changeSubservicesQuantity,
    savedBudgets,
    changeSavedBudgets,
    resetForm,
  };

  //State para cambiar Summary
  const [isSummary, setSummary] = useState(false);

  const changeToSummary = (bool) => {
    if (bool) {
      setSummary(true);
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
