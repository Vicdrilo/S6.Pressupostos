import React, { useContext, useState } from "react";
import serviceOptions from "../data/BudgetData.json";

//Creación de los context //////////////////////////////////////////////////
const budgetDataContext = React.createContext();
const summaryDataContext = React.createContext();
const alertDataContext = React.createContext();

//useContext/////////////////////////////////////////////////////////////////
export function useBudgetDataContext() {
  return useContext(budgetDataContext);
}

export function useSummaryDataContext() {
  return useContext(summaryDataContext);
}

export function useAlertDataContext() {
  return useContext(alertDataContext);
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

  //State para controlar el precio de solo los checkboxes
  const [total, setTotal] = useState(0);
  //Método para cambiar el precio del presupuesto
  const changeTotalPrice = (checked, price, title) => {
    let cost = price;
    if (checked) {
      setTotal(total + cost);
    } else {
      if (title === "Web") {
        //cost = cost + (numLang + numPage) * 30;

        setSubservicesQuantity([0, 0]);
        setNumLang(0);
        setNumPage(0);
      }

      setTotal(total - cost);
    }
  };

  const [numPage, setNumPage] = useState(0);

  const changeNumPage = (e, id) => {
    let check;
    let price = 0;
    let cont = numPage;
    if (e === "minus" && numPage > 0) {
      cont--;
      setNumPage(cont);
      changeSubservicesQuantity(id, cont);
      check = false;
      price = 30;
    } else if (e === "plus") {
      cont++;
      setNumPage(cont);
      changeSubservicesQuantity(id, cont);
      check = true;
      price = 30;
    }

    changeTotalPrice(check, price);
  };
  const [numLang, setNumLang] = useState(0);

  const changeNumLang = (e, id) => {
    let check;
    let price = 0;
    let cont = numLang;
    if (e === "minus" && numLang > 0) {
      cont--;
      setNumLang(cont);
      changeSubservicesQuantity(id, cont);
      check = false;
      price = 30;
    } else if (e === "plus") {
      cont++;
      setNumLang(cont);
      changeSubservicesQuantity(id, cont);
      check = true;
      price = 30;
    }

    changeTotalPrice(check, price);
  };

  //State para controlar si un checkbox está seleccionado o no
  const [checkedStates, setCheckedStates] = useState(
    serviceOptions.map(() => false)
  );
  // Método para cambiar el estado de selección del checkbox

  const changeStateCheck = (index, isChecked) => {
    const newCheckedStates = [...checkedStates];

    newCheckedStates[index] = isChecked;

    setCheckedStates(newCheckedStates);
  };

  //Estado que almacena en un array el número de páginas y de lenguajes
  const [subservicesQuantity, setSubservicesQuantity] = useState([0, 0]);
  const changeSubservicesQuantity = (id, num) => {
    const datos = [...subservicesQuantity];

    if (id === "pages") {
      datos[0] = num;
      setSubservicesQuantity(datos);
    } else {
      datos[1] = num;
      setSubservicesQuantity(datos);
    }
  };

  //Método para resetear todos los valores de los checkbox y el precio total
  const resetForm = () => {
    setCheckedStates(checkedStates.map(() => false));
    setTotal(0);
    setServicesChecked([]);
    setSubservicesQuantity([0, 0]);
    setNumLang(0);
    setNumPage(0);
  };

  //Estados y métodos para Alert
  const [isLang, setLang] = useState(false); //estado para decidir si el alert es para lenguajes o páginas
  const [show, setShow] = useState(false); //estado para mostrar o esconder el Alert

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const alertData = {
    isLang, //estado para decidir si el alert es para lenguajes o páginas
    setLang,
    show, //estado para mostrar o esconder el Alert
    handleClose,
    handleShow,
  };

  const data = {
    serviceOptions, //archivo JSON con los servicios disponibles
    total, //total precios
    changeTotalPrice, //cambiar el precio total del presupuestos
    numLang, //número lengajes
    changeNumLang, //cambio núm lenguajes
    numPage, //número páginas
    changeNumPage, // cambio núm páginas
    checkedStates, //estado de los checkboxes (seleccionado o no)
    changeStateCheck, //cambio estado de los checkboxes
    servicesChecked, //servicios que se han seleccionado para el presupuesto
    changeServicesCheckedList, //cambiar los servicios seleccionados
    subservicesQuantity, //cantidad de los subservicios de web
    changeSubservicesQuantity, //cambiar la cantidad de los subservicios de web
    savedBudgets, //presupuestos guardados (array)
    changeSavedBudgets, //cambiar array de presupuestos guardados
    resetForm, //resetear el contenido de los checkbox y algunos datos más
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
        <alertDataContext.Provider value={alertData}>
          {children}
        </alertDataContext.Provider>
      </summaryDataContext.Provider>
    </budgetDataContext.Provider>
  );
}
