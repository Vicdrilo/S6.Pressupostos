import "./assets/App.css";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { CheckB } from "./components/CheckB";
import { DataProvider } from "./context/DataProvider";
//import { useDataContext } from "../context/DataProvider";

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

  return (
    <DataProvider>
      <Header>Aconsegueix la millor qualitat</Header>
      <div className="app-checkbox-container">
        <CheckB />
      </div>
      <Summary />
    </DataProvider>
  );
}

export default App;
