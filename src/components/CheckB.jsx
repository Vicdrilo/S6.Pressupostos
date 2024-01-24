import { useDataContext } from "../context/DataProvider";
import { WebOptions } from "./WebOptions";

export function CheckB() {
  let title = "";
  const {
    budgetOptions,
    total,
    changeTotalPrice,
    isChecked,
    changeStateCheck,
  } = useDataContext();

  const cbContainerClass = isChecked
    ? "cb-container cb-container-border"
    : "cb-container";

  const cbContainerDisplayNone =
    isChecked && title.toLowerCase() === "web"
      ? "cb-container-web-options"
      : "cb-container-web-options-none";

  const creationCheckboxes = budgetOptions.map((option, index) => {
    title = option.title;
    return (
      <div className={cbContainerClass} key={index}>
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
                  changeStateCheck(e.target.checked);
                  changeTotalPrice(e.target.checked, option.price);
                }}
              />
              <label htmlFor={option.title}>Afegir</label>
            </form>
          </div>
        </div>
        <div className={cbContainerDisplayNone}>
          <WebOptions />
        </div>
      </div>
    );
  });

  return <>{creationCheckboxes}</>;
}
