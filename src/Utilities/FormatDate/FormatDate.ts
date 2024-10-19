export const FormatDate = (input:Date) =>{
    return input.getFullYear() + '-' +
                      String(input.getMonth() + 1).padStart(2, '0') + '-' +
                      String(input.getDate()).padStart(2, '0');
}

export const AddDays = (input: Date, daysToAdd:number) =>{
    input.setDate(input.getDate() + daysToAdd);
    return input;
}

export const GetWeekDay = (input: string) => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let date = new Date(input);
    return weekday[date.getDay()];
}