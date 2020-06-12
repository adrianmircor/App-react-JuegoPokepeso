import React, { useEffect, useState } from "react";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  cargarPokeIzq,
  cargarPokeDer,
  cargarPokeBd,
} from "../../actions/pokemonAction";

const Main = () => {
  const dispatch = useDispatch();

  const pokeizq = useSelector((state) => state.pokemon.pokeizq);
  const pokeder = useSelector((state) => state.pokemon.pokeder);
  const pokebd = useSelector((state) => state.pokemon.pokebd);
  useEffect(() => {
    //si array de PokeView hay 2 -> no llamar a generarId
    //si array de PokeView hay 1 -> llamar 1 vez a generarId
    //si array de PokeView hay 0 -> llamar 2 veces a generarId

    /*if pokeizq null -> generarId */
    /*if pokeder null -> generarId */

    dispatch(cargarPokeIzq());
    dispatch(cargarPokeDer());
  }, []);

  /* console.log("AQUI -> ", pokeizq);
  console.log("AQUI BD-> ", pokebd); */

  if (!pokeizq || !pokeder) return null;

  //FALTA AGREGAR MODAL
  const handleClickPok = (poke) => {
    console.log("click a ", poke.name);

    if (pokeizq.weight > pokeder.weight) {
      if (poke === pokeizq) {
        console.log("GANASTE: escogiste a ", poke.name);
        console.log("Pesa -> ", poke.weight);
        dispatch(cargarPokeDer());
        //FALTA AGREGAR MODAL -> "VAS BIEN"
      } else {
        console.log("PERDISTE: escogiste a ", poke.name);
        console.log("Pesa -> ", poke.weight);
        //TRAER A 2 NUEVOS POKEMONES

        //FALTA AGREGAR MODAL -> CARITA TRISTE
        //MOSTRAR PESOS DE AMBOS POKEMONES 

        dispatch(cargarPokeIzq());
        dispatch(cargarPokeDer());
      }
    } else {
      if (poke === pokeder) {
        console.log("GANASTE: escogiste a ", poke.name);
        console.log("Pesa -> ", poke.weight);
        dispatch(cargarPokeIzq());
        //FALTA AGREGAR MODAL -> "VAS BIEN"
      } else {
        console.log("PERDISTE: escogiste a ", poke.name);
        console.log("Pesa -> ", poke.weight);
        //TRAER A 2 NUEVOS POKEMONES

        //FALTA AGREGAR MODAL -> CARITA TRISTE
        //MOSTRAR PESOS DE AMBOS POKEMONES      
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
