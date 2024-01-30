import { useBudgetDataContext } from "../context/DataProvider";
import "../styles/BudgetList.css";

export function BudgetList() {
  const {
    savedBudgets, //presupuestos guardados (array)
  } = useBudgetDataContext();

  const creationBudgetList = savedBudgets.map((budget, key) => {
    const services = budget.services.map((service, index) => {
      if (service === "Web") {
        return (
          <li key={index}>
            {service} ({budget.subservices[0]} pàgines, {budget.subservices[1]}{" "}
            llenguatges)
          </li>
        );
      } else {
        return <li key={index}>{service}</li>;
      }
    });

    return (
      <div className="bl-container" key={key}>
        <div className="bl-personal-data-container">
          <h2>{budget.name}</h2>
          <p>
            <strong>{budget.email}</strong>
          </p>
          <p>
            <strong>{budget.phone}</strong>
          </p>
        </div>
        <div className="bl-services-container">
          <p>
            <strong>Serveis contractats:</strong>
            <ul>{services}</ul>
          </p>
        </div>
        <div className="bl-price-container">
          <h2>Total:</h2>
          <h1>{budget.price}€</h1>
        </div>
      </div>
    );
  });

  return <>{creationBudgetList}</>;
}
