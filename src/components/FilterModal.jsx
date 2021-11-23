
import React, { useState } from "react";
import "./Filter.jsx";
import "./filter.css";


    const [minfuel, setMinFuel] = useState(0);
    const [maxfuel, setMaxFuel] = useState(0);
    const [carNumber, setCarNumber] = useState(0);
    const [carType, setCarType] = useState();

 export const FilterForm = () => {

    return (
      <div>
        <div class="description">Car number:</div>
        <label>
          <input type="text" class="fields"/>
        </label>

        <br></br>


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
        <button className="submitButton">Submit</button>
        </div>
      </div>
    );
  };


