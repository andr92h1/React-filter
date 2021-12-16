import React, { useState } from "react";


export const VehicleInfo = (props) => {
  return (
    <div className="Car-data">
      {props.cars.map((Cars) => {
        return (
          <p>
            {Cars.id}, {Cars.typeOfCar}, {Cars.carNumber}, {Cars.fuel}, {Cars.location}
          </p>
        );
      })}
    </div>
  );
};

