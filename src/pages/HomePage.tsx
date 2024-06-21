import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import ChoosingFactors from "../components/ChoosingFactors";
import CompareMacs from "../components/CompareMacs";
import Terms from "../components/Terms";
import tncMain from "../data/tnc-main.json";
import AppleCare from "../components/AppleCare";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <ChoosingFactors />
      <CompareMacs />
      <AppleCare />
      <Terms terms={tncMain} />
    </>
  );
};

export default HomePage;
