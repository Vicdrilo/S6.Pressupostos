import { Outlet, Link } from "react-router-dom";
import {
  useBudgetDataContext,
  useSummaryDataContext,
} from "../context/DataProvider";

export function Summary({ children }) {
  const {
    budgetOptions,
    total,
    changeTotalPrice,
    isChecked,
    changeStateCheck,
  } = useBudgetDataContext();

  const { isSummary, changeToSummary } = useSummaryDataContext();

  const sumContainerClass = isSummary
    ? "sum-container-right"
    : "sum-container-center";
  const displaySummary = isSummary ? "sum-display-summary" : "sum-display-none";
  const displayHome = isSummary ? "sum-display-none" : "sum-display-home";

  return (
    <div className={sumContainerClass}>
      <div className={displaySummary}>
        <h1>Preu pressupostat: {total}€</h1>
        <Link to="/">
          <button>Volver</button>
        </Link>
        <Outlet />
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
