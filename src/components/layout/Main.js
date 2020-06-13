//Falta modal de ganador -> click aceptar -> reiniciar puntaje
//Falta modal de "Vas bien" el otro pokemon tiene x kg
//Falta modal de :( y comparar los pesos (en kg) de ambos pokemones

import React, { useEffect, useState } from "react";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  cargarPokeIzq,
  cargarPokeDer,
  cargarPokeBd,
  reiniciarPokeBd,
  cargarPokeIzqExito,
  cargarPokeDerExito,
  cargarPokeDif,
  llenarIdPokemones,
  obtenerIdPokemon,
} from "../../actions/pokemonAction";

import { aumentarPuntos, reiniciarPuntos } from "../../actions/pointsAction";

const Main = () => {
  const dispatch = useDispatch();

  const pokeizq = useSelector((state) => state.pokemon.pokeizq);
  const pokeder = useSelector((state) => state.pokemon.pokeder);
  const pokebd = useSelector((state) => state.pokemon.pokebd);
  const pokeids = useSelector((state) => state.pokemon.pokeids);
  const pokeidsolo = useSelector((state) => state.pokemon.pokeidsolo);
  const data = useSelector((state) => state.pokemon.data);
  useEffect(() => {
    //Mostrar pokemones distintos
    //NO SE PUEDE USAR LOS ESTADOS (STORE) DE FORMA DIRECTA AQUI!
    //TAMPOCO SE PUEDE USAR DE FORMA DIRECTA EN FUNCIONES!!

    dispatch(reiniciarPuntos());
    dispatch(llenarIdPokemones());
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(cargarPokeIzq());
      dispatch(cargarPokeDer());
      console.log(pokeids);
    }
  }, [data===true]);

  console.log("exec");

  /* console.log("---> ",pokeids) */

  /* console.log("AQUI -> ", pokeizq);
  console.log("AQUI BD-> ", pokebd); */

  if (!pokeizq || !pokeder) return null;

  //FALTA AGREGAR MODAL
  const handleClickPok = (poke) => {
    /* console.log("click a ", poke.name); */

    if (pokeizq.peso > pokeder.peso) {
      if (poke === pokeizq) {
        if (pokeids.length === 0) {
          //Mostrar modal y terminar el programa
          /*
           */
          /* console.log("Ganaste");
          dispatch(aumentarPuntos());
          dispatch(llenarIdPokemones()); */
        } else {
          //FALTA AGREGAR MODAL -> "VAS BIEN"
          /*
           */
          dispatch(aumentarPuntos());
          dispatch(cargarPokeDer());
        }
      } else {
        //FALTA AGREGAR MODAL -> CARITA TRISTE
        /*
         */
        //MOSTRAR PESOS DE AMBOS POKEMONES
        /*
         */
        dispatch(llenarIdPokemones());
        dispatch(reiniciarPuntos());
        dispatch(cargarPokeIzq());
        dispatch(cargarPokeDer());

        //Mostrar pokemones distintos
      }
    } else {
      if (poke === pokeder) {
        if (pokeids.length === 0) {
          //Mostrar modal y terminar el programa
          /*
           */
          /* console.log("Ganaste");
          dispatch(aumentarPuntos());
          dispatch(llenarIdPokemones()); */
        } else {
          //FALTA AGREGAR MODAL -> "VAS BIEN"
          /*
           */
          dispatch(aumentarPuntos());
          dispatch(cargarPokeIzq());
        }
      } else {
        //TRAER A 2 NUEVOS POKEMONES

        //FALTA AGREGAR MODAL -> CARITA TRISTE
        /*
         */
        //MOSTRAR PESOS DE AMBOS POKEMONES
        /*
         */
        dispatch(llenarIdPokemones());
        dispatch(reiniciarPuntos());

        //Mostrar pokemones distintos
        console.log("Pok dif");
        dispatch(cargarPokeIzq());
        dispatch(cargarPokeDer());
      }
    }
  };

  return (
    <div className="row d-flex justify-content-center mt-4 mb-5">
      <div className="pokemon col-md-4 ">
        <div className="">
          <button onClick={() => handleClickPok(pokeizq)} className="boton">
            <img className="pokem" src={pokeizq.imagen} width="300px" alt="" />
          </button>
          <h5 className="text-center">{pokeizq.nombre}</h5>
          <h5 className="text-center">{pokeizq.peso}</h5>
        </div>
      </div>
      <div className="pokebola col-md-4 d-flex justify-content-center align-self-center ">
        <div>
          <img className="pokeb" src="/img/pokebola.png" width="150px" alt="" />
        </div>
      </div>
      <div className="pokemon col-md-4">
        <div className="">
          <button onClick={() => handleClickPok(pokeder)} className="boton">
            <img className="pokem" src={pokeder.imagen} width="300px" alt="" />
          </button>
          <h5 className="text-center">{pokeder.nombre}</h5>
          <h5 className="text-center">{pokeder.peso}</h5>
        </div>
      </div>
    </div>
  );
};

export default Main;
