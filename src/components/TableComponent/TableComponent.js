import React, { useEffect, useState, useRef } from 'react'
import { Container, Button } from 'reactstrap'
import StudentTable from '../StudentTable/StudentTable'
import TeacherTable from '../TeacherTable/TeacherTable'
import { v4 as uuidv4 } from 'uuid'
import './TableComponent.scss'
import Modal from '../Modal/Modal'
import studentColumns from './studentColumns'
import teacherColumns from './teacherColumns'
import { API, Auth } from 'aws-amplify'
import { CSVLink, CSVDownload } from 'react-csv'
import { ToastContainer, toast } from 'react-toastify'
const TableComponent = () => {
  const [students, setStudents] = useState([])
  const [teachers, setTeachers] = useState([])
  const [selected, setSelected] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(async () => {
    console.log('here', API)
    const apiName = 'teachersapi'
    const path = '/teachers/id'
    await API.get(apiName, path)
      .then(res => {
        setTeachers(res)
      })
      .catch(err => console.log('fetch err', err))
  }, [])

  const addTeacher = teacher => {
    const {
      name,
      contentArea,
      grade,
      MTLD,
      phone,
      school,
      summerCoach,
      city
    } = teacher
    const apiName = 'teachersapi'
    const path = '/teachers/'
    API.post(apiName, path, {
      body: {
        id: uuidv4(),
        name,
        contentArea,
        grade,
        MTLD,
        phone,
        school,
        summerCoach,
        city
      }
    }).catch(err => console.log('fetch err', err))
  }

  const messageSent = msg => {
    setIsModalOpen(false)
    setSelected([])
    toast(msg)
  }
  console.log('teachers', teachers)
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
            Message Selected ({selected.length})
          </Button>
        </div>
      </aside>
      <Container className='themed-container' fluid={true}>
        <div>
          <TeacherTable
            selected={selected}
            setSelected={setSelected}
            columns={teacherColumns}
            data={teachers}
            loading={false}
          />
        </div>
      </Container>
    </>
  )
}

export default TableComponent
