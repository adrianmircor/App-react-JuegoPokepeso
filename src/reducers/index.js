import { combineReducers } from "redux";

import pokemonReducer from './pokemonReducer'

export default combineReducers({
  //Pueden haber varios Reducer... poryectoReducer, tareaReducer, etc
  //1er Reducer
  pokemon: pokemonReducer,
});
