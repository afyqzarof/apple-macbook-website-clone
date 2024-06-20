import terms from "../data/tnc-main.json";

const Terms = () => {
  return (
    <section className="bg-gray p-4 flex flex-col gap-4">
      {terms.map((term) => {
        return <p className="text-xs">{term}</p>;
      })}
    </section>
  );
};

export default Terms;
