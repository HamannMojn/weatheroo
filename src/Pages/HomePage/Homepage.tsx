import React, { useState, useEffect } from "react";
import { weatherGetForecast } from "../../Services/WeatherService/WeatherService";
import { CurrentConditions, DayWeather } from "../../Models/WeatherTypes";
import WeatherList from "../../Components/WeatherList/WeatherList";
import CurrentConditionsComponent from "../../Components/CurrentConditions/CurrentConditionsComponent";
import "./HomePage.css";
import Hero from "../../Components/Hero/Hero";

const HomePage = () => {
  //UseState to handle state for data to be passed to props.
  const defaultCondition = {
    conditions: "",
    datetime: "",
    feelslike: 10,
    humidity: 20,
    pressure: 80,
    temp: 20,
    visibility: 100,
    windspeed: 100,
    icon: 'cloudy',
    precipprob: 0
  };
  const [currentConditions, setCurrentConditions] = useState<CurrentConditions>(defaultCondition);
  const [forecast, setForecast] = useState<DayWeather[]>([]);
  const [description, setDescription] = useState<string>("");

  //UseEffect to call API on load
  useEffect(() => {
    const getWeatherInit = async () => {
      const result = await weatherGetForecast();
      let data = result?.data;
      console.log(data);
      if (data?.currentConditions !== undefined) {
        setCurrentConditions(data.currentConditions);
      }
      let forecasts = data?.days;
      if (Array.isArray(forecasts)) {
        setForecast(forecasts);
      }
      if(data !== undefined){
        setDescription(data.description)
      }
    };
    getWeatherInit();
  }, []);
  return (
    <>
      <main className="container">
        <section className="hero">
          <Hero description={description}/>
        </section>
        <section className="current-conditions">
          <CurrentConditionsComponent currentConditions={currentConditions}/>
          </section>
        <section className="weather-list">
          <WeatherList
            forecasts={forecast}
          />
        </section>
      </main>
    </>
  );
};

export default HomePage;
