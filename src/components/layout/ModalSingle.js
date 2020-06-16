import React from "react";
import { Modal } from "react-bootstrap";

const Modale = (props) => {
  const { show, onHide, pokmodal, boolperder} = props;

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
        {/*AGREGAR VAS BIEN */}
        <i className="far fa-smile-beam fa-10x"></i>
        <img className="imgModal" src={pokmodal.imagen}></img>
      </Modal.Header>
    </Modal>
  );
};

export default Modale;
