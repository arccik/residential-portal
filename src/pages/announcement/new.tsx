import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AnnounceCreateInput } from "~/types/Annouce";
import { api } from "~/utils/api";

const NewAnnouncement: FC = () => {
  const { mutate } = api.announce.create.useMutation<AnnounceCreateInput>({});
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<AnnounceCreateInput>();

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful]);
  const onSubmitHandler = (data: AnnounceCreateInput) => {
    const response = mutate(data);
    console.log("On Submit reponse :>>> ", response);
  };
  return (
    <>
      <div className="container  md:mx-auto">
        <h1 className="mb-5 text-4xl font-thin">Post Announcement</h1>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="items-right grid grid-flow-row grid-cols-1  md:grid-cols-2 md:gap-10">
            <div>
              <input
                {...register("subject")}
                className="input-bordered input mb-5 w-full max-w-xl"
              />
              <textarea
                {...register("text")}
                placeholder="Type here"
                className="textarea-bordered textarea textarea-lg mt-4 w-full max-w-xl"
              ></textarea>
            </div>
            <div>
              <input
                type="text"
                placeholder="imageUrl"
                {...register("image")}
                className="input-bordered input mb-5 w-full max-w-xs"
              />
              <div className="btn-group btn-group-vertical mt-10 w-full gap-5">
                <button type="button" className="btn">
                  Select Date
                </button>
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
                <button type="button" className="btn">
                  Email Users
                </button>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">
                      Notify Residents by email
                    </span>
                    <input
                      type="checkbox"
                      {...register("sendingEmail")}
                      className="toggle"
                    />
                  </label>
                </div>
                <button type="button" className="btn">
                  Filter
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn-primary btn-wide btn  justify-center md:m-0"
          >
            Post Announcement
          </button>
        </form>
      </div>
    </>
  );
};

export default NewAnnouncement;
