import { useState } from "react";
import { WebOptions } from "./WebOptions";
import { useDataContext } from "../context/DataProvider";

export function CheckBox() {
  const cbContainerClass = isChecked
    ? "cb-container cb-container-border"
    : "cb-container";

  const cbContainerDisplayNone =
    isChecked && title.toLowerCase() === "web"
      ? "cb-container-web-options"
      : "cb-container-web-options-none";

  return (
    <div className={cbContainerClass}>
      <div className="cb-container-main">
        <div className="cb-description-container">
          <h2>{useDataContext.title}</h2>
          <p>{useDataContext.description}</p>
        </div>
        <div className="cb-price-container">
          <h1>{useDataContext.price}</h1>
          <strong>€</strong>
        </div>
        <div className="cb-checkbox-container">
          <form action="#">
            <input
              type="checkbox"
              id={useDataContext.title}
              name={useDataContext.title}
              onChange={(e) => {
                changeStateCheck(e.target.checked);
                useSetTotalPrice(e.target.checked, useDataContext.price);
              }}
            />
            <label htmlFor={useDataContext.title}>Afegir</label>
          </form>
        </div>
      </div>
      <div className={cbContainerDisplayNone}>
        <WebOptions
          title={useDataContext.title}
          changeTotalPrice={changeTotalPrice}
        />
      </div>
    </div>
  );
}
