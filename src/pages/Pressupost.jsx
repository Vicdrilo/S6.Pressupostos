import { useSummaryDataContext } from "../context/DataProvider";
import { Header } from "../components/Header";
import { Summary } from "../components/Summary";
import { CheckB } from "../components/CheckB";

export function Pressupost() {
  const { isSummary, changeToSummary } = useSummaryDataContext();

  changeToSummary(true);
  return (
    <>
      <Header>Aconsegueix la millor qualitat</Header>
      <div className="app-container">
        <CheckB />
      </div>
      <div className="app-container">
        <Summary />
      </div>
    </>
  );
}
