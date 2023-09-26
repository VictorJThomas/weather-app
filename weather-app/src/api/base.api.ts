import axios from "axios";

const baseUrl = "http://api.weatherapi.com/v1/current.json";
const apiKey = "e9cd94ec63694a59872150838232309";

export const getWeatherData = async (cityname: string) => {
  const { data } = await axios.get(
    baseUrl + `?key=${apiKey}` + `&q=${cityname}` + "aqi=yes"
  );
  return data;
};

