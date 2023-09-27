/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } from "../redux/reducers/weatherSlice";

const baseUrl = "http://api.weatherapi.com/v1/current.json";
const apiKey = "e9cd94ec63694a59872150838232309";

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const getWeatherData = (cityname: string) => {
  return async (dispatch: Dispatch) => {

    dispatch(fetchWeatherStart());

    try{
      const url = `${baseUrl}?key=${apiKey}&q=${cityname}&aqi=yes`
      console.log("API Request URL: ", url);
      const response: AxiosResponse = await axios.get(url)
      dispatch(fetchWeatherSuccess(response.data))
    } catch(error: any){
      dispatch(fetchWeatherFailure(error.message))
    }
  };
};

