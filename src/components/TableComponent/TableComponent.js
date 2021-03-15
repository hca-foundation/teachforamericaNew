import React, { useEffect, useState, useRef } from 'react'
import { Container, Button } from 'reactstrap'
import StudentTable from '../StudentTable/StudentTable'

import './TableComponent.scss'
import Modal from '../Modal/Modal'
import columns from './columns'
import { API, Auth } from 'aws-amplify'
import { CSVLink, CSVDownload } from 'react-csv'
import { ToastContainer, toast } from 'react-toastify'
const TableComponent = () => {
  const [students, setStudents] = useState([])
  const [selected, setSelected] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(async () => {
    const apiName = 't4aApi'
    const path = '/students/id'
    API.get(apiName, path).then(res => setStudents(res))
  }, [])

  const messageSent = msg => {
    setIsModalOpen(false)
    setSelected([])
    toast(msg)
  }
  return (
    <>
      {isModalOpen && (
        <Modal
          messageSent={messageSent}
          selected={selected}
          setSelected={setSelected}
          isModalOpen={isModalOpen}
          toggle={setIsModalOpen}
        />
      )}
      <ToastContainer />
      <aside className='options'>
        <CSVLink data={students}>
          <Button color='secondary'>Download CSV</Button>
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
