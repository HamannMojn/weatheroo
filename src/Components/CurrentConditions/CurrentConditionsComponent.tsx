import { useTemperature } from "../../Contexts/TemperatureContext";
import { CurrentConditions } from "../../Models/WeatherTypes";
import { GetTemperature } from "../../Utilities/GetTemperature/GetTemperature";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import "./CurrentConditionsComponent.css";

interface Props {
  currentConditions: CurrentConditions;
}


const CurrentConditionsComponent: React.FC<Props> = ({
  currentConditions: CurrentConditions,
}) => {
  const { isCelsius } = useTemperature();
  console.log(CurrentConditions);
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
