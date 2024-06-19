const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-6 px-6 py-10">
      <h1 className="font-title text-center text-3xl tracking-wide">
        Choose your new MacBook Pro.
      </h1>
      <div className="flex flex-col items-center">
        <p>Have questions about buying a Mac?</p>
        <a href="#" className="text-blue hover:underline">
          Chat with a Mac Specialist
        </a>
      </div>
    </section>
  );
};

export default Hero;
