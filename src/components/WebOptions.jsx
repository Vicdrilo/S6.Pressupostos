import { ButtonNum } from "./ButtonNum";
import "../styles/WebOptions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useAlertDataContext } from "../context/DataProvider";
import { Alert } from "./Alert";

export function WebOptions() {
  const {
    isLang, //estado para decidir si el alert es para lenguajes o páginas
    setLang,
    show, //estado para mostrar o esconder el Alert
    handleClose,
    handleShow,
  } = useAlertDataContext();

  return (
    <>
      <div className="wo-pages-container">
        <label htmlFor="pages">
          <strong>Nombre de pàgines</strong>
        </label>
        <button
          className="wo-btn-alert"
          onClick={() => {
            setLang(false);
            handleShow();
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-circle-info" />
        </button>
        <Alert />
        <ButtonNum id="pages" />
      </div>
      <div className="wo-language-container">
        <label htmlFor="language">
          <strong>Nombre de llenguatges</strong>
        </label>
        <button
          className="wo-btn-alert"
          onClick={() => {
            setLang(true);
            handleShow();
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-circle-info" />
        </button>
        <Alert />
        <ButtonNum id="language" />
      </div>
    </>
  );
}
