import { useState } from "react";
import minus from "../assets/minus-svgrepo-com.svg";
import plus from "../assets/plus-svgrepo-com.svg";
import "../styles/ButtonNum.css";
import { useBudgetDataContext } from "../context/DataProvider";

export function ButtonNum({ id }) {
  const {
    budgetOptions,
    total,
    changeTotalPrice,
    isChecked,
    changeStateCheck,
  } = useBudgetDataContext();

  const [num, setNum] = useState(0);

  const changeNum = (e) => {
    let check;
    let price = 0;
    if (e === "minus" && num > 0) {
      setNum(num - 1);
      check = false;
      price = 30;
    } else if (e === "plus") {
      setNum(num + 1);
      check = true;
      price = 30;
    }

    changeTotalPrice(check, price);
  };

  return (
    <div className="bn-container">
      <button className="bn-less" onClick={(e) => changeNum(e.target.id)}>
        <img src={minus} alt="minus" id="minus" className="bn-img" />
      </button>
      <input
        type="text"
        id={id}
        name={id}
        value={num}
        className="bn-input-text-num"
      />
      <button className="bn-plus" onClick={(e) => changeNum(e.target.id)}>
        <img src={plus} alt="plus" id="plus" className="bn-img" />
      </button>
    </div>
  );
}
