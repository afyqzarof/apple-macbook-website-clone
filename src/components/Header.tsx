import appleLogo from "../../public/apple-logo.svg";

const Header = () => {
  return (
    <header>
      <img src={appleLogo} alt="apple logo" className="w-16"/>
      <ul>
        <li>
          <a>Store</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
