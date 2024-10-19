import React, { useState } from "react";
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

  function fahrenheit(temp) {
    return (temp * 9) / 5 + 32;
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
        <div className="col-6 other-info">
          <ul className="other-info">
            <li>Feels Like: {props.data.feels}°C</li>
            <li>Max: {props.data.maxTemp}°C</li>
            <li>Min: {props.data.minTemp}°C</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span className="temperature">
          {Math.round(fahrenheit(props.celsius))}
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>
            |°F
          </span>
        </span>
        <div className="col-6 other-info">
          <ul className="other-info">
            <li>Feels Like: {Math.round(fahrenheit(props.data.feels))}°F</li>
            <li>Max: {Math.round(fahrenheit(props.data.maxTemp))}°F</li>
            <li>Min: {Math.round(fahrenheit(props.data.minTemp))}°F</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default WeatherTemp;
