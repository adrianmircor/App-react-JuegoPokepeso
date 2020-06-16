import React from "react";
import { Modal } from "react-bootstrap";

const ModaleDouble = (props) => {
  const { show, onHide, boolperder, pokeder, pokeizq } = props;

  const fueCerrado = () => {
    console.log("Fue cerrado");
    console.log("show", show);
  };
  return (
    <Modal
      //{...props}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onClick={() => fueCerrado()}
    >
      <Modal.Header closeButton>
        {/*AGREGAR PERDISTE */}
        <img className="imgModalIzq" src={pokeizq.imagen}></img>
        <img className="imgModalDer" src={pokeder.imagen}></img>
      </Modal.Header>
    </Modal>
  );
};

export default ModaleDouble;
