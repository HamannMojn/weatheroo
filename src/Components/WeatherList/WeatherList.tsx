import React from 'react'
import { DayWeather} from "../../Models/WeatherTypes";
import WeatherCard from '../Weathercard/WeatherCard';
import './WeatherList.css';
import Spinner from '../Spinner/Spinner';

interface prop{
    forecasts: DayWeather[]
}

const WeatherList : React.FC<prop> =  ({forecasts}) => {
  //Remove first entry as this weather is already shown in CurrentConditions
  forecasts = forecasts.slice(1);
  return (
    <div className='grid'>
        {
        forecasts.length > 0 ? (
            forecasts.map((day) => {
                return (<WeatherCard day={day} key={day.datetime}/>)
            })
        ) : <p><Spinner/></p>}
    </div>
  );
}

export default WeatherList