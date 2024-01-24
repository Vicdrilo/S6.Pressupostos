import "./assets/App.css";
import { CheckB } from "./components/CheckB";
import { CheckBox } from "./components/CheckBox";
import { Header } from "./components/Header";
//import { CheckBox } from "./components/CheckBox";
import { Summary } from "./components/Summary";
import { useTotalPrice } from "./context/DataProvider";
import { useDataJSON } from "./context/DataProvider";
import { useCrearCheckbox } from "./context/DataProvider";
//import { useState } from "react";
import { DataProvider } from "./context/DataProvider";
/*
const options = [
  {
    title: "Seo",
    description: "Programació d'una web responsive completa",
    price: 300,
  },
  {
    title: "Ads",
    description: "Programació d'una web responsive completa",
    price: 400,
  },
  {
    title: "Web",
    description: "Programació d'una web responsive completa",
    price: 500,
  },
];
*/
function App() {
  //const [total, setTotal] = useState(0);

  /*
  const changeTotalPrice = (checked, price) => {
    if (checked) {
      setTotal(total + price);
    } else {
      setTotal(total - price);
    }
  };

  const checkBox = options.map((option, index) => {
    return (
      <CheckBox
        key={index}
        title={option.title}
        description={option.description}
        price={option.price}
        changeTotalPrice={changeTotalPrice}
      />
    );
  });
*/

  const opt = useDataJSON;
  console.log("PRUEBA: ", opt);
  const total = useTotalPrice;

  return (
    <DataProvider>
      <Header>Aconsegueix la millor qualitat</Header>
      <div className="app-checkbox-container">
        <CheckB />
      </div>
      <Summary>{total}</Summary>
    </DataProvider>
  );
}

export default App;
