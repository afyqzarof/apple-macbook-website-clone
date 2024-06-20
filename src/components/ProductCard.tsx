import chevronBlue from "../assets/icons/chevron-blue.svg";
import { ChangeEvent, useState } from "react";
import { useLaptopImage } from "../hooks/useLaptopImage";
import { useChipImage } from "../hooks/useChipImage";
import TruckSvg from "./TruckSvg";

type ProductCardProps = {
  specs: string[];
  infos: string[];
  price: number;
  colors: string[];
  chip: string;
  isFourteenInch: boolean;
};
const ProductCard = ({
  specs,
  infos,
  price,
  colors,
  chip,
  isFourteenInch,
}: ProductCardProps) => {
  const handleLaptopImage = useLaptopImage();
  const getChipImage = useChipImage();
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const instalmentPrice = price / 24;

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
  };

  const handleOutline = (color: string) => {
    if (selectedColor === color) {
      return "outline-blue";
    }
    return "outline-none";
  };

  return (
    <article className="flex flex-col rounded-2xl bg-gray p-6 max-w-96">
      <img
        src={handleLaptopImage(selectedColor)}
        alt="laptop"
        className={`${isFourteenInch ? "w-72" : "w-96"} self-center`}
      />
      <h3 className="text-xs">Space Grey</h3>
      <div className="my-4 flex gap-3">
        {colors.map((color) => {
          return (
            <div className="h-5 w-5" key={color}>
              <label
                className={`bg-${color} ${handleOutline(color)} flex h-5 w-5 cursor-pointer rounded-full outline outline-2 outline-offset-2`}
                htmlFor={color}
              ></label>
              <input
                type="radio"
                name="color"
                id={color}
                className="hidden"
                onChange={handleColorChange}
                value={color}
              />
            </div>
          );
        })}
      </div>
      <img src={getChipImage(chip)} alt="m3 chip" className="w-10" />
      <div className="mt-4">
        {specs.map((spec) => (
          <p className="font-title text-lg tracking-wide" key={spec}>
            {spec}
          </p>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-2">
        {infos.map((info) => {
          return (
            <p className="text-xs" key={info}>
              {info}
            </p>
          );
        })}
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <p className="font-title text-2xl tracking-wide">
          RM {price.toLocaleString("en", { minimumFractionDigits: 2 })}
        </p>
        <p className="">or</p>
        <p className="font-title text-2xl tracking-wide">
          RM {instalmentPrice.toFixed(2)}/mo.per month for 24 mo.*
        </p>
        <div className="flex items-center gap-2">
          <p className="cursor-pointer text-xs text-blue hover:underline">
            Explore monthly instalment options
          </p>
          <img src={chevronBlue} alt="chevron" className="h-3" />
        </div>
        <div className="mt-8 flex flex-col gap-1">
          <p className="text-sm font-semibold">Add a trade-in</p>
          <p className="text-sm">
            Get credit towards a new Mac when you trade in your eligible
            computer. Or recycle it for free.**
          </p>
          <p className="cursor-pointer text-xs text-blue hover:underline">
            Get started
          </p>
        </div>
        <button className="my-4 rounded-lg bg-blue py-1 text-sm text-white">
          Select
        </button>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">Need a moment?</p>
          <p className="text-sm">
            Keep all your selections by saving this device to Your Saves, then
            come back anytime and pick up right where you left off.
          </p>
          <p className="cursor-pointer text-xs text-blue hover:underline">
            Save for later
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <TruckSvg />
          <div>
            <p className="text-sm font-semibold">Delivery:</p>
            <p className="text-sm">In Stock</p>
            <p className="text-sm">Free Shipping</p>
            <p className="cursor-pointer text-xs text-blue hover:underline">
              Get delivery dates
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
