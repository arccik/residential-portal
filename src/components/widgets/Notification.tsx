import { MdClose } from "react-icons/md";

const Notification = ({ text }: { text: string }) => {
  return (
    <div className="card m-10 ml-0 w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn-square btn-sm btn">
            <MdClose className="text-xl" />
          </button>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Notification;
