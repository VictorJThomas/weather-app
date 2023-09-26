import { RiSearch2Line } from "react-icons/ri";

export const SearchBar = () => {

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
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
        />
      </form>
    </div>
  );
};
