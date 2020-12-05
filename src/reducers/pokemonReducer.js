import {
  AGREGAR_A_POKEIZQ,
  AGREGAR_A_POKEDER,
  LLENAR_ID_POKEMONES,
  SACAR_ID_POKEMON,
  BOOL_DATA,
  ASIGNAR_POK_NULL,
} from "../types";

//Cada reducer tiene su propio state

const initialState = {
  pokeizq: null,
  pokeder: null,
  pokeids: [],
  pokeidsolo: null,
  data: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_A_POKEIZQ: //cargarPokeIzq
      return {
        ...state,
        pokeizq: state.pokeids.pop(),
      };
    case AGREGAR_A_POKEDER: //cargarPokeDer
      return {
        ...state,
        pokeder: state.pokeids.pop(),
      };
    case LLENAR_ID_POKEMONES:
      return {
        ...state,
        pokeids: action.payload, //¡!
        data: true,
      };
    case SACAR_ID_POKEMON:
      return {
        ...state,
        pokeidsolo: action.payload,
        pokeids: state.pokeids.filter((pok) => pok !== action.payload),
      };
    case BOOL_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ASIGNAR_POK_NULL:
      return {
        ...state,
        pokeizq: null,
        pokeder: null,
      };
    default:
      return state;
  }
}
