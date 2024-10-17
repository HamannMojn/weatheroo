import axios from "axios";
import { handleError } from "../../Utilities/Error/HandleError";
import { WeatherResponse } from "../../Models/WeatherTypes";

export const weatherGetForecast = async () => {
  const {
    REACT_APP_API_KEY,
    REACT_APP_DESTINATION_LONGITUDE,
    REACT_APP_DESTINATION_LATTITUDE,
  } = process.env;
  console.log(process.env)
  const api_url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${REACT_APP_DESTINATION_LATTITUDE}%2C${REACT_APP_DESTINATION_LONGITUDE}?unitGroup=metric&include=days%2Ccurrent&key=${REACT_APP_API_KEY}&contentType=json`;
  try {
    let requestUrl = api_url;
    const data = await axios.get<WeatherResponse>(requestUrl);
    return data;
  } catch (error) {
    handleError(error);
  }
};
