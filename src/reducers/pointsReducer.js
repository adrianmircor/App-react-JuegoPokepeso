import { 
    AUMENTAR_PUNTOS, 
    REINICIAR_PUNTOS 
} from "../types";

//Cada reducer tiene su propio state

const initialState = {
  puntos: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUMENTAR_PUNTOS:
      return {
        ...state,
        puntos: state.puntos + 10,
      };
    case REINICIAR_PUNTOS:
      return {
        ...state,
        puntos: 0,
      };
    default:
      return state;
  }
}
