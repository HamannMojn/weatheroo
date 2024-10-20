import React, { useState, useEffect } from "react";
import { GetWeatherForecast } from "../../Services/WeatherService/WeatherService";
import { defaultWeatherResponse, WeatherResponse } from "../../Models/WeatherTypes";
import WeatherList from "../../Components/WeatherList/WeatherList";
import CurrentConditionsComponent from "../../Components/CurrentConditions/CurrentConditionsComponent";
import "./HomePage.css";
import Hero from "../../Components/Hero/Hero";
import { GetLocation } from "../../Services/WeatherService/GeoCodeService";

const HomePage = () => {
  //UseState to handle state for data to be passed to props.
  const [weatherResponse, setWeatherResponse] = useState<WeatherResponse>(defaultWeatherResponse);
  const [formattedAddress, setFormattedAddress] = useState<string>("");

  //UseEffect to call API on load
  useEffect(() => {
    //Async calls in useEffect has to be in its own method
    const getWeatherInit = async () => {
      const result = await GetWeatherForecast();
      let data = result?.data;
      if(data !== undefined){
        setWeatherResponse(data);
      }
    };
    getWeatherInit();
    const getLocationData = async () => {
      const result = await GetLocation();
      
      let data = result?.data;
      if(data !== undefined){
        let result = data.results[0];
        let address = result.formatted_address;
        setFormattedAddress(address);
      }
    };
    getLocationData();
  }, []);

  return (
    <>
      <main className="container">
        <section className="hero">
        <Hero description={weatherResponse.description} address={formattedAddress}/>
          
        </section>
        <section className="current-conditions">
          <CurrentConditionsComponent currentConditions={weatherResponse.currentConditions}/>
          </section>
        <section className="weather-list">
          <WeatherList
            forecasts={weatherResponse.days}
          />
        </section>
      </main>
    </>
  );
};

export default HomePage;
