import React, { useEffect, useState } from 'react'

import {
  useTable,
  useSortBy,
  usePagination,
  useFilters,
  useGlobalFilter,
  useRowSelect
  // useAsyncDebounce,
} from 'react-table'

import {
  // Button,
  Label,
  Input,
  // InputGroup,
  CustomInput,
  FormGroup,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap'
import { matchSorter } from 'match-sorter'
import classNames from 'classnames'
import './StudentTable.scss'
import { SortDown, SortUp } from 'react-bootstrap-icons'

// import sortasc from "./assets/sort_asc.png";
// import sortdesc from "./assets/sort_desc.png";
// import sortboth from "./assets/sort_both.png";
// import loaderimage from "./assets/loader-table.gif";

function DefaultColumnFilter ({
  column: { filterValue, preFilteredRows, setFilter }
}) {
  return (
    <Input
      type='text'
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
      placeholder='Search...'
      style={{
        fontSize: '10px'
      }}
    />
  )
}

function fuzzyTextFilterFn (rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

fuzzyTextFilterFn.autoRemove = val => !val

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type='checkbox' ref={resolvedRef} {...rest} />
      </>
    )
  }
)

const StudentTable = ({
  columns,
  data,
  loading = true,
  selected,
  setSelected
}) => {
  const [switchSearch, setSwitchSearch] = useState(false)
  const toggleSwitchSearch = () => {
    setAllFilters([])
    setSwitchSearch(!switchSearch)
  }
  const filterTypes = React.useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      }
    }),
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter
    }),
    []
  )

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
    selectedFlatRows,
    setPageSize,
    setAllFilters,
    state: { pageIndex, pageSize, selectedRowIds }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
      defaultColumn,
      filterTypes
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          )
        },
        ...columns
      ])
    }
  )

  useEffect(() => {
    setSelected(selectedFlatRows)
  }, [selectedFlatRows])
  return (
    <>
      <div>
        <span className='float-right '>
          <CustomInput
            checked={switchSearch}
            className='table-search-switch'
            type='switch'
            name='customSwitch'
            id='customSwitch'
            onClick={toggleSwitchSearch}
            label='Filter Data'
          />
        </span>
      </div>
      <Table {...getTableProps()} striped hover bordered responsive>
        {headerGroups.length > 0 && (
          <thead>
            {headerGroups.map((headerGroup, idx) => (
              <>
                <tr
                  key={idx}
                  className='theader'
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column, i) => (
                    <th
                      key={i}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {column.render('Header')}
                      <span className={'ml-2'}>
                        {!column.notShowSortingDisplay ? (
                          column.isSorted ? (
                            column.isSortedDesc ? (
                              <SortDown color={'black'} size={15} />
                            ) : (
                              <SortUp color={'black'} size={15} />
                            )
                          ) : (
                            // <FilterCircle color={"black"} size={15} />
                            <span></span>
                          )
                        ) : (
                          ''
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
                {switchSearch ? (
                  <tr style={{ backgroundColor: 'aliceBlue' }}>
                    {headerGroup.headers.map((column, index) => (
                      <th key={index} className='tfilter'>
                        {column.canFilter ? (
                          <FormGroup className='mb-1'>
                            <Label className='divFilter mb-0'>
                              Filter {column.render('Header')} :
                            </Label>
                            {column.render('Filter')}
                          </FormGroup>
                        ) : null}
                      </th>
                    ))}
                  </tr>
                ) : null}
              </>
            ))}
          </thead>
        )}
        {loading ? (
          <tbody>
            <tr>
              <td colSpan='10000' className='text-center'>
                <img src={'loaderimage'} alt='Loading...' />
              </td>
            </tr>
          </tbody>
        ) : (
          <>
            {page.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan='10000' className='text-left'>
                    * Tidak ada data
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row)
                  return (
                    <tr key={i} {...row.getRowProps()}>
                      {row.cells.map((cell, i) => {
                        return (
                          <td
                            key={i}
                            {...cell.getCellProps({
                              className: cell.column.className
                            })}
                          >
                            {cell.render('Cell')}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            )}
          </>
        )}
      </Table>

      {page.length > 0 && (
        <div className={classNames('div-pagination', { 'd-none': loading })}>
          <div className='div-pagination-2'>
            <div className='div-pagination-2-2'>
              Showing{' '}
              <select
                className='selectan'
                value={pageSize}
                onChange={e => {
                  setPageSize(Number(e.target.value))
                }}
              >
                {[10, 20, 30, 50, 100].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>{' '}
              record per-page
            </div>
          </div>

          <div className='div-pagination-1'>
            Page : {pageIndex + 1} from {pageOptions.length}{' '}
            <Pagination className='pagina'>
              <PaginationItem disabled={!canPreviousPage}>
                <PaginationLink onClick={() => gotoPage(0)}>
                  {'<<'}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={!canPreviousPage}>
                <PaginationLink onClick={() => previousPage()}>
                  {'<'}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={!canNextPage}>
                <PaginationLink onClick={() => nextPage()}>
                  {'>'}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={!canNextPage}>
                <PaginationLink onClick={() => gotoPage(pageCount - 1)}>
                  {'>>'}
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            <div className='div-pagination-2-1'>
              Next to Page {' : '}
              <input
                className='inputan'
                type='number'
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(page)
                }}
              />
            </div>{' '}
          </div>
        </div>
      )}
    </>
  )
}

export default StudentTable
