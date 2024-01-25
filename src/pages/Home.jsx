import { useSummaryDataContext } from "../context/DataProvider";
import { Header } from "../components/Header";
import { Summary } from "../components/Summary";

export function Home() {
  const { isSummary, changeToSummary } = useSummaryDataContext();

  changeToSummary(false);
  return (
    <>
      <Header>Benvingut</Header>
      <div className="app-container">
        <Summary />
      </div>
    </>
  );
}
