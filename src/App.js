import React from "react";
import Header from "./components/layout/Header";
import Points from "./components/layout/Points";
import Main from "./components/layout/Main";

//Redux
import { Provider } from "react-redux";
import store from "./store"; //store -> index de reducer -> state del Reducer

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header></Header>
        <Points></Points>
        <Main></Main>
      </Provider>
    </div>
  );
}

export default App;
