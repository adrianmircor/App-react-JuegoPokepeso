import {
  AGREGAR_A_POKEBD,
  AGREGAR_A_POKEIZQ,
  AGREGAR_A_POKEDER,
} from "../types";

//Cada reducer tiene su propio state

const initialState = {
  pokebd: [],
  pokeizq: {
    id: 0,
    nombre: "",
    imagen: "",
  },
  pokeder: {
    id: 0,
    nombre: "",
    imagen: "",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_A_POKEBD:
      return {
        ...state,
        pokebd: [...state.pokebd, action.payload],
      };
    case AGREGAR_A_POKEIZQ:
      return {
        ...state,
        pokeizq: action.payload,
      };
    case AGREGAR_A_POKEDER:
      return {
        ...state,
        pokeder: action.payload,
      };
    default:
      return state;
  }
}
