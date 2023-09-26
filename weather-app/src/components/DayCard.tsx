type DayCardProp = {
  day: string;
  weather: string;
  c: string;
  f: string;
};

export const DayCard = ({ day, weather, c, f }: DayCardProp) => {
  return (
    <div className="w-[100px]">
      <div className="bg-white rounded-xl p-4 text-center items-center ">
        <div className="pb-1 font-semibold">{day}</div>
        <img src={weather} width="50px" className="pl-2"/>
        <div className="flex pl-3 gap-2 text-gray-500">
          <div className="text-gray-700 font-semibold">{c}</div>
          <div className="text-gray-500">{f}</div>
        </div>
      </div>
    </div>
  );
};
