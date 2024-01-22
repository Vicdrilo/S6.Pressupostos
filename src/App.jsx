import "./assets/App.css";
import { Header } from "./components/Header";
import { CheckBox } from "./components/CheckBox";

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

const checkBox = options.map((option, index) => {
  return (
    <CheckBox
      key={index}
      title={option.title}
      description={option.description}
      price={option.price}
    />
  );
});
function App() {
  return (
    <>
      <Header>Aconsegueix la millor qualitat</Header>
      <div className="app-checkbox-container">{checkBox}</div>
      <div className="resumTotal"></div>
    </>
  );
}

export default App;
