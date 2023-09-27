import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { RiWindyLine } from "react-icons/ri";

export const WindCard = () => {
  const weatherData = useSelector((state: RootState) => state.weather.data);

  return (
    <div className="bg-white rounded-2xl p-4">
      <div className="text-zinc-400">Wind Status</div>
      <div className="flex flex-2 pt-4 pl-2">
        <div className="text-center text-5xl">
          {weatherData?.current.wind_kph}
        </div>
        <div className="text-2xl pt-4">km/h</div>
      </div>
      <div className="pt-4 pl-2 flex flex-2">
        <RiWindyLine
          color="#394AD1"
          size="25"
          className="ring-2 ring-[#E8E6E3] rounded-full ml-1 p-1"
        />
        <div className="pl-2 text-base font-semibold">
          {weatherData?.current.wind_dir}
        </div>
      </div>
    </div>
  );
};
