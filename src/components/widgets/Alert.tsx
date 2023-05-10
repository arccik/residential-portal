import { MdErrorOutline } from "react-icons/md";

const Alert = ({ msg }: { msg: string }) => {
  return (
    <div className="alert alert-error mb-2 mt-2 shadow-lg">
      <div>
        <MdErrorOutline />
        <span>{msg}</span>
      </div>
    </div>
  );
};

export default Alert;
