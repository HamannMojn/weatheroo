export const GetTemperature = (temperature:number, isCelsius: boolean) =>{
    return isCelsius ? GetCelsius(temperature) : GetFahrenheit(temperature) 
}

const GetCelsius = (temperature: number) => {
    return temperature + "C°";
}

const GetFahrenheit = (temperature: number) => {
    let fahrenheit = (temperature * 9/5)+32;
    return fahrenheit + "F°";
}