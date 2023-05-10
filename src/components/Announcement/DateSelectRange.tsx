import { UseFormRegister, UseFormUnregister } from "react-hook-form";
import { AnnounceCreateInput } from "~/types/Annouce";
import { useEffect, useState } from "react";

const DateSelectRange = ({
  register,
  errors,
}: {
  register: UseFormRegister<AnnounceCreateInput>;
  errors: any;
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (errors.startDate || errors.endDate) {
      setOpen(true);
    }
  }, []);

  const btnText = open ? "Cancel" : "Show On Homa Page";
  return (
    <>
      <button
        type="button"
        className="btn"
        onClick={() => setOpen((prev) => !prev)}
      >
        {btnText}
      </button>

      {open && (
        <div className="grid grid-cols-2">
          <div className="grid-cols-2">
            <label htmlFor="startDate" className="m-0">
              Start Date
            </label>
            <input
              type="date"
              {...register("startDate", { valueAsDate: true })}
              className="input-bordered input mb-5 w-full max-w-xs"
            />
          </div>
          <div className="grid-cols-2">
            <label htmlFor="endDate" className="m-0">
              End Date
            </label>
            <input
              type="date"
              {...register("endDate", { valueAsDate: true })}
              className="input-bordered input mb-5 w-full max-w-xs"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DateSelectRange;
