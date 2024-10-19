import React from "react";
import AnimateIcon from "./AnimateIcon";
import "./WeatherForecast.css";

function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForeccast-day">Thu</div>
          <AnimateIcon code="01d" size={38} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
