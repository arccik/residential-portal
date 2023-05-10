import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AnnounceCreateInput } from "~/types/Annouce";
import { api } from "~/utils/api";
import { AnnouncementCreateInputObjectSchema } from "../../../prisma/generated/schemas";
import Alert from "~/components/widgets/Alert";
import { AnnouncementValidation } from "~/validations/announcement";
import { useRouter } from "next/router";

import DateSelectRange from "~/components/Announcement/DateSelectRange";
import { NextAuthComponentType } from "~/types/AuthComponent";

const NewAnnouncement: NextAuthComponentType = () => {
  const { mutate } = api.announce.create.useMutation<
    typeof AnnouncementCreateInputObjectSchema
  >({});
  const router = useRouter();

  const {
    register,
    unregister,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
    watch,
  } = useForm<AnnounceCreateInput>({
    resolver: zodResolver(AnnouncementValidation),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      router.push("/announcements");
    }
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
                className={
                  "input-bordered input mb-5 w-full max-w-xl " +
                  (errors.subject ? "border-red-500" : "")
                }
              />
              <textarea
                {...register("text")}
                placeholder="Type here"
                className={`textarea-bordered textarea textarea-lg mt-4 w-full max-w-xl ${
                  errors["text"] ? "border-red-500" : ""
                }`}
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
                <DateSelectRange register={register} errors={errors} />
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
          {errors &&
            Object.entries(errors).map(([key, value]) => {
              if (value?.message)
                return <Alert key={key} msg={value?.message} />;
            })}
          <button
            type="submit"
            disabled={Object.entries(errors).length > 0}
            className="btn-primary btn-wide btn  justify-center md:m-0"
          >
            Post Announcement
          </button>
          {JSON.stringify(watch())}
        </form>
      </div>
    </>
  );
};

NewAnnouncement.auth = true;
export default NewAnnouncement;
