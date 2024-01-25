import "./styles/App.css";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { CheckB } from "./components/CheckB";
import { DataProvider } from "./context/DataProvider";
import { Home } from "./pages/Home";
import { Pressupost } from "./pages/Pressupost";

function App() {
  return (
    <DataProvider>
      <Pressupost />
    </DataProvider>
  );
}

export default App;

///////////////////////////////////////////////////////////////
/*
<Header>Aconsegueix la millor qualitat</Header>
      <div className="app-container">
        <CheckB />
      </div>
      <div className="app-container">
        <Summary />
      </div>
      */
