import SearchIcon from "../icons/SearchIcon";

const SearchBar = () => {
  return (
    <div className=" bg-secondary-2 sm:py-2 flex items-center gap-3 sm:gap-8 p-1 sm:pl-5 sm:pr-3 rounded-sm">
      <div className="min-w-[153px]">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="text-xs w-full focus:outline-none"
        />
      </div>

      <SearchIcon />
    </div>
  );
};

export default SearchBar;
