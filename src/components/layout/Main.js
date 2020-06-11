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
  useEffect(() => {
    //si array de PokeView hay 2 -> no llamar a generarId
    //si array de PokeView hay 1 -> llamar 1 vez a generarId
    //si array de PokeView hay 0 -> llamar 2 veces a generarId

    /*if pokeizq null -> generarId */
    /*if pokeder null -> generarId */
    if (pokeizq.nombre === "") {
      generarIdIzq();
    }
    if (pokeder.nombre === "") {
      generarIdDer();
    }
  }, []);
  const pokeizq = useSelector((state) => state.pokemon.pokeizq);
  const pokeder = useSelector((state) => state.pokemon.pokeder);
  const pokebd = useSelector((state) => state.pokemon.pokebd);

  function generarIdIzq() {
    let id = Math.floor(Math.random() * 150) + 1;

    //Comparar con el array, si es distinto -> llamar api
    let idEncontrado = pokebd.find((pok) => pok.id === id);
    console.log("id encontrado ", idEncontrado);
    if (idEncontrado !== undefined) return null;

    let pokeData = getPokemonAsync(id);
    //RESOLVIENDO LA PROMESA
    pokeData.then(function (value) {
      dispatch(
        cargarPokeIzq({
          id: value.id,
          nombre: value.name,
          imagen: value.sprites.front_default,
        })
      );
      dispatch(
        cargarPokeBd({
          id: value.id,
          nombre: value.name,
          imagen: value.sprites.front_default,
        })
      );

      //
      console.log("then izq ", pokebd);
      console.log("then izq ", pokeizq);

    });

    console.log("Redux izq ", pokeizq);
    console.log("pokebd izq ", pokebd);
  }

  function generarIdDer() {
    let id = Math.floor(Math.random() * 150) + 1;

    //Comparar con el array, si es distinto -> llamar api
    let idEncontrado = pokebd.find((pok) => pok.id === id);
    console.log("id encontrado ", idEncontrado);
    if (idEncontrado !== undefined) return null;

    let pokeData = getPokemonAsync(id);
    //RESOLVIENDO LA PROMESA
    pokeData.then(function (value) {
      dispatch(
        cargarPokeDer({
          id: value.id,
          nombre: value.name,
          imagen: value.sprites.front_default,
        })
      );
      dispatch(
        cargarPokeBd({
          id: value.id,
          nombre: value.name,
          imagen: value.sprites.front_default,
        })
      );
      console.log("xxx ", value);

    });
    console.log("Redux der ", pokeder);
    console.log("pokebd der ", pokebd);

  }

  async function getPokemonAsync(id) {


    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let data = await response.json();
    console.log(data.name);
    console.log(data.weight);
    return data;
  }

  return (
    <div className="row d-flex justify-content-center mt-4 mb-5">
      <div className="pokemon col-md-4 ">
        <div className="">
          <button className="boton">
            <img className="pokem" src={pokeizq.imagen} width="300px" alt="" />
          </button>
          <h5 className="text-center">{pokeizq.nombre.toUpperCase()}</h5>
        </div>
      </div>
      <div className="pokebola col-md-4 d-flex justify-content-center align-self-center ">
        <div>
          <img className="pokeb" src="/img/pokebola.png" width="150px" alt="" />
        </div>
      </div>
      <div className="pokemon col-md-4">
        <div className="">
          <button className="boton">
            <img className="pokem" src={pokeder.imagen} width="300px" alt="" />
          </button>
          <h5 className="text-center">{pokeder.nombre.toUpperCase()}</h5>
        </div>
      </div>
    </div>
  );
};

export default Main;
