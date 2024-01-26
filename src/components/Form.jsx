//imports
import arrow from "../assets/white-right-arrow.png";
//variables

export function Form() {
  //...

  return (
    <>
      <form>
        <input type="text" name="" id="" placeholder="Nom" />
        <input type="text" name="" id="" placeholder="Telèfon" />
        <input type="email" name="" id="" placeholder="Email" />
      </form>
      <button>
        Sol·licitar pressupost
        <span>
          <img src={arrow} alt="white-right-arrow" />
        </span>
      </button>
    </>
  );
}
