import { ChangeEvent, useState } from "react";
import SizeBtn from "./SizeBtn";
import options from "../data/filter-options.json";
import ProductCard from "./ProductCard";
import { useGetLaptopSize } from "../hooks/useGetLaptopSize";
import InBoxCarousel from "./InBoxCarousel";
import carouselDetail from "../data/carousel";

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

  const filterOptions = isFourteenInch
    ? options
    : options.filter((el) => el.value !== "m3");
  const getDetails = useGetLaptopSize(currentOption);
  const details = getDetails(isFourteenInch ? "fourteenInch" : "sixteenInch");
  const sets = isFourteenInch
    ? carouselDetail.fourteenInch
    : carouselDetail.sixteenInch;
  return (
    <main className="flex flex-col items-center gap-8 overflow-visible">
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
                className={`${addActiveClass(option.value)} cursor-pointer rounded-full px-4 py-2 font-title text-sm`}
                htmlFor={option.value}
              >
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <section className="flex w-full flex-col items-center gap-2 p-10 md:grid md:grid-cols-3 md:flex-row md:max-w-[90rem]">
          {details.map((detail) => {
            return (
              <div key={detail.id} className="flex justify-center">
                <ProductCard
                  specs={detail.specs}
                  infos={detail.infos}
                  price={detail.price}
                  colors={detail.colors}
                  chip={detail.chip}
                  isFourteenInch={isFourteenInch}
                  id={detail.id}
                />
              </div>
            );
          })}
        </section>
        <InBoxCarousel collection={sets} />
      </div>
    </main>
  );
};

export default Gallery;
