import axios from "axios";
import { handleError } from "../../Utilities/Error/HandleError";
import { WeatherResponse } from "../../Models/WeatherTypes";
import { FormatDate, AddDays } from "../../Utilities/FormatDate/FormatDate";

export const GetWeatherForecast = async () => {
  const {
    REACT_APP_API_KEY,
    REACT_APP_DESTINATION_LONGITUDE,
    REACT_APP_DESTINATION_LATTITUDE,
  } = process.env;
  //Default date interval is 15 days, so to limit data, we want current date + 6 days to get the forecast of 7 total days. After that we want the allowed format for the api yyyy-mm-dd
  const startDate = new Date()
  const endDate = AddDays(new Date(), 6);
  const startDateString = FormatDate(startDate);
  const endDateString = FormatDate(endDate);

  const api_url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${REACT_APP_DESTINATION_LATTITUDE}%2C${REACT_APP_DESTINATION_LONGITUDE}/${startDateString}/${endDateString}?unitGroup=metric&key=${REACT_APP_API_KEY}&contentType=json`;

  
  try {
    let requestUrl = api_url;
    const data = await axios.get<WeatherResponse>(requestUrl);
    return data;
  } catch (error) {
    handleError(error);
  }
};
