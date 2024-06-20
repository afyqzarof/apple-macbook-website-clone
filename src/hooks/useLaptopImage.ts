import laptopSilver from "../assets/images/laptop-silver.jpeg";
import laptopGray from "../assets/images/laptop-space-gray.jpeg";
import laptopBlack from "../assets/images/laptop-black.jpeg";
const useLaptopImage = () => {
  const laptopImages = {
    spaceGray: laptopGray,
    silver: laptopSilver,
    black: laptopBlack,
  };
  const handleLaptopImage = (color: string) => {
    switch (color) {
      case "spaceGray":
        return laptopImages.spaceGray;
      case "silver":
        return laptopImages.silver;
      case "black":
        return laptopImages.black;
      default:
        return "";
    }
  };

  return handleLaptopImage;
};

export { useLaptopImage };
