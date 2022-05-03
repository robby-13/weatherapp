import React from "react";

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <img src={props.img} alt="" />
      <p>
        <span>{props.condition}</span>
      </p>
      <p>
        <span>{props.time}</span>
      </p>
    </div>
  );
};

export default WeatherForecast;
