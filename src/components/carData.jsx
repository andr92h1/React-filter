import React from "react";
import { VehicleInfo } from "./vehicles";

export const VehicleInformation = () => {
  const Cars = [
    {
      id: 1,
      typeOfCar: "greenCar",
      carNumber: "BE37654",
      fuel: 40,
      location: "Landgreven 3",
    },
    {
      id: 2,
      typeOfCar: "longRange",
      carNumber: "BE37655",
      fuel: "60",
      location: "Aertevej 17",
    },
    {
      id: 3,
      typeOfCar: "greenCar",
      carNumber: "BE37657",
      fuel: "100",
      location: "Princessegade 1",
    },
    {
      id: 4,
      typeOfCar: "longRange",
      carNumber: "BE37658",
      fuel: "50",
      location: "Bertsgade 7",
    },
  ];

  return <VehicleInfo cars={Cars} />;
};

export default {
  title: "Vehicles",
};