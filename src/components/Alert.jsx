import { Modal } from "react-bootstrap";
import { useAlertDataContext } from "../context/DataProvider";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Alert.css";

export function Alert() {
  const {
    isLang, //estado para decidir si el alert es para lenguajes o páginas
    setLang,
    show, //estado para mostrar o esconder el Alert
    handleClose,
    handleShow,
  } = useAlertDataContext();
  const bodyLang =
    "Afegeix els llenguatges que tindrà el teu projecte. El cost de cada llenguatges és de 30€.";
  const bodyPage =
    "Afegeix les pàgines que necessitis per a dur a terme el teu projecte. El cost de cada pàgina és de 30€.";

  const title = isLang ? <span>llenguatges</span> : <span>pàgines</span>;
  const body = isLang ? bodyLang : bodyPage;

  return (
    <>
      <Modal show={show} onHide={handleClose} className="alert-container">
        <Modal.Header className="alert-header d-flex justify-content-center">
          <Modal.Title className="alert-title fs-2 fw-bold">
            Número de {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="alert-body text-center fs-4">{body}</Modal.Body>
      </Modal>
    </>
  );
}
