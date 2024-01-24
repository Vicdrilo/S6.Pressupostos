import { useState } from "react";
import { WebOptions } from "./WebOptions";

export function CheckBox({ title, description, price, changeTotalPrice }) {
  const [isChecked, setCheck] = useState(false);
  const changeStateCheck = (e) => setCheck(e);

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
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cb-price-container">
          <h1>{price}</h1>
          <strong>€</strong>
        </div>
        <div className="cb-checkbox-container">
          <form action="#">
            <input
              type="checkbox"
              id={title}
              name={title}
              onChange={(e) => {
                changeStateCheck(e.target.checked);
                changeTotalPrice(e.target.checked, price);
              }}
            />
            <label htmlFor={title}>Afegir</label>
          </form>
        </div>
      </div>
      <div className={cbContainerDisplayNone}>
        <WebOptions title={title} changeTotalPrice={changeTotalPrice} />
      </div>
    </div>
  );
}
