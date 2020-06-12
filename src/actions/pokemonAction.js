import {
  AGREGAR_A_POKEBD,
  AGREGAR_A_POKEIZQ,
  AGREGAR_A_POKEDER,
  REINICIAR_POKEBD
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

//Función para REINICIAR la poke bd cuando pierde en elegir
export function reiniciarPokeBd() {
  return (dispatch) => {
    dispatch(reiniciarPokemonBaseDatos());
  };
}

const reiniciarPokemonBaseDatos = () => ({
  type: REINICIAR_POKEBD,
});

//Función para Cargar un nuevo pokemon al lado izquierdo
export function cargarPokeIzq(pokebd) {
  return async (dispatch) => {
    //Antes de llamar a APi, corroborar si el id es nuevo o no
    //Si es nuevo, llamar a api,
    let id;
    let idEncontrado;
    do {
      id = generarRandom();
      idEncontrado = pokebd.find((pok) => pok.id === id);
      console.log("DIO POKEMON REPETIDO -> ", idEncontrado);
      
    } while (idEncontrado);
    //Sino llamar otra vez a Math.random

    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      let pokemon = await response.json();
      //console.log(respuesta.data)
      /* console.log("Pokemon -> ", pokemon); */
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

export function cargarPokeIzqExito(pokebd) {
  return async (dispatch) => {
    //Antes de llamar a APi, corroborar si el id es nuevo o no
    //Si es nuevo, llamar a api,
    let id;
    let idEncontrado;
    do {
      id = generarRandom();
      idEncontrado = pokebd.find((pok) => pok.id === id);
      console.log("DIO POKEMON REPETIDO -> ", idEncontrado);
      if(pokebd.length === 5){
        console.log("Ganaste")
        break;
      }
    } while (idEncontrado);
    //Sino llamar otra vez a Math.random

    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      let pokemon = await response.json();
      //console.log(respuesta.data)
      /* console.log("Pokemon -> ", pokemon); */
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
export function cargarPokeDer(pokebd) {
  return async (dispatch) => {
    //Antes de llamar a APi, corroborar si el id es nuevo o no
    //Si es nuevo, llamar a api,
    let id;
    let idEncontrado;
    do {
      id = generarRandom();
      idEncontrado = pokebd.find((pok) => pok.id === id);
      console.log("DIO POKEMON REPETIDO -> ", idEncontrado);
      
    } while (idEncontrado);
    //Sino llamar otra vez a Math.random

    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      let pokemon = await response.json();
      //console.log(respuesta.data)
      /* console.log("Pokemon -> ", pokemon); */
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

export function cargarPokeDerExito(pokebd) {
  return async (dispatch) => {
    //Antes de llamar a APi, corroborar si el id es nuevo o no
    //Si es nuevo, llamar a api,
    let id;
    let idEncontrado;
    do {
      id = generarRandom();
      idEncontrado = pokebd.find((pok) => pok.id === id);
      console.log("DIO POKEMON REPETIDO -> ", idEncontrado);
      if(pokebd.length === 5){
        console.log("Ganaste")
        break;
      }
    } while (idEncontrado);
    //Sino llamar otra vez a Math.random

    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      let pokemon = await response.json();
      //console.log(respuesta.data)
      /* console.log("Pokemon -> ", pokemon); */
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

const generarRandom = () => {
  let id = Math.floor(Math.random() * 5) + 1;
  return id;
};
