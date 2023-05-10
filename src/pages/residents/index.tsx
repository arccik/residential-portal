import Link from "next/link";
import { FC } from "react";
import Table from "~/components/Table/Table";
import { newResidentLink } from "~/links/list";
import { NextAuthComponentType } from "~/types/AuthComponent";
import { api } from "~/utils/api";

const Residents: NextAuthComponentType = () => {
  const {
    data: residentsData,
    isLoading,
    isSuccess,
  } = api.residents.getAll.useQuery();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <h1 className="mb-5 text-4xl font-thin">Residents Database</h1>
        <div className="right-0">
          <Link href={newResidentLink} prefetch={false}>
            <button className="btn-primary btn-xs btn sm:btn-sm md:btn-md lg:btn-lg">
              Add New
            </button>
          </Link>
          <button className="btn-xs btn sm:btn-sm md:btn-md lg:btn-lg">
            Buy Jack Daniels
          </button>
        </div>
      </div>
      <div className=" w-full overflow-scroll">
        <div>
          <Table data={residentsData} />
        </div>
      </div>
    </>
  );
};

Residents.auth = true;

export default Residents;
