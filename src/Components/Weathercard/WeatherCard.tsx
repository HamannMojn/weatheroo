import React from "react";
import { DayWeather } from "../../Models/WeatherTypes";

interface prop {
  day: DayWeather;
}

const WeatherCard : React.FC<prop> = ({day}) => {
  return (
    <article id={day.datetime} key={day.datetime}>
      <div>
        <span>{day.temp}</span>
        <span>{day.humidity}</span>
      </div>
      <h2>{day.datetime}</h2>
    </article>
  );
};

export default WeatherCard;
