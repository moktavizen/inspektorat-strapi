import { useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import {
  MagnifyingGlassIcon,
  FolderArrowDownIcon,
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import BASE_URL from "../services/apiConfig";

const DataTableDocs = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: "NAMA DOKUMEN",
        accessor: "attributes.namaDokumen",
        Cell: ({ value }) => {
          const truncatedValue =
            value.length > 64 ? value.slice(0, 63) + "..." : value;
          return <span>{truncatedValue}</span>;
        },
      },
      {
        Header: "TANGGAL UPLOAD",
        accessor: "attributes.createdAt",
        Cell: ({ value }) => {
          const date = new Date(value);
          const options = { day: "numeric", month: "long", year: "numeric" };
          return <span>{date.toLocaleDateString("id-ID", options)}</span>;
        },
      },
      {
        Header: "UNDUH",
        accessor: "attributes.fileDokumen.data.attributes.url",
        Cell: ({ value }) => (
          <a
            href={`${BASE_URL}${value}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary block w-fit"
          >
            <FolderArrowDownIcon className="w-6 h-6" />
          </a>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageCount,
    gotoPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter } = state;

  return (
    <div className="shadow rounded-xl p-4 text-sm md:text-base bg-white mt-7 md:mt-9">
      <div className="flex items-center justify-between mb-4">
        <div className="relative flex w-64">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-primary" />
          </span>
          <input
            type="text"
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary "
          />
        </div>
      </div>
      <div className="overflow-auto rounded-lg border border-gray">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200"
        >
          <thead className="bg-gray-50">
            {headerGroups.map((headerGroup, headerGroupIndex) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroupIndex}>
                {headerGroup.headers.map((column, columnIndex) => (
                  <th
                    {...column.getHeaderProps()}
                    key={columnIndex}
                    className="p-4 text-left font-medium text-neutral800 uppercase whitespace-nowrap"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-white divide-y divide-gray-200"
          >
            {page.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={rowIndex}>
                  {row.cells.map((cell, cellIndex) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={cellIndex}
                        className="p-4 whitespace-nowrap text-gray-500"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex gap-4 items-center justify-between mt-4">
        <div>
          <div className=" text-gray-500">
            Menampilkan{" "}
            <span className="whitespace-nowrap">
              <span className="font-medium">
                {pageIndex * state.pageSize + 1}
              </span>{" "}
              -{" "}
              <span className="font-medium">
                {Math.min((pageIndex + 1) * state.pageSize, rows.length)}
              </span>{" "}
              dari <span className="font-medium">{rows.length}</span>
            </span>
          </div>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px "
            aria-label="Pagination"
          >
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white  font-medium  hover:bg-gray-50 text-primary"
            >
              <span className="sr-only">First</span>
              <ChevronDoubleLeftIcon className="h-4 w-4" />
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white  font-medium  hover:bg-gray-50 text-primary"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white  font-medium  hover:bg-gray-50 text-primary"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-4 w-4" />
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white  font-medium  hover:bg-gray-50 text-primary"
            >
              <span className="sr-only">Last</span>
              <ChevronDoubleRightIcon className="h-4 w-4" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DataTableDocs;
