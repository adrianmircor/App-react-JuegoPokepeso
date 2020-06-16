//Falta modal de ganador -> click aceptar -> reiniciar puntaje
//Falta modal de "Vas bien" el otro pokemon tiene x kg
//Falta modal de :( y comparar los pesos (en kg) de ambos pokemones

//Si gana -> funciona correctamente
//Si pierde -> funciona correctamente

/*Falta:
-colocar:
https://fontawesome.com/icons/smile-beam?style=regular (vas bien)
https://fontawesome.com/icons/laugh-wink?style=regular (GANADOR)
https://fontawesome.com/icons/frown-open?style=regular (perdedor->reiniciar)*/

import React, { useEffect, useState } from "react";

import Modale from "./ModalSingle";
import ModaleDouble from "./ModalDouble";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  cargarPokeIzq,
  cargarPokeDer,
  llenarIdPokemones,
  modificarBool,
} from "../../actions/pokemonAction";

import { aumentarPuntos, reiniciarPuntos } from "../../actions/pointsAction";

const Main = () => {
  const dispatch = useDispatch();

  const pokeizq = useSelector((state) => state.pokemon.pokeizq);
  const pokeder = useSelector((state) => state.pokemon.pokeder);
  const pokeids = useSelector((state) => state.pokemon.pokeids);
  const data = useSelector((state) => state.pokemon.data);
  useEffect(() => {
    //Mostrar pokemones distintos
    //NO SE PUEDE USAR LOS ESTADOS (STORE) DE FORMA DIRECTA AQUI!
    //TAMPOCO SE PUEDE USAR DE FORMA DIRECTA EN FUNCIONES!!

    dispatch(reiniciarPuntos());
    dispatch(llenarIdPokemones());
    console.log("Se carga por 1ra vez");
  }, []);

  //Cada vez que data sea verdadero, presentara a los 2 pokemones aleatorios
  const [modalShow, setModalShow] = useState(false);
  const [modalShowDouble, setModalShowDouble] = useState(false);
  useEffect(() => {
    if (data) {
      console.log("DEL 2DO USE EFFECT ya se puede observar lo cargado: ",pokeids);
      dispatch(cargarPokeIzq());
      dispatch(cargarPokeDer());
      console.log("Se asigna pok der y pok izq");
      dispatch(modificarBool(false));
    }
  }, [data === true]); //¡Se puede usar del STORE directamente aqui!

  const [pokmodal, setPokModal] = useState({});
  const [boolperder, setBoolPerder] = useState(false);

  const cerrarModal = () => {
    setModalShow(false);

    if (pokeizq.peso > pokeder.peso) {
      dispatch(cargarPokeDer());
    } else {
      dispatch(cargarPokeIzq());
    }
  };

  const cerrarModalDouble = () => {
    setModalShowDouble(false);
    dispatch(llenarIdPokemones());
    console.log("Se carga por PERDER: ", pokeids);
    dispatch(reiniciarPuntos());
  };
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
          console.log("Ganaste");
          dispatch(aumentarPuntos());
          /*
          MODAL DE VICTORIA
          */

          dispatch(llenarIdPokemones());
        } else {
          //FALTA AGREGAR MODAL -> "VAS BIEN"
          /*
           */
          setModalShow(true); //show pasa a true para mostrar el modal
          setBoolPerder(false); //Para mostrar modal con solo 1 pokemon
          setPokModal(pokeder); //Mostrar el unico pokemon del modal

          dispatch(aumentarPuntos());
        }
      } else {
        //FALTA AGREGAR MODAL -> CARITA TRISTE
        /*
         */
        //MOSTRAR PESOS DE AMBOS POKEMONES
        /*
         */
        setBoolPerder(true);
        setModalShowDouble(true); //Abre el modal

        //if(clickReiniciar){
        /* dispatch(llenarIdPokemones());
        dispatch(reiniciarPuntos()); */
        console.log("PERDISTE");

        //}

        //¡!
        /*SE EJECUTA DEL useEffect, ya que 
        data cambia a true*/
      }
    } else {
      if (poke === pokeder) {
        if (pokeids.length === 0) {
          //Mostrar modal y terminar el programa
          /*
           */
          console.log("Ganaste");
          dispatch(aumentarPuntos());
          dispatch(llenarIdPokemones());
        } else {
          //FALTA AGREGAR MODAL -> "VAS BIEN"
          /*
           */
          setModalShow(true); //show pasa a true para mostrar el modal
          setBoolPerder(false); //Para mostrar modal con solo 1 pokemon
          setPokModal(pokeizq); //Mostrar el unico pokemon del modal

          dispatch(aumentarPuntos());
        }
      } else {
        //TRAER A 2 NUEVOS POKEMONES

        //FALTA AGREGAR MODAL -> CARITA TRISTE
        /*
         */
        //MOSTRAR PESOS DE AMBOS POKEMONES
        /*
         */
        setBoolPerder(true);
        setModalShowDouble(true);
        console.log("PERDISTE");

        /* dispatch(llenarIdPokemones());
        dispatch(reiniciarPuntos()); */

        //Mostrar pokemones distintos
        //¡!
        /*SE EJECUTA DEL useEffect, ya que 
        data cambia a true*/
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
      <Modale
        pokmodal={pokmodal}
        show={modalShow}
        boolperder={boolperder ? 1 : 0}
        onHide={() => cerrarModal()}
      />
      {boolperder ? (
        <ModaleDouble
          show={modalShowDouble}
          pokeizq={pokeizq}
          pokeder={pokeder}
          boolperder={boolperder ? 1 : 0}
          onHide={() => cerrarModalDouble()}
        />
      ) : null}
    </div>
  );
};

export default Main;
