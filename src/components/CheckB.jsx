import { useSetTotalPrice } from "../context/DataProvider";
import { useCheckboxChecked } from "../context/DataProvider";
import { useSetStateCheck } from "../context/DataProvider";
import { useTotalPrice } from "../context/DataProvider";
import { useDataJSON } from "../context/DataProvider";

const data = useDataJSON();
console.log(data);
const isChecked = useCheckboxChecked;
export function CheckB() {
  const cbContainerClass = isChecked
    ? "cb-container cb-container-border"
    : "cb-container";
  const cbContainerDisplayNone =
    isChecked && option.title === "Web"
      ? "cb-container-web-options"
      : "cb-container-web-options-none";

  const checkbox = data.map((option, index) => {
    <div className={cbContainerClass} index={index}>
      <div className="cb-container-main">
        <div className="cb-description-container">
          <h2>{option.title}</h2>
          <p>{option.description}</p>
        </div>
        <div className="cb-price-container">
          <h1>{option.price}</h1>
          <strong>€</strong>
        </div>
        <div className="cb-checkbox-container">
          <form action="#">
            <input
              type="checkbox"
              id={option.title}
              name={option.title}
              onChange={(e) => {
                useSetStateCheck(e.target.checked);
                useSetTotalPrice(e.target.checked, option.price);
              }}
            />
            <label htmlFor={option.title}>Afegir</label>
          </form>
        </div>
      </div>
      <div className={cbContainerDisplayNone}>
        <WebOptions title={option.title} changeTotalPrice={useSetTotalPrice} />
      </div>
    </div>;
  });
  return <>{checkbox}</>;
}
