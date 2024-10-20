import React from "react";
import { DayWeather } from "../../Models/WeatherTypes";
import { GetWeekDay } from "../../Utilities/FormatDate/FormatDate";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { useTemperature } from "../../Contexts/TemperatureContext";
import { GetTemperature } from "../../Utilities/GetTemperature/GetTemperature";
import "./WeatherCard.css";

interface prop {
  day: DayWeather;
  key: string;
}

const WeatherCard: React.FC<prop> = ({ day }) => {
  const weekday = GetWeekDay(day.datetime);
  const { isCelsius } = useTemperature();

  return (
    <article id={day.datetime} key={day.datetime}>
      <section>
        <nav>
          <ul>
            <li>
              <strong>{weekday}</strong>
              <br />
              <span>{day.datetime}</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>Temp.</span>
              <br />
              <span>{GetTemperature(day.temp, isCelsius)}</span>
            </li>
            <li>
              <span>Humidity:</span>
              <br />
              <span>{day.humidity}%</span>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <div className="middle">
          <WeatherIcon type={day.icon} />
        </div>
      </section>
      
      <section>
        <nav>
          <ul>
            <li>
              <span>Chance of rain:</span> <br />
              <span>{day.precipprob}%</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>Windspeed:</span>
              <br />
              <span>{day.windspeed}</span>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <div className="description">
          <span>{day.description}</span>
        </div>
      </section>
    </article>
  );
};

export default WeatherCard;
