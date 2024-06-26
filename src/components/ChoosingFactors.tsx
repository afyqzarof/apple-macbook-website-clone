import m3 from "../assets/icons/m3.png";
import m3pro from "../assets/icons/m3pro.png";
import m3max from "../assets/icons/m3max.png";
import memoryChip from "../assets/icons/memory-chip.png";
import chipDetails from "../data/chip-details.json";

const ChoosingFactors = () => {
  const icons = [m3, m3pro, m3max, memoryChip];
  return (
    <section className="p-10 flex justify-center">
      <article className="flex flex-col gap-4 rounded-2xl bg-gray px-4 py-8 md:max-w-[90rem]">
        <h4 className="text-center text-lg md:text-4xl">
          What to consider when choosing your MacBook Pro.
        </h4>
        <p className="text-center text-sm md:text-base">
          Configure your laptop on the next step.
        </p>
        <div className="mt-12 flex flex-col gap-12 md:flex-row">
          {chipDetails.map((chip, index) => {
            return (
              <article key={chip.title} className="flex flex-col gap-4">
                <img src={icons[index]} alt={chip.title} className="w-8" />
                <h5>{chip.title}</h5>
                <p className="text-sm">{chip.description}</p>

                <ul className="flex list-disc flex-col gap-4 pl-4">
                  {chip.features.map((feature) => {
                    return (
                      <li key={feature} className="text-sm">
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="mt-4 flex w-full flex-col justify-center gap-0 md:flex-row md:gap-4">
          <p className="text-sm">Have questions about buying a Mac?</p>
          <p className="cursor-pointer text-xs text-blue hover:underline">
            Chat with a Mac Specialist.
          </p>
        </div>
      </article>
    </section>
  );
};

export default ChoosingFactors;
