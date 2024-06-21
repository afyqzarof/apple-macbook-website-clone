type TermsProps = {
  terms: string[];
};

const Terms = ({ terms }: TermsProps) => {
  return (
    <div className="bg-gray">
      <section className="flex flex-col gap-4 bg-gray p-4 lg:m-auto lg:max-w-[1620px]">
        {terms.map((term) => {
          return <p className="text-xs">{term}</p>;
        })}
      </section>
    </div>
  );
};

export default Terms;
