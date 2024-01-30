import { useForm } from "react-hook-form";
import { useBudgetDataContext } from "../context/DataProvider";
import "../styles/Form.css";

export function Form() {
  const {
    serviceOptions, //archivo JSON
    total, //total precios
    changeTotalPrice, //cambiar el precio total del presupuestos
    numLang, //número lengajes
    changeNumLang, //cambio núm lenguajes
    numPage, //número páginas
    changeNumPage, // cambio núm páginas
    checkedStates,
    changeStateCheck,
    servicesChecked,
    changeServicesCheckedList,
    subservicesQuantity,
    changeSubservicesQuantity,
    savedBudgets,
    changeSavedBudgets,
    resetForm,
  } = useBudgetDataContext();

  const { register, handleSubmit, reset } = useForm();

  return (
    <div className="form-container">
      <form
        className="form-input-container"
        onSubmit={handleSubmit((data) => {
          data.services = [...servicesChecked];
          servicesChecked.includes("Web")
            ? (data.subservices = [...subservicesQuantity])
            : (data.subservices = undefined);
          data.price = total;
          changeSavedBudgets(data);
          resetForm();
          reset();
        })}
      >
        <input
          type="text"
          {...register("name", { required: "És necessari." })}
          id="name"
          placeholder="Nom"
          className="text-input"
        />
        <input
          type="text"
          {...register("phone", {
            required: "És necessari.",
            minLength: {
              value: 9,
              message: "El número ha de ser de 9 dígits",
            },
            maxLength: {
              value: 9,
              message: "El número ha de ser de 9 dígits",
            },
          })}
          id="phone"
          placeholder="Telèfon"
          className="text-input"
        />
        <input
          type="email"
          {...register("email", { required: "És necessari." })}
          id="email"
          placeholder="Email"
          className="text-input"
        />
        <input
          type="submit"
          className="form-button"
          value="Sol·licitar pressupost"
        />
      </form>
    </div>
  );
}

/*<span>
    <img src={arrow} alt="white-right-arrow" />
</span>*/
