import { ChangeEvent, useState } from "react";

type InBoxCarouselProps = {
  collection: any;
};

const InBoxCarousel = ({ collection }: InBoxCarouselProps) => {
  const options = ["0", "1", "2"];
  const [selectedImage, setSelectedImage] = useState("0");
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedImage(e.target.value);
  };
  const handleDarkenOption = (option: string) => {
    if (option === selectedImage) {
      return true;
    }
    return false;
  };

  return (
    <section className="flex w-full flex-col items-center gap-4 p-4 md:p-0">
      <h3 className="font-title text-3xl md:text-6xl md:mb-10 md:pt-32">What's in the box</h3>
      <article className="flex w-full flex-col items-center gap-4 md:hidden">
        <div
          className={`${Number(selectedImage) === 1 ? "bg-[center_top_-15rem]" : "bg-cover bg-center"} h-64 w-full bg-[#FAFAFA] bg-no-repeat`}
          style={{
            backgroundImage: `url(${collection[Number(selectedImage)].image})`,
          }}
        ></div>
        <p>{collection[Number(selectedImage)].name}</p>
      </article>
      <div className="flex items-center justify-center gap-4 md:hidden">
        {options.map((option) => {
          return (
            <div key={option}>
              <label
                htmlFor={option}
                className={`${handleDarkenOption(option) ? "bg-black" : "bg-darkGray"} flex h-2 w-2 cursor-pointer rounded-full`}
              ></label>
              <input
                type="radio"
                name="carousel"
                id={option}
                onChange={handleImageChange}
                value={option}
                className="hidden"
              />
            </div>
          );
        })}
      </div>
      <div className="hidden md:flex w-screen bg-[#FAFAFA] justify-center">
        {collection.map((el: any) => {
          return <img src={el.image} alt="" />;
        })}
      </div>
    </section>
  );
};

export default InBoxCarousel;
