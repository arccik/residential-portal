import { FC } from "react";
import {
  BsMessenger,
  BsHouse,
  BsBell,
  BsWallet,
  Bs0SquareFill,
} from "react-icons/bs";

const Widgets: FC = () => {
  return (
    <ul className="menu rounded-box menu-horizontal fixed  left-2 hidden bg-base-100 p-2 text-xl md:block">
      <li>
        <a>
          <BsMessenger />
        </a>
      </li>
      <li>
        <a>
          <BsHouse />
        </a>
      </li>
      <li>
        <a>
          <Bs0SquareFill />
        </a>
      </li>
      <li>
        <a>
          <BsBell />
        </a>
      </li>
      <li>
        <a>
          <BsWallet />
        </a>
      </li>
    </ul>
  );
};

export default Widgets;
