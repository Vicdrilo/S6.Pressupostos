import { useState } from "react";
import { WebOptions } from "./WebOptions";
import { useDataJSON } from "../context/DataProvider";
import { useSetTotalPrice } from "../context/DataProvider";

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
          <h2>{useDataJSON.title}</h2>
          <p>{useDataJSON.description}</p>
        </div>
        <div className="cb-price-container">
          <h1>{useDataJSON.price}</h1>
          <strong>€</strong>
        </div>
        <div className="cb-checkbox-container">
          <form action="#">
            <input
              type="checkbox"
              id={useDataJSON.title}
              name={useDataJSON.title}
              onChange={(e) => {
                changeStateCheck(e.target.checked);
                useSetTotalPrice(e.target.checked, useDataJSON.price);
              }}
            />
            <label htmlFor={useDataJSON.title}>Afegir</label>
          </form>
        </div>
      </div>
      <div className={cbContainerDisplayNone}>
        <WebOptions
          title={useDataJSON.title}
          changeTotalPrice={changeTotalPrice}
        />
      </div>
    </div>
  );
}
