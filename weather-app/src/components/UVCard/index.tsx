import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./style.css";

export const UVCard = () => {
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const cardStyle = { "--value": weatherData?.current.uv };

  return (
    <div className="bg-white rounded-2xl p-4 ">
      <div className="text-zinc-400">UV Index</div>
      <div
        role="progressbar"
        aria-valuenow="33"
        aria-valuemin="0"
        aria-valuemax="100"
        style={cardStyle}
        className="progress-bar"
      ></div>
    </div>
  );
};
