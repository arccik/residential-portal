import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <div className="navbar rounded-box m-1 mb-5 bg-base-300">
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
