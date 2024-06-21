import laptopDetails from "../data/laptop-details.json";

type Size = "fourteenInch" | "sixteenInch";

const useGetLaptopSize = (currentOption: string) => {
  const getDetails = (size: Size) => {
    if (currentOption === "all") {
      return laptopDetails[size];
    }
    return laptopDetails[size].filter(
      (detail) => detail.chip === currentOption,
    );
  };

  return getDetails;
};

export { useGetLaptopSize };
