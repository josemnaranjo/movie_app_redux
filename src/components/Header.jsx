import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className="bg-cyan-900 w-screen p-6 flex justify-between items-center drop-shadow-xl">
      <Link to="/">
        <h1 className="text-2xl">Movie App</h1>
      </Link>
      <BsPersonCircle className="h-10 w-10" />
    </div>
  );
};

export default Header;
