import { ChangeEvent, useState } from "react";
import SizeBtn from "./SizeBtn";
import filterOptions from "../data/filter-options.json";
import ProductCard from "./ProductCard";

const Gallery = () => {
  const [isFourteenInch, setIsFourteenInch] = useState(true);
  const [currentOption, setCurrentOption] = useState("all");
  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentOption(e.target.value);
  };
  const addActiveClass = (value: string) => {
    if (currentOption === value) {
      return "bg-black text-white";
    }
    return "bg-gray";
  };
  return (
    <main className="flex flex-col items-center gap-8">
      <SizeBtn
        isFourteenInch={isFourteenInch}
        setIsFourteenInch={setIsFourteenInch}
      />
      <div className="flex flex-col items-center gap-4">
        <p>Filter by chip:</p>
        <div className="flex items-center gap-2">
          {filterOptions.map((option) => (
            <div key={option.value}>
              <input
                type="radio"
                value={option.value}
                name="filterOptions"
                id={option.value}
                className="hidden"
                onChange={handleFilterChange}
              ></input>
              <label
                className={`${addActiveClass(option.value)} font-title cursor-pointer rounded-full px-4 py-2 text-sm`}
                htmlFor={option.value}
              >
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <section className="p-10">
          <ProductCard />
        </section>
      </div>
    </main>
  );
};

export default Gallery;
