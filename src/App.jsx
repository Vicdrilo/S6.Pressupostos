import "./assets/App.css";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { CheckB } from "./components/CheckB";
import { DataProvider } from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Header>Aconsegueix la millor qualitat</Header>
      <div className="app-container">
        <CheckB />
      </div>
      <div className="app-container">
        <Summary />
      </div>
    </DataProvider>
  );
}

export default App;
