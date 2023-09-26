import { useState } from "react";
import { WeekContainer } from "./WeekContainer";
import { HighLightCard } from "./HighlightCard";

export const RightPanel = () => {
  const [selectedOption, setSelectedOption] = useState<string>("today");

  const [degree, setDegree] = useState<string>("C");

  const changeDegrees = (degrees: string) => {
    setDegree(degrees);
  };

  const changeSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-[100%] container p-8 px-10 rounded-r-[50px] bg-[#e8e7e7]">
      <div className="flex flex-2 flex-row justify-between">
        <div className="flex m-2 gap-2  text-xl">
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
          <HighLightCard />
          <HighLightCard />
          <HighLightCard />
          <HighLightCard />
          <HighLightCard />
          <HighLightCard />
        </div>
      </div>
    </div>
  );
};
