import React from "react";
import AnimateIcon from "./AnimateIcon";
import axios from "axios";
import "./WeatherForecast.css";

function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  let apiKey = "b40b135798f82a05aed08769f9275f50";
  let latitude = props.coordninates.lat;
  let longitude = props.coordninates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
