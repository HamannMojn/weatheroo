import axios from "axios";
import { handleError } from "../../Utilities/Error/HandleError";

const api_key = process.env.API_KEY;
const api_url = `https://api.weatherapi.com/v1/forecast.json?key=${api_key}`;

export const weatherGetForecast = async (city:string, days:number, ) => {
    try{
        let requestUrl = api_url + `&q=${city}&days=${days}`;
        const data = await axios.get(requestUrl)
        return data;
    } catch(error){
        handleError(error);
    }
}