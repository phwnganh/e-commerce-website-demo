import { useEffect, useState } from "react";

const CategoriesNavigation = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);

  const displayedCategories = categories.slice(0, 8);
  return (
      <aside className="hidden md:flex md:flex-row gap-4 flex-col">
          <div className="mt-10 flex flex-col gap-4 lg:items-start items-center w-full lg:w-[217px]">
      {displayedCategories.map((category, index) => (
        <p className="" key={index}>
          {category}
        </p>
      ))}
      <button className="border-2 rounded-sm px-6">See More</button>
    </div>
    <div className="hidden lg:block border-[0.5px] opacity-30 rotate-180"></div>
    </aside>

  );
};

export default CategoriesNavigation;
