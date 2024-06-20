import appleLogo from "/apple-logo.svg";
import searchIcon from "../assets/icons/search.svg";
import menuIcon from "../assets/icons/menu.svg";
import basketIcon from "../assets/icons/basket.svg";
import { Link } from "react-router-dom";
import headerLinks from "../data/header-items.json";

const Header = () => {
  return (
    <header className="flex h-10 items-center justify-between p-2 lg:m-auto lg:max-w-[1820px]">
      <Link to="/">
        <img src={appleLogo} alt="apple logo" className="w-5" />
      </Link>
      <nav className="hidden flex-1 md:block">
        <ul className="w-ful flex justify-around">
          {headerLinks.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </nav>
      <nav className="flex items-center justify-between gap-6">
        <img src={searchIcon} alt="search" className="w-5" />
        <img src={basketIcon} alt="basket" className="w-5" />
        <img src={menuIcon} alt="menu" className="w-5 md:hidden" />
      </nav>
    </header>
  );
};

export default Header;
