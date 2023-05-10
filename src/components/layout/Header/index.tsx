import Link from "next/link";
import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <div className="w-full-10px navbar rounded-box m-1 mx-auto bg-stone-200">
      <div className="flex-1 px-2 lg:flex-none">
        <Link href="/" className="btn-ghost btn text-xl normal-case">
          yXa
        </Link>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
