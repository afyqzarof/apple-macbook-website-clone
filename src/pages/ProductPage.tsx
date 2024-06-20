import { useParams } from "react-router-dom";
import laptopDetails from "../data/laptop-details.json";
import laptopImg from "../assets/images/macbook-page.jpeg";
import SpecOptions from "../components/SpecOptions";

const ProductPage = () => {
  const { id } = useParams();
  const laptopDetail = laptopDetails.fourteenInch.find(
    (element) => element.id === id,
  );

  return (
    <>
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
        />
      </main>
    </>
  );
};

export default ProductPage;
