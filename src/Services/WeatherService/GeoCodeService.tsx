import axios from "axios";
import { handleError } from "../../Utilities/Error/HandleError";
import { LocationResponse } from "../../Models/LocationTypes";

export const GetLocation = async () => {
  //Get environment variables from .env in root
  const {
    REACT_APP_GOOGLE_KEY, REACT_APP_DESTINATION_LATTITUDE, REACT_APP_DESTINATION_LONGITUDE
  } = process.env;
  //Construct url
  const api_url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${REACT_APP_DESTINATION_LATTITUDE},${REACT_APP_DESTINATION_LONGITUDE}&key=${REACT_APP_GOOGLE_KEY}`
  console.log(api_url);
  try {
    const data = await axios.get<LocationResponse>(api_url);
    return data;
  } catch (error) {
    handleError(error);
  }
};
