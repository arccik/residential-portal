import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Resident } from "@prisma/client";
import { api } from "~/utils/api";
import { ResidentCreateInputObjectSchema } from "prisma/generated/schemas";

import { MdError, MdExitToApp } from "react-icons/md";
import { NextAuthComponentType } from "~/types/AuthComponent";

type ResidentInputValue = Resident | { confirmPassword: string };

const NewResident: NextAuthComponentType = () => {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
    watch,
  } = useForm<ResidentInputValue>({
    mode: "onTouched",

    // resolver: zodResolver(ResidentInputValue),
  });

  const { data: propertyList, status: propertyStatus } =
    api.property.getAll.useQuery();

  const onSubmitHandler = (values: ResidentInputValue) => {
    console.log("Submitiing L:>>>> ", values);
  };

  return (
    <>
      <div className="container m-1  md:mx-auto">
        <h1 className="mb-5 text-4xl font-thin">Create New Resident</h1>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="items-right grid grid-flow-row grid-cols-1  md:grid-cols-2 md:gap-10">
            <div>
              <select
                className="select-bordered select mb-5 w-full max-w-xs"
                {...register("title")}
              >
                <option disabled>Select Title</option>
                {["Mr", "Mrs", "Miss", "Ms", "Dr"].map((title) => (
                  <option>{title}</option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Forename"
                {...register("firstName")}
                className="input-bordered input mb-5 w-full max-w-xl"
              />
              <input
                type="text"
                {...register("lastName")}
                placeholder="Surename"
                className="input-bordered input mb-5 w-full max-w-xl"
              />
              <input
                type="text"
                {...register("email")}
                placeholder="Email"
                className="input-bordered input mb-5 w-full max-w-xl"
              />
              <input
                type="text"
                {...register("phoneNumber")}
                placeholder="Mobile Number"
                className="input-bordered input mb-5 w-full max-w-xl"
              />
            </div>
            <div>
              <select
                {...register("group")}
                className="input-primary input select-bordered select mb-5  w-full max-w-xl"
              >
                <option disabled selected>
                  Residential Status Group
                </option>
                <option value="OwnerAbsents">Owner Absent</option>
                <option value="OwnerOccupier">Owner Occupier</option>
                <option value="tenant">Tenant</option>
              </select>

              {propertyStatus === "success" && (
                <select
                  {...register("propertyId")}
                  placeholder="Property Address"
                  className="input-bordered input-info input mb-5 w-full max-w-xl"
                >
                  {propertyList.map((property) => (
                    <option key={property.id} value={property.id}>
                      {property.name}
                    </option>
                  ))}
                </select>
              )}
              <input
                type="text"
                {...register("password", {
                  required: true,
                  validate: (val: string) => {
                    if (watch("confirmPassword") != val)
                      return "Your passwords do no match";
                    return true;
                  },
                })}
                placeholder="Password"
                className="input-bordered input mb-5 w-full max-w-xl"
              />
              <div>
                <input
                  type="text"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (val: string) => {
                      if (watch("password") != val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                  placeholder="Confirm Password"
                  className="input-bordered input w-full max-w-xl"
                />
                {errors && Object.keys(errors).includes("confirmPassword") && (
                  <span className="ml-1 mt-1 flex items-center text-xs font-medium tracking-wide text-red-500">
                    Your passwords do no match
                  </span>
                )}
              </div>
            </div>
          </div>
          {errors &&
            Object.entries(errors).map(([error, msg]) => (
              <div className="alert alert-error mb-4 mt-4 shadow-lg">
                <div>
                  <MdError />
                  <span>
                    Field {error} {msg?.message?.toString()}
                  </span>
                </div>
              </div>
            ))}
          <button
            type="submit"
            className="btn-primary btn-wide btn  mt-10 justify-center md:m-0"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};
NewResident.auth = true;

export default NewResident;
