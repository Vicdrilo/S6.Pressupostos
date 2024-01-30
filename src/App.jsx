import "./styles/App.css";

import { DataProvider } from "./context/DataProvider";
import { Home } from "./pages/Home";
import { Pressupost } from "./pages/Pressupost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="budget" element={<Pressupost />} />
        </Routes>
      </BrowserRouter>
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
