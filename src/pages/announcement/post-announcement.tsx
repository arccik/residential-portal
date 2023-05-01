import { useForm } from "react-hook-form";
import { object, string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent, useEffect, useState } from "react";
import { api } from "~/utils/api";
import type { AnnounceToBeDB } from "~/types/Annouce";

const registerSchema = object({
  subject: string()
    .nonempty("Subject is required")
    .max(32, "Subject must be less than 100 characters"),
  text: string().nonempty("Text is required"),
  file: object({
    lastModified: z.number(),

    lastModifiedDate: z.number(),
    name: string(),
    size: z.number(),
    type: string(),
    webkitRelativePath: z.string(),
  }).optional(),
  startDate: z.string().transform((str) => new Date(str)),

  endDate: z.string().transform((str) => new Date(str)),
  image: z.string().optional(),
  sendingEmail: z.boolean().optional(),
  archived: z.boolean().default(false),
  filter: z.string().optional(),
});
// .refine((data) => data.password === data.passwordConfirm, {
//   path: ["passwordConfirm"],
//   message: "Passwords do not match",
// });

const RegisterPage = () => {
  const [onHomePage, setOnHomePage] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const postAnnouce = api.announce.create.useMutation<AnnounceToBeDB>({});

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<AnnounceToBeDB>({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onFileChange = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.[0]) setFile(e.currentTarget.files?.[0]);
  };

  const onSubmitHandler = (values: AnnounceToBeDB) => {
    const response = postAnnouce.mutate({
      subject: values.subject,
      text: values.text,
      image: file?.name || "none",
      startDate: values.startDate && new Date(values.startDate),
      endDate: values.endDate && new Date(values.endDate),
    });
    console.log("Posted Annouce", { response, values });
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="mb-5 text-4xl font-thin">Post Announcement</h1>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="items-right grid grid-cols-2 gap-10">
            <div>
              <input
                type="text"
                {...register("subject")}
                placeholder="subject"
                className="input-bordered input mb-5 w-full max-w-xl"
              />
              <textarea
                {...register("text")}
                placeholder="Type here"
                className="textarea-bordered textarea textarea-lg w-full max-w-xl"
              ></textarea>
            </div>
            <div>
              <input
                onChange={onFileChange}
                // {...register("file")}
                type="file"
                className="file-input w-full max-w-xs"
              />
              <button
                type="button"
                className="btn-primary btn w-full"
                onClick={() => setOnHomePage(!onHomePage)}
              >
                Show on Homepage
              </button>
              {onHomePage && (
                <div className="grid grid-cols-3 content-between gap-4">
                  <div className="text m-2 flex">
                    <div>
                      <span>From: </span>
                      <input
                        id="date"
                        type="date"
                        pattern="\d{4}-\d{2}-\d{4}"
                        // min={new Date().toISOString().split("T")[0]}
                        {...register("startDate")}
                      />
                    </div>
                    <div>
                      <span>To:</span>
                      <input
                        id="date"
                        type="date"
                        pattern="\d{4}-\d{2}-\d{4}"
                        // min={new Date().toISOString().split("T")[0]}
                        {...register("endDate")}
                      />
                    </div>
                  </div>
                </div>
              )}
              <button type="button" className="btn">
                Email Users
              </button>
              <button type="button" className="btn">
                Filter
              </button>
            </div>
          </div>
          <button type="submit" className="btn-primary btn">
            Post Announcement
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
