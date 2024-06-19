type SizeBtnProps = {
  isFourteenInch: boolean;
  setIsFourteenInch: (sate: boolean) => void;
};
const SizeBtn = ({ isFourteenInch, setIsFourteenInch }: SizeBtnProps) => {
  return (
    <nav className="flex justify-center gap-2 p-2">
      <button
        className={`${isFourteenInch ? "border-blue" : "border-darkGray"} font-title rounded-l-2xl border-2 px-12 py-8 text-lg`}
        type="button"
        onClick={() => {
          setIsFourteenInch(true);
        }}
      >
        14-inch
      </button>
      <button
        className={`${isFourteenInch ? "border-darkGray" : "border-blue"} font-title rounded-r-2xl border-2 px-12 py-8 text-lg`}
        type="button"
        onClick={() => {
          setIsFourteenInch(false);
        }}
      >
        16-inch
      </button>
    </nav>
  );
};

export default SizeBtn;
