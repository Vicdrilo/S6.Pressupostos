import { useForm } from "react-hook-form";
import { useBudgetDataContext } from "../context/DataProvider";
import "../styles/Form.css";

export function Form() {
  const {
    total, //total precios
    servicesChecked, //servicios que se han seleccionado para el presupuesto
    subservicesQuantity, //cantidad de los subservicios de web
    changeSavedBudgets, //cambiar array de presupuestos guardados
    resetForm, //resetear el contenido de los checkbox y algunos datos más
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
