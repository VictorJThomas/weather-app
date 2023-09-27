import { SetStateAction, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

export const SearchBar = ({onSearch}) => {
  const [cityName, setCityName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(cityName)
  }

  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setCityName(e.target.value)
  }

  return (
    <div className="relative flex items-center pl-8 p-8">
      <form onSubmit={handleSubmit}>
        <RiSearch2Line
          size="25"
          color="black"
          className="absolute pr-2 pl-1 pt-2"
        />
        <input
          type="text"
          name="place"
          placeholder="Search for places..."
          className="h-8 placeholder:text-black text-xs pl-5 w-[14rem]"
          value = {cityName}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};
