import { Table } from "@tanstack/react-table";
import React from "react";

type Props = { table: Table<any> };

export const Dump = ({ table }: Props) => {
  return (
    <>
      <div>{table.getPrePaginationRowModel().rows.length} Rows</div>
      <pre>{JSON.stringify(table.getState(), null, 2)}</pre>
    </>
  );
};
