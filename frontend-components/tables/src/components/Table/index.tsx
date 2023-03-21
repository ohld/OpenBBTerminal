import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
import clsx from "clsx";
import {
  FC,
  HTMLProps,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { useVirtual } from "react-virtual";
import Chart from "../Chart";
import Select from "../Select";
import {
  downloadData,
  downloadImage,
  formatNumberMagnitude,
  fuzzyFilter,
  isEqual,
} from "../../utils/utils";
import DraggableColumnHeader from "./ColumnHeader";
import IndeterminateCheckbox from "./InderterminateCheckbox";
import DebouncedInput from "./DebouncedInput";
import Pagination from "./Pagination";
import Export from "./Export";
import Timestamp from "./Timestamp";
import FilterColumns from "./FilterColumns";
import xss from "xss";
import useLocalStorage from "../../utils/useLocalStorage";
const date = new Date();

export default function Table({ data, columns, title }: any) {
  const [advanced, setAdvanced] = useLocalStorage("advanced", false);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [fontSize, setFontSize] = useLocalStorage("fontSize", "1");
  const rtColumns = useMemo(
    () => [
      ...columns.map((column: any) => ({
        accessorKey: column,
        id: column,
        header: column,
        footer: column,
        cell: ({ row }: any) => {
          const value = row.original[column];
          const valueType = typeof value;
          const probablyDate =
            column.toLowerCase().includes("date") ||
            column.toLowerCase() === "index";
          const probablyLink =
            valueType === "string" && value.startsWith("http");

          if (probablyLink) {
            return (
              <a
                className="_hyper-link"
                href={value}
                target="_blank"
                rel="noreferrer"
              >
                {value}
              </a>
            );
          }
          if (probablyDate) {
            if (typeof value === "string") {
              return <p>{value}</p>;
            }

            try {
              let dateFormatted = new Date(value);
              // check if date is midnight UTC
              if (
                dateFormatted.getUTCHours() === 0 &&
                dateFormatted.getUTCMinutes() === 0 &&
                dateFormatted.getUTCSeconds() === 0 &&
                dateFormatted.getMilliseconds() === 0
              ) {
                dateFormatted = dateFormatted.toISOString().split("T")[0];
              } else {
                dateFormatted = dateFormatted.toISOString();
                dateFormatted =
                  dateFormatted.split("T")[0] +
                  " " +
                  dateFormatted.split("T")[1].split(".")[0];
              }

              return <p>{dateFormatted}</p>;
            } catch (e) {
              return <p>{value}</p>;
            }
          }
          if (valueType === "number") {
            const valueFormatted = formatNumberMagnitude(value);
            return (
              <p
                className={clsx("whitespace-nowrap", {
                  "text-[#16A34A]": value > 0,
                  "text-[#F87171]": value < 0,
                  "text-[#404040]": value === 0,
                })}
              >
                {value !== 0
                  ? value > 0
                    ? `${valueFormatted}`
                    : `${valueFormatted}`
                  : valueFormatted}
              </p>
            );
          } else if (valueType === "string") {
            return <div dangerouslySetInnerHTML={{ __html: xss(value) }} />;
          }
          return <p>{value}</p>;
        },
      })),
    ],
    [advanced]
  );

  const [columnOrder, setColumnOrder] = useState(
    rtColumns.map((column) => column.id as string)
  );

  const resetOrder = () =>
    setColumnOrder(columns.map((column) => column.id as string));

  const needsReorder = useMemo(() => {
    const currentOrder = columnOrder.map((columnId) => columnId);
    const defaultOrder = rtColumns.map((column) => column.id as string);
    return !isEqual(currentOrder, defaultOrder);
  }, [columnOrder, rtColumns]);

  const table = useReactTable({
    data,
    columns: rtColumns,
    defaultColumn: {
      minSize: 0,
      size: 0,
      maxSize: 20,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    /*enableColumnResizing: true,
    columnResizeMode: "onChange",
    onColumnVisibilityChange: setColumnVisibility,*/
    onColumnOrderChange: setColumnOrder,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    state: {
      sorting,
      globalFilter,
      columnOrder,
      //columnVisibility,
    },
  });

  const tableContainerRef = useRef<HTMLDivElement>(null);
  const { rows } = table.getRowModel();
  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 10,
  });

  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;

  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0;

  //const [dialog, setDialog] = useState(null);

  const visibleColumns = table.getVisibleFlatColumns();

  return (
    <>
      {/*dialog && (
        <>
          <div
            onClick={() => setDialog(null)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-filter backdrop-blur-sm"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-grey-500">
            <Chart values={dialog.values} />
          </div>
        </>
      )*/}
      <div ref={tableContainerRef} className={clsx("overflow-hidden")}>
        <div className="flex gap-2 px-6 items-end justify-between pt-4">
          <div className="flex gap-10 items-center">
            <div className="flex gap-[14px]">
              <input
                id="advanced"
                type="checkbox"
                checked={advanced}
                onChange={() => setAdvanced(!advanced)}
              />
              <label htmlFor="advanced">Advanced</label>
            </div>
            {/*advanced && (
              <DebouncedInput
                id="search"
                value={globalFilter ?? ""}
                onChange={(value) => setGlobalFilter(String(value))}
                placeholder="Search..."
              />
            )*/}
          </div>

          {advanced && (
            <div className="flex gap-10 items-end">
              {needsReorder && (
                <button onClick={() => resetOrder()} className="_btn h-10">
                  Reset Order
                </button>
              )}
              <Select
                value={fontSize}
                onChange={setFontSize}
                label="Font size"
                placeholder="Select font size"
                groups={[
                  {
                    label: "Font size",
                    items: [
                      {
                        label: "50%",
                        value: "0.5",
                      },
                      {
                        label: "75%",
                        value: "0.75",
                      },
                      {
                        label: "100%",
                        value: "1",
                      },
                      {
                        label: "125%",
                        value: "1.25",
                      },
                      {
                        label: "150%",
                        value: "1.5",
                      },
                      {
                        label: "175%",
                        value: "1.75",
                      },
                      {
                        label: "200%",
                        value: "2",
                      },
                    ],
                  },
                ]}
              />
              <FilterColumns table={table} label="Filter" />
            </div>
          )}
        </div>
        <div className="relative p-6" id="table">
          <div
            className={
              "border border-grey-200/60 bg-grey-900 rounded overflow-hidden relative z-20"
            }
          >
            <div
              className="_header gap-4 py-2 text-center text-xs flex items-center justify-between px-4"
              style={{
                fontSize: `${Number(fontSize) * 100}%`,
              }}
            >
              <div className="w-1/3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="40"
                  fill="none"
                  viewBox="0 0 64 40"
                >
                  <path
                    fill="#fff"
                    d="M61.283 3.965H33.608v27.757h25.699V19.826H37.561v-3.965H63.26V3.965h-1.977zM39.538 23.792h15.815v3.965H37.561v-3.965h1.977zM59.306 9.913v1.983H37.561V7.931h21.745v1.982zM33.606 0h-3.954v3.965H33.606V0zM25.7 3.966H0V15.86h25.7v3.965H3.953v11.896h25.7V3.966h-3.955zm0 21.808v1.983H7.907v-3.965h17.791v1.982zm0-15.86v1.982H3.953V7.931h21.745v1.982zM37.039 35.693v2.952l-.246-.246-.245-.245-.245-.247-.245-.246-.246-.246-.245-.245-.245-.247-.247-.246-.245-.246-.245-.246-.245-.246-.246-.246h-.49v3.936h.49v-3.198l.246.246.245.246.245.246.245.246.246.246.246.246.245.247.246.245.245.246.245.247.245.246.246.245.245.246h.245v-3.936h-.49zM44.938 37.17h-.491v-1.477h-2.944v3.937h3.93v-2.46h-.495zm-2.944-.246v-.739h1.962v.984h-1.962v-.245zm2.944.984v1.23h-2.944V37.66h2.944v.247zM52.835 37.17h-.49v-1.477h-2.946v3.937h3.925v-2.46h-.489zm-2.944-.246v-.739h1.963v.984h-1.965l.002-.245zm2.944.984v1.23H49.89V37.66h2.946v.247zM29.174 35.693H25.739v3.936H29.663v-.491H26.229v-.984h2.943v-.493H26.229v-1.476h3.434v-.492h-.489zM13.37 35.693H9.934v3.937h3.925v-3.937h-.49zm0 .738v2.709h-2.945v-2.955h2.943l.001.246zM21.276 35.693h-3.435v3.937h.491v-1.476h3.434v-2.461h-.49zm0 .738v1.23h-2.944v-1.476h2.944v.246z"
                  ></path>
                </svg>
              </div>
              <p className="font-bold w-1/3">{title}</p>
              <p className="w-1/3 text-right">
                {new Intl.DateTimeFormat("en-GB", {
                  dateStyle: "full",
                  timeStyle: "long",
                }).format(date)}
              </p>
            </div>
            <table
              className="text-sm"
              style={{
                fontSize: `${Number(fontSize) * 100}%`,
              }}
              /*style={{
          width: table.getCenterTotalSize(),
        }}*/
            >
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className={clsx("!h-10 text-left")}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <DraggableColumnHeader
                          advanced={advanced}
                          key={header.id}
                          header={header}
                          table={table}
                        />
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody>
                {paddingTop > 0 && (
                  <tr>
                    <td style={{ height: `${paddingTop}px` }} />
                  </tr>
                )}
                {virtualRows.map((virtualRow, idx) => {
                  const row = rows[virtualRow.index];
                  return (
                    <tr
                      key={row.id}
                      className="!h-[64px] border-b border-grey-400"
                    >
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td
                            key={cell.id}
                            className={clsx(
                              "whitespace-nowrap overflow-auto truncate p-4",
                              {
                                "bg-grey-850": idx % 2 === 0,
                                "bg-[#202020]": idx % 2 === 1,
                              }
                            )}
                            /*style={{
                          width: cell.column.getSize(),
                        }}*/
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
                {paddingBottom > 0 && (
                  <tr>
                    <td style={{ height: `${paddingBottom}px` }} />
                  </tr>
                )}
              </tbody>
              {rows.length > 30 && visibleColumns.length > 4 && (
                <tfoot>
                  {table.getFooterGroups().map((footerGroup) => (
                    <tr key={footerGroup.id}>
                      {footerGroup.headers.map((header) => (
                        <th
                          style={{ width: header.getSize() }}
                          key={header.id}
                          colSpan={header.colSpan}
                          className="text-grey-500 bg-grey-850 font-normal text-left text-sm h-10"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.footer,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </tfoot>
              )}
            </table>
          </div>
          <div className="absolute -inset-1 rounded-md blur-md bg-gradient-to-br from-[#072e49]/20 via-[#0d345f]/20 to-[#0d3362]/20"></div>
        </div>
        <div className="flex gap-10 justify-between py-4 px-6">
          <Export columns={columns} data={data} />
          <div className="flex items-center gap-10">
            <Pagination table={table} />
            <Timestamp />
          </div>
          {/*
          <button
            className="_btn"
            onClick={() => {
              const selectedRows = table.getSelectedRowModel().flatRows;
              const values = selectedRows.map((row) =>
                Object.values(row.original)
              );
              setDialog({
                values,
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
            Generate chart
          </button>*/}
        </div>
      </div>
    </>
  );
}

/* {
              id: "select",
              size: 1,
              disableSortBy: true,
              header: ({ table }) => (
                <IndeterminateCheckbox
                  {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getToggleAllRowsSelectedHandler(),
                  }}
                />
              ),
              cell: ({ row }) => (
                <div className="px-1">
                  <IndeterminateCheckbox
                    {...{
                      checked: row.getIsSelected(),
                      disabled: !row.getCanSelect(),
                      indeterminate: row.getIsSomeSelected(),
                      onChange: row.getToggleSelectedHandler(),
                    }}
                  />
                </div>
              ),
            },*/
