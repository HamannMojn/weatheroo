export interface WeatherResponse {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  days: DayWeather[];
  currentConditions: CurrentConditions;
  description: string;
}

export interface DayWeather {
  datetime: string;
  temp: number;
  feelslike: number;
  humidity: number;
  windspeed: number;
  visibility: number;
  conditions: string;
  description: string;
  icon: string;
  precipprob: number;
}

export type CurrentConditions = {
  datetime: string;
  temp: number;
  feelslike: number;
  humidity: number;
  windspeed: number;
  pressure: number;
  visibility: number;
  conditions: string;
  icon: string;
  precipprob: number;
}

export const defaultCondition: CurrentConditions = {
  conditions: "",
  datetime: "",
  feelslike: 10,
  humidity: 20,
  pressure: 80,
  temp: 20,
  visibility: 100,
  windspeed: 100,
  icon: 'cloudy',
  precipprob: 0
};

export const defaultWeatherResponse = {
  queryCost: 1,
  latitude: 0,
  longitude: 0,
  resolvedAddress: "",
  address: "",
  timezone: "",
  tzoffset: 0,
  days: [],
  currentConditions: defaultCondition,
  description: "",
}
