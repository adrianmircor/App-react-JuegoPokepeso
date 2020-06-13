import { combineReducers } from "redux";

import pokemonReducer from './pokemonReducer'
import pointsReducer from "./pointsReducer";

export default combineReducers({
  //Pueden haber varios Reducer... poryectoReducer, tareaReducer, etc
  //1er Reducer
  pokemon: pokemonReducer,
  points: pointsReducer
});
