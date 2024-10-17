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
}
