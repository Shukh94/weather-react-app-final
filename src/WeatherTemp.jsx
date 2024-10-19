import React from "react";
import { useState } from "react";
import "./WeatherTemp.css";

function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="temperature">
          {Math.round(props.celsius)}
          <span className="unit">
            °C|
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span className="temperature">
          {Math.round(fahrenheit())}
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>
            |°F
          </span>
        </span>
      </div>
    );
  }
}

export default WeatherTemp;
