import m3 from "../assets/icons/m3.png";
import m3max from "../assets/icons/m3max.png";
import m3pro from "../assets/icons/m3pro.png";

const useChipImage = () => {
  const chipImages = {
    m3,
    m3max,
    m3pro,
  };
  const getChipImage = (chip: string) => {
    switch (chip) {
      case "m3":
        return chipImages.m3;
      case "m3max":
        return chipImages.m3max;
      case "m3pro":
        return chipImages.m3pro;
      default:
        return "";
    }
  };

  return getChipImage;
};

export { useChipImage };
