import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Search.css";
import { useState } from "react";

export function Search() {
  const [expanded, setExpanded] = useState(false);
  const handleExpanse = () => {
    setExpanded(!expanded);
  };
  const buttonClass = expanded ? "nav-link expanded" : "nav-link";
  return (
    <>
      <div className={buttonClass}>
        <FontAwesomeIcon
          icon="fa-solid fa-magnifying-glass"
          onClick={handleExpanse}
        />{" "}
        {expanded && (
          <input className="search-bar" type="text" placeholder="Buscar..." />
        )}
      </div>
    </>
  );
}
