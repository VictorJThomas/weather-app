import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "./SearchBar";
import { getWeatherData } from "../actions/base.api";
import { RootState } from "../redux/store";

export const LeftPanel = () => {
  const dispatch = useDispatch();

  const weatherData = useSelector((state: RootState) => state.weather.data);

  const handleSearch = (cityName: string) => {
    dispatch(getWeatherData(cityName));
  };

  const formatTime = (timeString: string | number | Date) => {
    const date = new Date(timeString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const getDayOfWeek = (timeString: string | number | Date) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(timeString);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  };

  return (
    <div className="w-[40%] container p-4 rounded-l-[50px] bg-white items-center">
      <SearchBar onSearch={handleSearch} />
      {weatherData ? (
        <div>
          <div className="pl-6">
            <img src={weatherData.current.condition.icon} alt="current_condition" width="200px"/>
          </div>
          <div className="text-black pl-8 text-6xl">{weatherData.current.temp_c}°C</div>
          <div className="flex flex-2 text-base pl-8 my-4">
            <div className="text-gray-900 text-end">
              <strong>{getDayOfWeek(weatherData.location.localtime)},</strong>
            </div>
            <div className="text-gray-500 text-start">{formatTime(weatherData.location.localtime)}</div>
          </div>
          <hr />
          <div className="text-sm m-2 my-3 pl-6">
            <div className="my-4">{weatherData.current.condition.text}</div>
            <div className="my-4">Humidity - {weatherData.current.humidity}%</div>
          </div>
        </div>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};
