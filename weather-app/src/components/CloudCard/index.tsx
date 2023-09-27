import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { BsCloudFog } from "react-icons/bs";

export const CloudCard = () => {
  const weatherData = useSelector((state: RootState) => state.weather.data);

  return (
    <div className="bg-white rounded-2xl p-4">
      <div className="text-zinc-400">Cloud Status</div>
      <div className="flex gap-2 items-center pl-2 pt-4">
        <div className="text-center text-5xl">{weatherData?.current.cloud}</div>
        <BsCloudFog
          size="25"
          color="#394AD1"
          className="ring-2 p-1 ring-[#E8E6E3] rounded-full"
        />
      </div>
      <div className="mt-2 pl-2">
        <div className="text-black text font-semibold">Feels like</div>
        <div className="flex">
          <div className="text-zinc-400 text-lg">
            {weatherData?.current.feelslike_c}
          </div>
          <div className="text-zinc-400 text-xs pt-1">°C</div>
        </div>
      </div>
    </div>
  );
};
