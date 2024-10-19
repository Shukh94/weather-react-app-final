import React from "react";
import AnimateIcon from "./AnimateIcon";
import axios from "axios";
import "./WeatherForecast.css";
import { useState } from "react";
// import WeatherForecastDay from "./WeatherForecastDay";

function WeatherForecast(props) {
  let [loaded, setLoaded] = useState({ ready: false });
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            {/* <WeatherForecastDay /> */}
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
  } else {
    console.log(props);
    let apiKey = "f5e814a04eddfab1740f07bf0328eee2";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

export default WeatherForecast;
