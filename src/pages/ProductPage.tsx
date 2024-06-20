import { useParams } from "react-router-dom";
import laptopDetails from "../data/laptop-details.json";
import laptopImg from "../assets/images/macbook-page.jpeg";
import SpecOptions from "../components/SpecOptions";
import { formatPrice } from "../utils/formatPrice";
import { useState } from "react";

const ProductPage = () => {
  const [chipPrice, setChipPrice] = useState(0);
  const [memoryPrice, setMemoryPrice] = useState(0);
  const [ssdPrice, setSsdPrice] = useState(0);
  const { id } = useParams();
  const laptopDetail = laptopDetails.fourteenInch.find(
    (element) => element.id === id,
  );
  const price = laptopDetail?.price || 0;
  const fullPrice = price + chipPrice + memoryPrice + ssdPrice;
  return (
    <>
      <article className="sticky top-0 flex justify-between bg-gray p-4">
        <div className="flex flex-col gap-2">
          <p className="font-title tracking-wide">
            {formatPrice(fullPrice)} or
          </p>
          <p className="font-title tracking-wide">
            {formatPrice(fullPrice / 24)}/mo. for 24mo.*
          </p>
          <p className="cursor-pointer text-xs text-blue hover:underline">
            Explore monthly instalment options
          </p>
        </div>
        <div>
          <button className="rounded-lg bg-blue px-4 py-2 text-sm text-white">
            Add to Bag
          </button>
        </div>
      </article>
      <main className="flex flex-col items-center gap-4 p-4">
        <h1 className="font-title text-2xl">
          Customise your 14‑inch MacBook Pro - Space Black
        </h1>
        <img src={laptopImg} alt="" />
        <p className="cursor-pointer text-xs text-blue hover:underline">
          View gallery
        </p>
        <div className="flex flex-col gap-4 border-b-2 border-gray pb-4">
          {laptopDetail?.pageInfo?.map((info) => {
            return (
              <p className="text-sm" key={info}>
                {info}
              </p>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 border-b-2 border-gray pb-4">
          <h4>Add a trade-in</h4>
          <p className="text-sm">
            Get credit towards a new Mac when you trade in your eligible
            computer. Or recycle it for free.**
          </p>
          <p className="cursor-pointer text-xs text-blue hover:underline">
            Get started
          </p>
        </div>
        <SpecOptions
          title="Chip (Processor)"
          subtitle="Which chip is right for you?"
          cards={laptopDetail?.pageChip || []}
          setPrice={setChipPrice}
        />
        <SpecOptions
          title="Memory"
          subtitle="How much memory is right for you?"
          cards={laptopDetail?.pageMemory || []}
          setPrice={setMemoryPrice}
        />
        <SpecOptions
          title="Storage"
          subtitle="How much storage is right for you?"
          cards={laptopDetail?.pageSsd || []}
          setPrice={setSsdPrice}
        />
      </main>
    </>
  );
};

export default ProductPage;
