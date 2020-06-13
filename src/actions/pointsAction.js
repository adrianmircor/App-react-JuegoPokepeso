import { 
    AUMENTAR_PUNTOS, 
    REINICIAR_PUNTOS 
} from "../types";

//Función para Aumentar los puntos del usuario
export function aumentarPuntos() {
  return (dispatch) => {
    dispatch(addPuntos());
  };
}

const addPuntos = () => ({
  type: AUMENTAR_PUNTOS,
});

//Función para Reiniciar los puntos del usuario en caso se equivoque
export function reiniciarPuntos() {
  return (dispatch) => {
    dispatch(restartPuntos());
  };
}

const restartPuntos = () => ({
  type: REINICIAR_PUNTOS
});




