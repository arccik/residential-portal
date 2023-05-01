import { useRouter } from "next/router";
import { FC } from "react";
import { api } from "~/utils/api";
import type { Announce } from "~/types/Annouce";
import { MdSearch } from "react-icons/md";
import Table from "~/components/Table/Table";

const Announcement: FC = () => {
  const router = useRouter();
  const { data, isError, isLoading } =
    api.announce.getAll.useQuery<Announce[]>();
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Data not found</p>;
  if (isError) return <p>Something went wrong....</p>;

  return (
    <>
      <div className="relative m-5 flex justify-end">
        <button
          className="btn-primary btn mr-10 rounded"
          onClick={() => router.push("announcement/new")}
        >
          <i className="fa-solid fa-plus"></i>
          Add New
        </button>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input-bordered input"
            />
            <button className="btn-square btn">
              <MdSearch className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full text-center">
        <p className="text-lg first-letter:font-bold">
          Welcome to Announcements module
        </p>

        {data?.length ? (
          <div className="w-full overflow-x-auto">
            <Table data={data} />
          </div>
        ) : (
          <p className="mt-10 text-lg first-letter:font-bold">
            Add new Annoucement
          </p>
        )}
      </div>
    </>
  );
};

export default Announcement;
