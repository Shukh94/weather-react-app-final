import React from "react";
import FormattedDate from "./formattedDate";
import AnimateIcon from "./AnimateIcon";
import WeatherTemp from "./WeatherTemp";

function WeatherInfo(props) {
  const weatherData = {
    celsius: props.data.temperature,
    feels: Math.round(props.data.feels),
    maxTemp: Math.round(props.data.maxTemp),
    minTemp: Math.round(props.data.minTemp),
  };

  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="info-left">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 weather-info">
          <AnimateIcon code={props.data.icon} size={64} />
          <WeatherTemp
            celsius={weatherData.celsius}
            data={{
              feels: weatherData.feels,
              maxTemp: weatherData.maxTemp,
              minTemp: weatherData.minTemp,
            }}
          />
        </div>
        <div className="col-6">
          <ul className="info-right">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
