import { Outlet, Link } from "react-router-dom";
import {
  useBudgetDataContext,
  useSummaryDataContext,
} from "../context/DataProvider";
import { Form } from "./Form";
import { BudgetList } from "./BudgetList";
import "../styles/Summary.css";

export function Summary({ children }) {
  const {
    total, //total precios
    savedBudgets, //presupuestos guardados (array)
    resetForm, //resetear el contenido de los checkbox y algunos datos más
  } = useBudgetDataContext();

  const { isSummary, changeToSummary } = useSummaryDataContext();

  const displaySummary = isSummary ? "sum-display-summary" : "sum-display-none";
  const displayHome = isSummary ? "sum-display-none" : "sum-display-home";
  const displayBudgetList =
    savedBudgets.length > 0 ? "sum-budgetListContainer" : "sum-display-none";

  return (
    <div className="sum-container">
      <div className={displaySummary}>
        <div className="sum-total-container">
          <h1>Preu pressupostat: {total}€</h1>
          <Link to="/">
            <button onClick={() => resetForm()}>Volver</button>
          </Link>
          <Outlet />
        </div>
        <div className="sum-form-container">
          <h1>Demanar pressupost</h1>
          <Form />
        </div>
        <hr className={displayBudgetList} />
        <div className={displayBudgetList}>
          <div className="sum-budget-list-title">
            <h1>Pressupostos en curs:</h1>
          </div>

          <BudgetList />
        </div>
      </div>
      <div className={displayHome}>
        <h2 className="colorGreen">Propossit del lloc web</h2>
        <p>
          Servei per crear pressupostos de Seo Ads i Web. Es possible combinar
          serveis en un mateix pressupost, guardar diferents pressupostos. A
          part d'aixó, hi ha opció d'afegir en número de pàgines i/o llenguatges
          dessitjat en el servei Web.
          <br />
          <br />
        </p>

        <p className="">
          <strong className="colorGreen">Funcionament: </strong>
          <br />
          És tan simple com clicar al següent botó i sel·leccionar el/s servei/s
          que es dessitgin i, a la part inferior, s'anirà mostrant el preu total
          i altres opcions.
        </p>
        <Link to="budget">
          <button>Pressupostos</button>
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
