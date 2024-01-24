import { useDataContext } from "../context/DataProvider";

export function Summary({ children }) {
  const {
    budgetOptions,
    total,
    changeTotalPrice,
    isChecked,
    changeStateCheck,
  } = useDataContext();

  return (
    <div className="sum-container">
      <h1 className="sum-h1-preu-total">Preu pressupostat: {total}€</h1>
    </div>
  );
}
