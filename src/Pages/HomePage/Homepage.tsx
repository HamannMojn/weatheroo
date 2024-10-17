import React, { useState, useEffect } from "react";
import { weatherGetForecast } from "../../Services/WeatherService/WeatherService";
import { CurrentConditions, DayWeather } from "../../Models/WeatherTypes";
import WeatherList from "../../Components/WeatherList/WeatherList";

const HomePage = () => {
  //UseState to handle state for data to be passed to props.
  const defaultCondition = {
    conditions: '',
    datetime: '',
    feelslike: 10,
    humidity: 20,
    pressure: 80,
    temp: 20,
    visibility: 100,
    windspeed: 100
  }
  const [currentConditions, setCurrentConditions] = useState<CurrentConditions>(
    defaultCondition);
  const [forecast, setForecast] = useState<DayWeather[]>([]);

  //UseEffect to call API on load
  useEffect(() => {
    const getWeatherInit = async () => {
      const result = await weatherGetForecast();
      let data = result?.data;
      if(data?.currentConditions !== undefined){
        setCurrentConditions(data.currentConditions);
      }
      let forecasts = data?.days;
      if(Array.isArray(forecasts)){
        setForecast(forecasts);
      }
    };
    getWeatherInit();
  }, []);
  return (
  <>
  <main id="container">
    <section className="hero">
      <div className="hook">
        <h1><mark>Stay Ahead with WeatheRoo</mark>
        <br/>
        Weather & 7-Day Forecast for Better Developers in Aarhus!
        </h1>
      </div>
    </section>
    <section className="weather-list">
      <WeatherList 
      currentCondition={currentConditions}
      forecasts={forecast}/>
    </section>

  </main>
  </>
  );
};

export default HomePage;
