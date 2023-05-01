import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import { api } from "~/utils/api";
import { KeyManagement } from "@prisma/client";

const columns = [
  { key: "name", name: "Name" },
  { key: "property.name", name: "Property" },
  { key: "company", name: "Company" },
  { key: "phoneNumber", name: "Phone Number" },
  { key: "type", name: "Once Or Periodically" },
  { key: "outDays", name: "Out For " },
  { key: "periodic", name: "periodically" },
  { key: "expireDate", name: "Expires on date" },
  { key: "notes", name: "Notes" },
  { key: "signature", name: "Signature" },
];

const rows = [
  { id: 0, title: "Example" },
  { id: 1, title: "Demo" },
];

const KeyManagement = () => {
  const { data, status } = api.keyManagement.getAll.useQuery<KeyManagement>();
  if (status === "loading") return <div>Loading...</div>;
  if (status !== "success") return <p>No Data</p>;

  console.log("Key Manager : ", data);
  return (
    <>
      <h1 className="m-5 mb-5 text-4xl font-thin">Key Management</h1>
      <div className="m-auto">
        <DataGrid
          columns={columns}
          rows={data}
          className="rdg-light bg-transparent"
        />
      </div>
    </>
  );
};

export default KeyManagement;
