import {
  AGREGAR_A_POKEIZQ,
  AGREGAR_A_POKEDER,
  LLENAR_ID_POKEMONES,
  SACAR_ID_POKEMON,
  BOOL_DATA,
  ASIGNAR_POK_NULL
} from "../types";

//Las Funciones despachan a Actions (contiene type y payload)


//Función para Cargar un nuevo pokemon al lado izquierdo
export function cargarPokeIzq() {
  return async (dispatch) => {
    //Antes de llamar a APi, corroborar si el id es nuevo o no
    //Si es nuevo, llamar a api,

    //Sino llamar otra vez a Math.random

    dispatch(cargarPokemonIzquierda());
  };
}

const cargarPokemonIzquierda = () => ({
  type: AGREGAR_A_POKEIZQ,
});

//Función para Cargar un nuevo pokemon al lado derecho
export function cargarPokeDer() {
  return async (dispatch) => {
    //Antes de llamar a APi, corroborar si el id es nuevo o no
    //Si es nuevo, llamar a api,

    //Sino llamar otra vez a Math.random

    dispatch(cargarPokemonDerecha());
  };
}

const cargarPokemonDerecha = () => ({
  type: AGREGAR_A_POKEDER,
});

//Función para REINICIAR la llamada al api cuando gana o pierde en elegir
export function llenarIdPokemones() {
  return async (dispatch) => {
    let arrayID = [];
    for (let index = 1; index <= 150; index++) {

      if(index !== 143){
        try {
          let response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${index}`
          );
          let pokemon = await response.json();
          //console.log(respuesta.data)
          /* console.log("Pokemon -> ", pokemon); */
          arrayID.push({
            id: pokemon.id,
            nombre: pokemon.name,
            peso: pokemon.weight,
            imagen: pokemon.sprites.front_default,
          });
        } catch (error) {
          console.log(error);
        }
      }
    }

    arrayID.sort(() => (Math.random() > 0.5 ? 1 : -1));

    dispatch(cargarPokemonNull())
    dispatch(fullPokemones(arrayID));

  };
}
const fullPokemones = (arrayId) => ({
  type: LLENAR_ID_POKEMONES,
  payload: arrayId,
});
/*---------------------------------------------------------------------*/
export function obtenerIdPokemon(id) {
  return (dispatch) => {
    dispatch(extraerId(id));
  };
}

const extraerId = (id) => ({
  type: SACAR_ID_POKEMON,
  payload: id,
});

/*---------------------------------------------------------------------*/

export function modificarBool(bool) {
  return (dispatch) => {
    dispatch(updateBool(bool));
  };
}

const updateBool = (bool) => ({
  type: BOOL_DATA,
  payload: bool,
});

/*---------------------------------------------------------------------*/
//Función que asigna null a pokemon cuando pierde
export function pokeNull() {
  return async (dispatch) => {

    dispatch(cargarPokemonNull());
  };
}

const cargarPokemonNull = () => ({
  type: ASIGNAR_POK_NULL,
});
