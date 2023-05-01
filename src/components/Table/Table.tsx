import { Announce } from "~/types/Annouce";

const Table = ({ data }: any) => {
  console.log("Table : ?>>>> ", data);
  const headerData =
    data[0] && (Object.keys(data[0]) as Array<keyof (typeof data)[0]>);
  const headerTitles = headerData?.filter((value: string) => value !== "id");
  return (
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          {headerTitles?.map((title: string) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row: Announce, index: number) => (
          <tr key={row.id}>
            <th>{++index}</th>
            {headerTitles?.map((title: keyof Announce) => (
              <td key={title}>
                <p className="w-80 truncate">{row[title]?.toString()}</p>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
