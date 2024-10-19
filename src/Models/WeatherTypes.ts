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

export interface CurrentConditions {
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
