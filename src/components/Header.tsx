import appleLogo from "../../public/apple-logo.svg";
import searchIcon from "../assets/icons/search.svg";
import menuIcon from "../assets/icons/menu.svg";
import basketIcon from "../assets/icons/basket.svg";

const Header = () => {
  return (
    <header className="flex h-10 justify-between p-2 items-center">
      <img src={appleLogo} alt="apple logo" className="w-5" />
      <section className="flex items-center justify-between gap-6">
        <img src={searchIcon} alt="search" className="w-5" />
        <img src={basketIcon} alt="basket" className="w-5" />
        <img src={menuIcon} alt="menu" className="w-5" />
      </section>
    </header>
  );
};

export default Header;
