import React, { useEffect, useState, useRef } from 'react'
import { Container, Button } from 'reactstrap'
import StudentTable from '../StudentTable/StudentTable'
// import "./StudentTable.scss";
import './TableComponent.scss'
import Modal from '../Modal/Modal'
import { API, graphqlOperation } from 'aws-amplify'
import { getStudent, listStudents } from '../../graphql/queries'
import { CSVLink, CSVDownload } from 'react-csv'

const columns = [
  { accessor: 'parentFirstName', Header: 'Parent First Name' },
  { accessor: 'parentLastName', Header: 'Parent Last Name' },
  { accessor: 'phoneNumber', Header: 'Phone' },
  { accessor: 'email', Header: 'Email' },
  { accessor: 'primaryLanguage', Header: 'Primary Language' },
  { accessor: 'relationship', Header: 'Relationship' },
  { accessor: 'studentFirstName', Header: 'Student First Name' },
  { accessor: 'studentLastName', Header: 'Student Last Name' },
  { accessor: 'studentBirthday', Header: 'Student Birthday' },
  { accessor: 'studentGender', Header: 'Student Gender' },
  { accessor: 'studentRace', Header: 'Student Race' },
  { accessor: 'districtName', Header: 'District' },
  { accessor: 'school', Header: 'School' },
  { accessor: 'description', Header: 'Description' }
]

const TableComponent = () => {
  const [students, setStudents] = useState([])
  const [selected, setSelected] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchStudents()
  }, [])

  async function fetchStudents () {
    try {
      const studentData = await API.graphql(graphqlOperation(listStudents))
      const allStudents = studentData.data.listStudents.items
      setStudents(allStudents)
    } catch (err) {
      console.log('error fetching students')
    }
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          selected={selected}
          isModalOpen={isModalOpen}
          toggle={setIsModalOpen}
        />
      )}

      <aside className='options'>
        <CSVLink data={students}>
          <Button raised color='secondary'>
            Download CSV
          </Button>
        </CSVLink>
        <div className='open-message-btn-wrapper'>
          <Button
            color='primary'
            size='lg'
            onClick={() => setIsModalOpen(true)}
          >
            Message Selected Students ({selected.length})
          </Button>
        </div>
      </aside>
      <Container className='themed-container' fluid={true}>
        <div>
          <StudentTable
            selected={selected}
            setSelected={setSelected}
            columns={columns}
            data={students}
            loading={false}
          />
        </div>
      </Container>
    </>
  )
}

export default TableComponent
