import {
  AGREGAR_A_POKEBD,
  AGREGAR_A_POKEIZQ,
  AGREGAR_A_POKEDER,
} from "../types";

//Las Funciones despachan a Actions (contiene type y payload)

//Función para Cargar un nuevo pokemon al lado izquierdo
export function cargarPokeBd(pokemon) {
  return (dispatch) => {
    dispatch(cargarPokemonBaseDatos(pokemon));
  };
}

const cargarPokemonBaseDatos = (pokemon) => ({
  type: AGREGAR_A_POKEBD,
  payload: pokemon,
});

//Función para Cargar un nuevo pokemon al lado izquierdo
export function cargarPokeIzq(pokemon) {
  return (dispatch) => {
    dispatch(cargarPokemonIzquierda(pokemon));
  };
}

const cargarPokemonIzquierda = (pokemon) => ({
  type: AGREGAR_A_POKEIZQ,
  payload: pokemon,
});

//Función para Cargar un nuevo pokemon al lado derecho
export function cargarPokeDer(pokemon) {
  return (dispatch) => {
    dispatch(cargarPokemonDerecha(pokemon));
  };
}

const cargarPokemonDerecha = (pokemon) => ({
  type: AGREGAR_A_POKEDER,
  payload: pokemon,
});
