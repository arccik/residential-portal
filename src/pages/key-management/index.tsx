import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import { api } from "~/utils/api";
import { KeyManagement } from "@prisma/client";
import { NextAuthComponentType } from "~/types/AuthComponent";
import { columns } from "./columns";

const KeyManagement: NextAuthComponentType = () => {
  const { data, status } = api.keyManagement.getAll.useQuery<KeyManagement>();
  if (status === "loading") return <div>Loading...</div>;
  if (status !== "success") return <p>No Data</p>;

  console.log("Key Manager : ", data);
  return (
    <>
      <div className="m-10 grid grid-flow-row grid-cols-2">
        <div className="row-start-2 row-end-3">
          <h1 className="text-4xl font-thin">Key Management</h1>
        </div>
        <div className="row-span-2">
          <button className="btn-primary btn">add new</button>
          <button className="btn-primary btn">Delete</button>
        </div>
      </div>
      <DataGrid
        columns={columns}
        rows={data}
        className="rdg-light rounded-lg bg-transparent"
      />
    </>
  );
};
KeyManagement.auth = true;

export default KeyManagement;
