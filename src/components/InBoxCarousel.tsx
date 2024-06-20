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
    <section className="flex w-full flex-col items-center gap-4 p-4">
      <h3 className="font-title text-3xl">What's in the box</h3>
      <article className="flex w-full flex-col items-center gap-4">
        <div
          className={`${Number(selectedImage) === 1 ? "bg-[center_top_-15rem]" : "bg-center bg-cover"} h-64 w-full bg-no-repeat bg-[#FAFAFA]`}
          style={{
            backgroundImage: `url(${collection[Number(selectedImage)].image})`,
          }}
        ></div>
        <p>{collection[Number(selectedImage)].name}</p>
      </article>
      <div className="flex items-center justify-center gap-4">
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
    </section>
  );
};

export default InBoxCarousel;
