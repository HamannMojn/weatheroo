import React from "react";
import { DayWeather } from "../../Models/WeatherTypes";
import { GetWeekDay } from "../../Utilities/FormatDate/FormatDate";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { useTemperature } from "../../Contexts/TemperatureContext";
import { GetTemperature } from "../../Utilities/GetTemperature/GetTemperature";

interface prop {
  day: DayWeather;
  key: string;
}

const WeatherCard: React.FC<prop> = ({ day }) => {
  const weekday = GetWeekDay(day.datetime);
  const { isCelsius } = useTemperature();

  return (
    <article id={day.datetime} key={day.datetime}>
      <div className="top-left">
        <span>{weekday}</span>
        <br />
        <span>{day.datetime}</span>
      </div>
      <WeatherIcon type={day.icon} />
      <div>
        <span>{GetTemperature(day.temp, isCelsius)}</span>
        <br />
        <span>{day.humidity}%</span>
      </div>
      <hr></hr>
      <small>Chance of rain</small>
      <br />
      <small>{day.precipprob}%</small>
      <progress value={day.precipprob} max="100" />
    </article>
  );
};

export default WeatherCard;
