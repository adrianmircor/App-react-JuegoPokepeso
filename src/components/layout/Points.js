import React from "react";
import { useSelector } from "react-redux";

const Points = () => {

  const points = useSelector(state => state.points.puntos)

  return (
    <div className="container mt-4">
      <div className="row mt-3">
        <div className="col d-flex justify-content-end">
          <h5 className="text-center">Poke-kg: {points}</h5>
        </div>
      </div>
    </div>
  );
};

export default Points;
