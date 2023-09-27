import { useState } from "react";
import { WeekContainer } from "./WeekContainer";
import { HighLightCard } from "./HighlightCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { UVCard } from "./UVCard";
import { WindCard } from "./WindCard";
import { CloudCard } from "./CloudCard";

export const RightPanel = () => {
  const [selectedOption, setSelectedOption] = useState<string>("week");

  const [degree, setDegree] = useState<string>("C");

  const changeDegrees = (degrees: string) => {
    setDegree(degrees);
  };

  const changeSelect = (option: string) => {
    setSelectedOption(option);
  };

  const weatherData = useSelector((state: RootState) => state.weather.data);


  return (
    <div className="w-[100%] container p-4 px-10 rounded-r-[50px] bg-[#F0F0F0]">
      <div className="flex flex-2 flex-row justify-between pb-12">
        <div className="flex m-2 gap-4 text-xl">
          <button
            className={`hover:cursor-pointer ${
              selectedOption === "today"
                ? "text-gray-700 font-bold underline underline-offset-[8px]"
                : "text-gray-500"
            }`}
            onClick={() => changeSelect("today")}
          >
            Today
          </button>
          <button
            className={`hover:cursor-pointer ${
              selectedOption === "week"
                ? "text-gray-700  font-bold underline underline-offset-[8px]"
                : "text-gray-500"
            }`}
            onClick={() => changeSelect("week")}
          >
            Week
          </button>
        </div>
        <div className="flex flex-2 p-6">
          <div className="px-6 text-xl">
            <button
              className={`mx-1 px-[7px] py-[3px] rounded-full ${
                degree === "C" ? "bg-black text-white" : "bg-white"
              }`}
              onClick={() => changeDegrees("C")}
            >
              °C
            </button>
            <button
              className={`mx-1 px-[7px] py-[3px] rounded-full ${
                degree === "F" ? "bg-black text-white" : "bg-white"
              }`}
              onClick={() => changeDegrees("F")}
            >
              °F
            </button>
          </div>
          <div className="">Photo</div>
        </div>
      </div>
      <WeekContainer />
      <div className="pt-10">
        <h2 className="text-xl font-bold">Today's Highlights</h2>
        <div className="grid grid-cols-3 gap-6 mt-6 m-2">
          <UVCard />
          <WindCard />
          <CloudCard />
          <HighLightCard />
          <HighLightCard />
          <HighLightCard />
        </div>
      </div>
    </div>
  );
};
