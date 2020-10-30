import React, { useEffect, useState, useRef } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Table,
  Label,
  CustomInput,
  FormGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import {
  useTable,
  useSortBy,
  usePagination,
  useFilters,
  useGlobalFilter,
  // useAsyncDebounce,
} from "react-table";
import { matchSorter } from "match-sorter";
import classNames from "classnames";
//import sortasc from "./assets/sort_asc.png";
//import sortdesc from "./assets/sort_desc.png";
//import sortboth from "./assets/sort_both.png";
//import loaderimage from "./assets/loader-table.gif";
import "./Table.scss";
import Modal from "../Modal/Modal";
import { API, graphqlOperation } from "aws-amplify";
import { getStudent, listStudents } from "../../graphql/queries";

const columns = [
  { name: "parentFirstName", title: "Parent First Name" },
  { name: "parentLastName", title: "Parent Last Name" },
  { name: "phoneNumber", title: "Phone" },
  { name: "email", title: "Email" },
  { name: "primaryLanguage", title: "Primary Language" },
  { name: "relationship", title: "Relationship" },
  { name: "studentFirstName", title: "Student First Name" },
  { name: "studentLastName", title: "Student Last Name" },
  { name: "studentBirthday", title: "Student Birthday" },
  { name: "studentGender", title: "Student Gender" },
  { name: "studentRace", title: "Student Race" },
  { name: "districtName", title: "District" },
  { name: "school", title: "School" },
  { name: "description", title: "Description" },
];

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  return (
    <Input
      type="text"
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder="Search..."
      style={{
        fontSize: "10px",
      }}
    />
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

fuzzyTextFilterFn.autoRemove = (val) => !val;

const TableComponent = ({
  isModalOpen,
  setIsModalOpen,
  selected,
  setSelected,
  columns,
  data,
  loading,
}) => {
  const [students, setStudents] = useState([]);

  const [switchSearch, setSwitchSearch] = useState(false);
  const toggleSwitchSearch = () => {
    setAllFilters([]);
    setSwitchSearch(!switchSearch);
  };
  const filterTypes = React.useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setAllFilters,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    try {
      const studentData = await API.graphql(graphqlOperation(listStudents));
      const allStudents = studentData.data.listStudents.items;
      setStudents(allStudents);
    } catch (err) {
      console.log("error fetching students");
    }
  }

  /**
   * adds and removes students from selected
   * @param {*} student object
   */
  const selectHandler = (student) => {
    // reduce removes student if they are already selected
    const updatedSelected =
      selected.length < 1
        ? [student]
        : selected.reduce((acc, cur) => {
            if (cur.id === student.id) {
              console.log("acc", acc);
              return acc;
            } else {
              return [...acc, cur];
            }
          }, []);
    // if no students have been removed, then add the student that was selected
    setSelected(
      updatedSelected.length === selected.length
        ? [...updatedSelected, student]
        : updatedSelected
    );
  };
  if (students.length < 1) return null;
  return (
    <>
      <div>
        <span className="float-right ">
          <CustomInput
            checked={switchSearch}
            className="table-search-switch"
            type="switch"
            name="customSwitch"
            id="customSwitch"
            onClick={toggleSwitchSearch}
            label="Filter Data"
          />
        </span>
      </div>
      <Table {...getTableProps()} hover bordered responsive>
        <thead>
          {headerGroups.map((headerGroup) => (
            <>
              <tr className="theader" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span className="float-right">
                      {!column.notShowSortingDisplay ? (
                        column.isSorted ? (
                          column.isSortedDesc ? (
                            <img src={sortdesc} alt="descending" />
                          ) : (
                            <img src={sortasc} alt="ascending" />
                          )
                        ) : (
                          <img src={sortboth} alt="sorting" />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
              {switchSearch ? (
                <tr style={{ backgroundColor: "aliceBlue" }}>
                  {headerGroup.headers.map((column, index) => (
                    <th className="tfilter">
                      {column.canFilter ? (
                        <FormGroup className="mb-1">
                          <Label className="divFilter mb-0">
                            Filter {column.render("Header")} :
                          </Label>
                          {column.render("Filter")}
                        </FormGroup>
                      ) : null}
                    </th>
                  ))}
                </tr>
              ) : (
                ""
              )}
            </>
          ))}
        </thead>
        {loading ? (
          <tbody>
            <tr>
              <td colSpan="10000" className="text-center">
                <img src={loaderimage} alt="Loading..." />
              </td>
            </tr>
          </tbody>
        ) : (
          <>
            {page.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan="10000" className="text-left">
                    * Tidak ada data
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps({
                              className: cell.column.className,
                            })}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            )}
          </>
        )}
      </Table>

      {page.length > 0 && (
        <div className={classNames("div-pagination", { "d-none": loading })}>
          <div className="div-pagination-2">
            <div className="div-pagination-2-2">
              Showing{" "}
              <select
                className="selectan"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 50, 100].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>{" "}
              record per-page
            </div>
          </div>

          <div className="div-pagination-1">
            Page : {pageIndex + 1} from {pageOptions.length}{" "}
            <Pagination className="pagina">
              <PaginationItem disabled={!canPreviousPage}>
                <PaginationLink onClick={() => gotoPage(0)}>
                  {"<<"}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={!canPreviousPage}>
                <PaginationLink onClick={() => previousPage()}>
                  {"<"}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={!canNextPage}>
                <PaginationLink onClick={() => nextPage()}>
                  {">"}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={!canNextPage}>
                <PaginationLink onClick={() => gotoPage(pageCount - 1)}>
                  {">>"}
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            <div className="div-pagination-2-1">
              Next to Page {" : "}
              <input
                className="inputan"
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
              />
            </div>{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default TableComponent;

// {isModalOpen && (
//   <Modal
//     selected={selected}
//     isModalOpen={isModalOpen}
//     toggle={setIsModalOpen}
//   />
// )}
// <div className="p-3">
//   <Table striped>
//     <thead>
//       <tr>
//         <th></th>
//         <th>#</th>
//         {columns.map(({ title }) => (
//           <th key={title}>{title}</th>
//         ))}
//       </tr>
//     </thead>
//     <tbody>
//       {students.map((student, i) => {
//         // console.log('student', student)
//         return (
//           <tr key={i}>
//             <th>
//               {" "}
//               <InputGroup>
//                 <Input
//                   addon
//                   checked={
//                     selected.filter(({ id }) => id === student.id)
//                       .length > 0
//                   }
//                   type="checkbox"
//                   onChange={(e) => selectHandler(student, e)}
//                 />
//               </InputGroup>
//             </th>
//             <th scope="row">{i + 1}</th>
//             {columns.map(({ name }) => (
//               <td key={name}>{student[name]}</td>
//             ))}
//           </tr>
//         );
//       })}
//     </tbody>
//   </Table>
// </div>
