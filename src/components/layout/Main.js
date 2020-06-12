//Falta definir el puntaje, que no salgan pokemones iguales y modal

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
} from "../../actions/pokemonAction";

const Main = () => {
  const dispatch = useDispatch();

  const pokeizq = useSelector((state) => state.pokemon.pokeizq);
  const pokeder = useSelector((state) => state.pokemon.pokeder);
  const pokebd = useSelector((state) => state.pokemon.pokebd);
  useEffect(() => {
    dispatch(cargarPokeIzq(pokebd));
    dispatch(cargarPokeDer(pokebd));
  }, []);

  /* console.log("AQUI -> ", pokeizq);
  console.log("AQUI BD-> ", pokebd); */

  if (!pokeizq || !pokeder) return null;

  //FALTA AGREGAR MODAL
  const handleClickPok = (poke) => {
    /* console.log("click a ", poke.name); */

    if (pokeizq.weight > pokeder.weight) {
      if (poke === pokeizq) {
        if (pokebd.length === 5) {
          //Mostrar modal y terminar el programa
          console.log("Ganaste");
          dispatch(reiniciarPokeBd());
        } else {
          //FALTA AGREGAR MODAL -> "VAS BIEN"
          dispatch(cargarPokeDer(pokebd));
        }
      } else {
        //FALTA AGREGAR MODAL -> CARITA TRISTE
        //MOSTRAR PESOS DE AMBOS POKEMONES
        dispatch(reiniciarPokeBd());

        dispatch(cargarPokeIzq(pokebd));
        dispatch(cargarPokeDer(pokebd));
      }
    } else {
      if (poke === pokeder) {
        if (pokebd.length === 5) {
          //Mostrar modal y terminar el programa
          console.log("Ganaste");
          dispatch(reiniciarPokeBd());
        } else {
          //FALTA AGREGAR MODAL -> "VAS BIEN"
          dispatch(cargarPokeIzq(pokebd));
        }
      } else {
        //TRAER A 2 NUEVOS POKEMONES

        //FALTA AGREGAR MODAL -> CARITA TRISTE
        //MOSTRAR PESOS DE AMBOS POKEMONES
        dispatch(reiniciarPokeBd());
        dispatch(cargarPokeIzq(pokebd));
        dispatch(cargarPokeDer(pokebd));
      }
    }
  };

  return (
    <div className="row d-flex justify-content-center mt-4 mb-5">
      <div className="pokemon col-md-4 ">
        <div className="">
          <button onClick={() => handleClickPok(pokeizq)} className="boton">
            <img
              className="pokem"
              src={pokeizq.sprites.front_default}
              width="300px"
              alt=""
            />
          </button>
          <h5 className="text-center">{pokeizq.name.toUpperCase()}</h5>
          <h5 className="text-center">{pokeizq.weight}</h5>
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
            <img
              className="pokem"
              src={pokeder.sprites.front_default}
              width="300px"
              alt=""
            />
          </button>
          <h5 className="text-center">{pokeder.name.toUpperCase()}</h5>
          <h5 className="text-center">{pokeder.weight}</h5>
        </div>
      </div>
    </div>
  );
};

export default Main;
