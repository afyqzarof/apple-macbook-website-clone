import { ChangeEvent, useState } from "react";

type SpecOptionProps = {
  title: string;
  subtitle: string;
  cards: Card[];
  setPrice: (price: number) => void;
};
type Card = {
  title: string;
  price: number;
};

const SpecOptions = ({ title, subtitle, cards, setPrice }: SpecOptionProps) => {
  const [currentOption, setCurrentOption] = useState(cards[0].price);
  const addActiveClass = (value: string) => {
    if (currentOption === Number(value)) {
      return "border-blue";
    }
    return "border-darkGray";
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const price = Number(e.target.value);
    setCurrentOption(price);
    setPrice(price);
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
      <div className="flex w-full flex-col gap-2">
        {cards?.map((card) => {
          return (
            <div className="flex w-full" key={card.title}>
              <label
                htmlFor={card.title}
                className={`${addActiveClass(card.price)} w-full rounded-xl border-2 p-4 font-semibold tracking-wide`}
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
                value={card.price}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SpecOptions;
