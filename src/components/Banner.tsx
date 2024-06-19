import chevronBlue from "../assets/icons/chevron-blue.svg";
const Banner = () => {
  return (
    <section className="bg-gray px-16 py-4">
      <p className="text-center text-sm">
        Pay 0% interest for up to 24 months. Terms apply.{" "}
        <a href="#" className="text-blue hover:underline">
          Learn more
        </a>
        <img src={chevronBlue} alt="chevron" className="ml-1 inline h-2" />
      </p>
    </section>
  );
};

export default Banner;
