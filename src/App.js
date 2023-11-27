import React, { useMemo, useState } from "react";
import './App.css'

const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);


  function onWeightChange(event){
      setWeight(event.target.value);
      console.log(weight)
  }

  function onHeightChange(event){
    setHeight(event.target.value)
    console.log(height)
  }


  const output = useMemo(()=>{
    const calculateHeight = height /100;

    return (weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[weight,height]);
  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight:{weight} kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        />
        <p className="slider-output">Height: {height}cm</p>
        <input className="input-slider" type="range" 
        onChange={onHeightChange}
        min='140'
        max='220'/>
      </div>
      <div className="output-section">
        <p>Your BMI is </p>
        <p className="output">{output}</p>
      </div>
      <br></br>
      <h1>Please Note:</h1>
      <h5>If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range.</h5>
    </main>
  );
};

export default App;
