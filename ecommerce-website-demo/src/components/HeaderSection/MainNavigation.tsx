const MainNavigation = () => {
  return (
    <section className="flex flex-row justify-between items-center py-[7px]">
      <h3 className="font-bold text-2xl">Exclusive</h3>
      <div className="flex gap-12 items-center">
        <div className="border-b-2">Home</div>
        <div>Contact</div>
        <div>About</div>
        <div>Sign Up</div>
      </div>

      <div className="flex gap-6 items-center">
        <div className=" bg-[#F5F5F5] py-1.75 flex gap-8.5 pl-5 pr-3 rounded-sm items-center">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="text-xs"
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>

        <div className="flex gap-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>

          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MainNavigation;
