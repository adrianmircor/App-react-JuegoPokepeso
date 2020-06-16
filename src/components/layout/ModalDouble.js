import React from "react";
import { Modal } from "react-bootstrap";

//REDUX
import { useSelector } from "react-redux";

const ModaleDouble = (props) => {
  const { show, onHide, pokeder, pokeizq } = props;
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
        {/*AGREGAR PERDISTE */}
        <div className="container pr-0 ml-2">
          <div className="row pt-3 d-flex justify-content-center">
            <i className="far fa-frown-open fa-10x"></i>
          </div>
          <div className="row pt-3 d-flex justify-content-center">
            <h3 className="msje">
              ¡ PERDISTE, <span>obtuviste {puntos} pokepuntos </span>!
            </h3>
          </div>
          <div className="row">
            <div className="col-6">
              <p className="msje pt-4">
                El peso de {pokeizq.nombre} es {pokeizq.peso}
              </p>{" "}
              <img className="imgModalIzq" src={pokeizq.imagen} alt=""></img>
            </div>
            <div className="col-6">
              <p className="msje pt-4">
                El peso de {pokeder.nombre} es {pokeder.peso}
              </p>{" "}
              <img className="imgModalDer" src={pokeder.imagen} alt=""></img>
            </div>
          </div>
        </div>
      </Modal.Header>
    </Modal>
  );
};

export default ModaleDouble;
