import React from "react";
import { Modal } from "react-bootstrap";

//REDUX
import { useSelector } from "react-redux";

const Modale = (props) => {
  const { show, onHide, pokmodal } = props;
  const puntos = useSelector((state) => state.points.puntos);

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
        <div className="container pr-0 ml-2">
          <div className="row pt-3 d-flex justify-content-center">
            <i className="far fa-smile-beam fa-10x"></i>
          </div>
          <div className="row pt-3 d-flex justify-content-center">
            <h3 className="msje">
              ¡ VAS BIEN, <span>obtienes {puntos} pokepuntos </span>!
            </h3>
          </div>
          <p className="msje pt-4">
            El peso de {pokmodal.nombre} es {pokmodal.peso}
          </p>
          <img classNam00e="imgModal" src={pokmodal.imagen} alt="infopok"></img>
        </div>
      </Modal.Header>
    </Modal>
  );
};

export default Modale;
