import { useBudgetDataContext } from "../context/DataProvider";

export function BudgetList() {
  const {
    serviceOptions,
    total,
    changeTotalPrice,
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

  const creationBudgetList = savedBudgets.map((budget, index) => {
    const services = budget.services.map((service) => {
      if (service === "Web") {
        return (
          <li>
            {service} ({budget.subservices[0]} pàgines, {budget.subservices[1]}{" "}
            llenguatges)
          </li>
        );
      } else {
        return <li>{service}</li>;
      }
    });
    return (
      <div className="bl-container" key={index}>
        <div className="bl-personal-data-container">
          <h2>{budget.name}</h2>
          <p>{budget.email}</p>
          <p>{budget.phone}</p>
        </div>
        <div className="bl-services-container">
          <p>
            <strong>Serveis contractats:</strong>
            <ul>{services}</ul>
          </p>
        </div>
        <div className="bl-price-container">
          <h2>Total:</h2>
          <h1>{budget.price}</h1>
          <strong>€</strong>
        </div>
      </div>
    );
  });

  return <>{creationBudgetList}</>;
}
