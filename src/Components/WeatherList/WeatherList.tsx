import React from 'react'
import { DayWeather} from "../../Models/WeatherTypes";
import WeatherCard from '../Weathercard/WeatherCard';
import './WeatherList.css';

interface prop{
    forecasts: DayWeather[]
}

const WeatherList : React.FC<prop> =  ({forecasts}) => {
  forecasts = forecasts.slice(1);
  return (
    <div className='grid'>
        {
        forecasts.length > 0 ? (
            forecasts.map((day) => {
                return (<WeatherCard day={day} key={day.datetime}/>)
            })
        ) : <p>We can't find no weather</p>}
    </div>
  );
}

export default WeatherList