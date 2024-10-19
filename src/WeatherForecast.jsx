import React, { useState } from "react";
import AnimateIcon from "./AnimateIcon";
import axios from "axios";
import "./WeatherForecast.css";

function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  console.log(props);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForeccast-day">{forecast[0].dt}</div>
            <AnimateIcon code={forecast[0].weather[0].icon} size={38} />
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">
                {forecast[0].temp.max}°
              </span>
              <span className="WeatherForecast-temp-min">
                {forecast[0].temp.min}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "b40b135798f82a05aed08769f9275f50";
    let latitude = props.coordninates.lat;
    let longitude = props.coordninates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

export default WeatherForecast;
