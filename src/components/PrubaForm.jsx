import { useForm } from "react-hook-form";
import "../styles/Form.css";

export function PruebaForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  return (
    <div className="form-container">
      <form
        className="form-input-container"
        onSubmit={handleSubmit((data) => {
          console.log(data);
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
