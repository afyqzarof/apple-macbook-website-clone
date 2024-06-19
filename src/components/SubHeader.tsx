import chevronIcon from "../assets/icons/chevron.svg";
const SubHeader = () => {
  return (
    <section className="border-darkGray border-b-2 p-2 text-lg flex justify-between tracking-wide">
      <h1 className="font-title ">
        MacBook Pro
      </h1>
      <img src={chevronIcon} alt="chevron" />
    </section>
  );
};

export default SubHeader;
