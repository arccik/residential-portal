import Link from "next/link";
import { FC } from "react";
import { MdAnnouncement, MdBook, MdKey, MdAddBox } from "react-icons/md";
import {
  annoucementLink,
  residentsLink,
  deliveryLink,
  keyManagementLink,
} from "~/links/list";

const SquareMenuGrid: FC = () => {
  return (
    <div className="hidden md:block">
      <div className="divider">Widgets</div>
      <div className="fixed grid grid-cols-1 gap-4 md:grid-cols-2">
        <Link href={annoucementLink}>
          <button className="btn h-40 w-40 rounded hover:bg-slate-600">
            <MdAnnouncement className="text-5xl" />
            <p>Announcement</p>
          </button>
        </Link>
        <Link href={residentsLink}>
          <button className="btn h-40 w-40 rounded hover:bg-slate-600 ">
            <MdBook className="text-5xl" />
            <p>Resident Database</p>
          </button>
        </Link>
        <Link href={deliveryLink}>
          <button className="btn h-40 w-40  rounded hover:bg-slate-600 ">
            <MdAddBox className="text-5xl" />
            <p>Add A Delivery</p>
          </button>
        </Link>
        <Link href={keyManagementLink}>
          <button className="btn h-40 w-40  rounded hover:bg-slate-600 ">
            <MdKey className="text-5xl" />
            <p>Key Management</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SquareMenuGrid;
