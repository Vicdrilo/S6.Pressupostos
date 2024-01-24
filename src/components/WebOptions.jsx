import { ButtonNum } from "./ButtonNum";
import "../assets/WebOptions.css";

export function WebOptions({ title, changeTotalPrice }) {
  return (
    <>
      <div className="wo-pages-container">
        <label htmlFor="pages">
          <strong>Nombre de pàgines</strong>
        </label>
        <ButtonNum
          id="pages"
          title={title}
          changeTotalPrice={changeTotalPrice}
        />
      </div>
      <div className="wo-language-container">
        <label htmlFor="language">
          <strong>Nombre de llenguatges</strong>
        </label>
        <ButtonNum
          id="language"
          title={title}
          changeTotalPrice={changeTotalPrice}
        />
      </div>
    </>
  );
}
