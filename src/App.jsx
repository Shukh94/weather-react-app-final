import React from "react";
// import WeatherSearch from "./WeatherSearch";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Dhaka" />
      <div>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shakilashukla.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shakila Shukla
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Shukh94/weather-react-app-final-p1"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
