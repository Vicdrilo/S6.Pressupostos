import { ButtonNum } from "./ButtonNum";
import "../assets/WebOptions.css";

export function WebOptions() {
  return (
    <>
      <div className="wo-pages-container">
        <label htmlFor="pages">
          <strong>Nombre de pàgines</strong>
        </label>
        <ButtonNum id="pages" />
      </div>
      <div className="wo-language-container">
        <label htmlFor="language">
          <strong>Nombre de llenguatges</strong>
        </label>
        <ButtonNum id="language" />
      </div>
    </>
  );
}
