import axios from "axios";
import { handleError } from "../../Utilities/Error/HandleError";
import { LocationResponse } from "../../Models/LocationTypes";

export const GetLocation = async () => {
  const {
    REACT_APP_GOOGLE_KEY, REACT_APP_DESTINATION_LATTITUDE, REACT_APP_DESTINATION_LONGITUDE
  } = process.env;

  const api_url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${REACT_APP_DESTINATION_LATTITUDE},${REACT_APP_DESTINATION_LONGITUDE}&key=${REACT_APP_GOOGLE_KEY}`
  console.log(api_url);
  try {
    let requestUrl = api_url;
    const data = await axios.get<LocationResponse>(requestUrl);
    return data;
  } catch (error) {
    handleError(error);
  }
};
