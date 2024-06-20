import compareMacs from "../assets/images/mac-compare.png";

const CompareMacs = () => {
  return (
    <section className="flex flex-col items-center bg-gray py-4">
      <h4 className="p-4 text-2xl">Compare Mac Models</h4>
      <p className="cursor-pointer text-xs text-blue hover:underline">
        Choose the best Mac for you
      </p>
      <div
        style={{ backgroundImage: `url(${compareMacs})` }}
        className="h-[30rem] w-full bg-cover bg-left mb-10"
      ></div>
    </section>
  );
};

export default CompareMacs;
