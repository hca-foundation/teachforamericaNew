import React, { useEffect, useState, useRef } from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Table
} from 'reactstrap'
import './Table.scss'
import Modal from '../Modal/Modal'
import { API, graphqlOperation } from 'aws-amplify'
import { getStudent, listStudents } from '../../graphql/queries'

const columns = [
  { name: 'parentFirstName', title: 'Parent First Name' },
  { name: 'parentLastName', title: 'Parent Last Name' },
  { name: 'phoneNumber', title: 'Phone' },
  { name: 'email', title: 'Email' },
  { name: 'primaryLanguage', title: 'Primary Language' },
  { name: 'relationship', title: 'Relationship' },
  { name: 'studentFirstName', title: 'Student First Name' },
  { name: 'studentLastName', title: 'Student Last Name' },
  { name: 'studentBirthday', title: 'Student Birthday' },
  { name: 'studentGender', title: 'Student Gender' },
  { name: 'studentRace', title: 'Student Race' },
  { name: 'districtName', title: 'District' },
  { name: 'school', title: 'School' },
  { name: 'description', title: 'Description' }
]

const TableComponent = ({
  isModalOpen,
  setIsModalOpen,
  selected,
  setSelected
}) => {
  const [students, setStudents] = useState([])

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

  /**
   * adds and removes students from selected
   * @param {*} student object
   */
  const selectHandler = student => {
    // reduce removes student if they are already selected
    const updatedSelected =
      selected.length < 1
        ? [student]
        : selected.reduce((acc, cur) => {
            if (cur.id === student.id) {
              console.log('acc', acc)
              return acc
            } else {
              return [...acc, cur]
            }
          }, [])
    // if no students have been removed, then add the student that was selected
    setSelected(
      updatedSelected.length === selected.length
        ? [...updatedSelected, student]
        : updatedSelected
    )
  }
  if (students.length < 1) return null
  return (
    <>
      {isModalOpen && (
        <Modal
          selected={selected}
          isModalOpen={isModalOpen}
          toggle={setIsModalOpen}
        />
      )}
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            {columns.map(({ title }) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => {
            // console.log('student', student)
            return (
              <tr key={i}>
                <th>
                  {' '}
                  <InputGroup>
                    <Input
                      addon
                      checked={
                        selected.filter(({ id }) => id === student.id).length >
                        0
                      }
                      type='checkbox'
                      onChange={e => selectHandler(student, e)}
                    />
                  </InputGroup>
                </th>
                <th scope='row'>{i + 1}</th>
                {columns.map(({ name }) => (
                  <td key={name}>{student[name]}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default TableComponent
