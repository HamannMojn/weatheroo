import React from 'react'
import { DayWeather, CurrentConditions } from "../../Models/WeatherTypes";
import WeatherCard from '../Weathercard/WeatherCard';

interface prop{
    currentCondition: CurrentConditions | null;
    forecasts: DayWeather[]
}

const WeatherList : React.FC<prop> =  ({currentCondition, forecasts}) => {
  return (
    <div className='grid'>
        {
        forecasts.length > 0 ? (
            forecasts.map((day) => {
                return (<WeatherCard day={day}/>)
            })
        ) : <p>We can't find no weather</p>}
    </div>
  );
}

export default WeatherList