import { useTemperature } from "../../Contexts/TemperatureContext";
import { CurrentConditions } from "../../Models/WeatherTypes";
import { GetTemperature } from "../../Utilities/GetTemperature/GetTemperature";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import "./CurrentConditionsComponent.css";

interface Props {
  currentConditions: CurrentConditions;
}
//CurrentCondition compontent to show the current weather condition based on the forecast 

const CurrentConditionsComponent: React.FC<Props> = ({
  currentConditions: CurrentConditions,
}) => {
  
  //UseTemperature from TemperatureContext to know if user wants celsius or fahrenheit.
  const { isCelsius } = useTemperature();
  return (
      <article className="box">
        <hgroup>
          <WeatherIcon type={CurrentConditions.icon} />
          <label>{CurrentConditions.conditions}</label>
        </hgroup>
        <div>
          <h1>{GetTemperature(CurrentConditions.temp, isCelsius)}</h1>
          <p>Feels like {GetTemperature(CurrentConditions.feelslike, isCelsius)}</p>
        </div>
        <div>
          <hr></hr>
          <small>Chance of rain</small>
          <br/>
          <small>{CurrentConditions.precipprob}%</small>
          <progress value={CurrentConditions.precipprob} max="100" />
        </div>
      </article>
  );
};

export default CurrentConditionsComponent;
