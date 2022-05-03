import React from "react";
import "./styles.css";
import data from "./weatherData";
import WeatherForecast from "./WeatherForecast";

export default function App() {
  const weather = data.map(function (i, index) {
    return (
      <WeatherForecast
        img={i.url}
        condition={i.condition}
        time={i.time}
        key={index}
      />
    );
  });

  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section className="weather">{weather}</section>
    </div>
  );
}
