import { useState } from "react";
import minus from "../assets/minus-svgrepo-com.svg";
import plus from "../assets/plus-svgrepo-com.svg";
import "../styles/ButtonNum.css";
import { useBudgetDataContext } from "../context/DataProvider";

export function ButtonNum({ id }) {
  const {
    serviceOptions, //archivo JSON
    total, //total precios
    changeTotalPrice, //cambiar el precio total del presupuestos
    numLang, //número lengajes
    changeNumLang, //cambio núm lenguajes
    numPage, //número páginas
    changeNumPage, // cambio núm páginas
    checkedStates,
    changeStateCheck,
    servicesChecked,
    changeServicesCheckedList,
    subservicesQuantity,
    changeSubservicesQuantity,
    savedBudgets,
    changeSavedBudgets,
    resetForm,
  } = useBudgetDataContext();
  /*
  const [num, setNum] = useState(0);
  console.log(num);
  const changeNum = (e) => {
    let check;
    let price = 0;
    let cont = num;
    if (e === "minus" && num > 0) {
      cont--;
      setNum(cont);
      changeSubservicesQuantity(id, cont);
      check = false;
      price = 30;
    } else if (e === "plus") {
      cont++;
      setNum(cont);
      changeSubservicesQuantity(id, cont);
      check = true;
      price = 30;
    }

    changeTotalPrice(check, price);
  };
*/

  return (
    <div className="bn-container">
      <button className="bn-less">
        <img
          src={minus}
          alt="minus"
          id="minus"
          className="bn-img"
          onClick={(e) => {
            //changeNum(e.target.id);
            id === "pages"
              ? changeNumPage(e.target.id, id)
              : changeNumLang(e.target.id, id);
          }}
        />
      </button>
      <input
        type="text"
        id={id}
        name={id}
        value={id === "pages" ? numPage : numLang}
        className="bn-input-text-num"
        onChange={(e) => {
          changeSubservicesQuantity(e.target.id, num);
        }}
      />
      <button className="bn-plus">
        <img
          src={plus}
          alt="plus"
          id="plus"
          className="bn-img"
          onClick={(e) => {
            //changeNum(e.target.id);
            id === "pages"
              ? changeNumPage(e.target.id, id)
              : changeNumLang(e.target.id, id);
          }}
        />
      </button>
    </div>
  );
}
