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
  //useTemperature to either calculate temperature from celsius. Either way the GetTemperature method adds correct unit
  const { isCelsius } = useTemperature();

  //WeatherIcon component dynamically loads correct Icon based on what weather the api returns.

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
              <u>Temp.</u>
              <br />
              <span>{GetTemperature(day.temp, isCelsius)}</span>
            </li>
            <li>
              <u>Humidity:</u>
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
              <u>Chance of rain:</u> <br />
              <span>{day.precipprob}%</span>
            </li>
          </ul>
          <ul>
            <li>
              <u>Windspeed:</u>
              <br />
              <span>{day.windspeed}</span>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <div className="description">
          <strong>{day.description}</strong>
        </div>
      </section>
    </article>
  );
};

export default WeatherCard;
