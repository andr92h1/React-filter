
import React, { useState } from "react";
import "./filter.css";




 export const Filter = () => {

    const [carNumber, setCarNumber] = useState();
    const [minfuel, setMinFuel] = useState(0);
    const [maxfuel, setMaxFuel] = useState(0);
    const [carType, setCarType] = useState();

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
    

    return (
      <div>
        <div class="description">Car number:</div>
        <label>
          <input 
           type="text"
           class="fields"
           value={carNumber}
           onChange= {(event) => setCarNumber(Cars.carNumber)}/>
           {" "}
        </label>


        <div class="description">Fuel min:</div>
          <input
            class="fields"
            type="text"
            onChange={(event) => setMinFuel(event.target.value)}
            min="10"
            value={minfuel}
            max="100"
          />{" "}
    

        <div class="description">Fuel max:</div>
          <input
            class="fields"
            type="text"
            onChange={(event) => setMaxFuel(event.target.value)}
            min="10"
            value={maxfuel}
            max="100"
          />{" "}
        


        <br></br>


        <div class="description">Car type:</div>
        <div class="checkboxes">
          <label><input class="box" type="checkbox" onClick = {() => setCarType(carType)}/>Green Car</label>
          <label><input class="box" type="checkbox" onClick = {() => setCarType(carType)}/>Long Range</label>
        </div>



        <br></br>


        <div class="description">Location:</div>
        
          <input class="fields" type="text" />
        

        <br></br>
     <div class="description">
        <button className="submitButton" type="submit">Submit</button>
        </div>
      </div>
    
    )};



