import chevronIcon from "../assets/icons/chevron.svg";
const SubHeader = () => {
  return (
    <div className="w-full border-b-2 border-darkGray">
      <section className="flex justify-between p-2 text-lg tracking-wide lg:m-auto lg:max-w-[1620px]">
        <h2 className="font-title">MacBook Pro</h2>
        <img src={chevronIcon} alt="chevron" />
      </section>
    </div>
  );
};

export default SubHeader;
