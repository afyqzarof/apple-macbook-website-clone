import { ChangeEvent, useState } from "react";

type SpecOptionProps = {
  title: string;
  subtitle: string;
  cards: Card[];
};
type Card = {
  title: string;
  price: number;
};

const SpecOptions = ({ title, subtitle, cards }: SpecOptionProps) => {
  const [currentOption, setCurrentOption] = useState(cards[0].title);
  const addActiveClass = (value: string) => {
    if (currentOption === value) {
      return "border-blue";
    }
    return "border-darkGray";
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentOption(e.target.value);
  };
  const getPrice = (price: number) => {
    if (!price) {
      return "";
    }
    return `+ RM ${price.toLocaleString("en", { minimumFractionDigits: 2 })}`;
  };
  return (
    <section className="flex w-full flex-col items-start gap-4">
      <h3>{title}</h3>
      <p className="cursor-pointer text-xs text-blue hover:underline">
        {subtitle}
      </p>
      <div className="flex flex-col gap-2">
        {cards?.map((card) => {
          return (
            <div className="flex" key={card.title}>
              <label
                htmlFor={card.title}
                className={`${addActiveClass(card.title)} rounded-xl border-2  p-4 font-semibold tracking-wide`}
              >
                {card.title}
                <p className="font-normal tracking-normal">
                  {getPrice(card.price)}
                </p>
              </label>
              <input
                onChange={handleFilterChange}
                type="radio"
                name={title}
                id={card.title}
                className="hidden"
                value={card.title}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SpecOptions;
