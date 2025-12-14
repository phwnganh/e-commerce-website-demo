const SearchBar = () => {
  return (
    <div className=" bg-secondary-2 py-2 hidden sm:flex gap-8 pl-5 pr-3 rounded-sm">
      <div className="min-w-[153px]">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="text-xs w-full focus:outline-none"
        />
      </div>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="shrink-0  cursor-pointer"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    </div>
  );
};

export default SearchBar;
