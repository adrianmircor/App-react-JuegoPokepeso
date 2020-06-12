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
export function cargarPokeIzq() {
  return async (dispatch) => {
    let id = Math.floor(Math.random() * 150) + 1;

    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      let pokemon = await response.json();
      //console.log(respuesta.data)
      console.log("Pokemon -> ", pokemon);
      dispatch(cargarPokemonIzquierda(pokemon));
      dispatch(
        cargarPokemonBaseDatos({
          id: pokemon.id,
          nombre: pokemon.name,
          imagen: pokemon.sprites.front_default,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
}

const cargarPokemonIzquierda = (pokemon) => ({
  type: AGREGAR_A_POKEIZQ,
  payload: pokemon,
});

//Función para Cargar un nuevo pokemon al lado derecho
export function cargarPokeDer(pokemon) {
  return async (dispatch) => {
    let id = Math.floor(Math.random() * 150) + 1;

    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      let pokemon = await response.json();
      //console.log(respuesta.data)
      console.log("Pokemon -> ", pokemon);
      dispatch(cargarPokemonDerecha(pokemon));
      dispatch(
        cargarPokemonBaseDatos({
          id: pokemon.id,
          nombre: pokemon.name,
          imagen: pokemon.sprites.front_default,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
}

const cargarPokemonDerecha = (pokemon) => ({
  type: AGREGAR_A_POKEDER,
  payload: pokemon,
});
