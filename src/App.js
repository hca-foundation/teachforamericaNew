import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createStudent } from './graphql/mutations'
import { getStudent, listStudents } from './graphql/queries'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  id: '',
  parentFirstName: '',
  parentLastName: '',
  phoneNumber: '',
  email: '',
  primaryLanguage: '',
  relationship: '',
  studentFirstName: '',
  studentLastName: '',
  studentBirthday: '',
  studentGender: '',
  studentRace: '',
  districtName: '',
  school: '',
  description: ''
}

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetchStudents()
  }, [])

  async function fetchStudents () {
    try {
      const studentData = await API.graphql(graphqlOperation(listStudents))
      const students = studentData.data.listStudents.items
      setStudents(students)
    } catch (err) {
      console.log('error fetching students')
    }
  }

  async function createNewStudent () {
    const {
      parentFirstName,
      parentLastName,
      phoneNumber,
      email,
      primaryLanguage,
      relationship,
      studentFirstName,
      studentLastName,
      studentBirthday,
      studentGender,
      studentRace,
      districtName,
      school,
      description
    } = formState
    try {
      // if (!parentFirstName || !phoneNumber) return
      const student = { ...formState, id: uuidv4() }
      setStudents([...students, student])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createStudent, { input: student }))
    } catch (err) {
      console.log('error creating student:', err)
    }
  }

  function setInput (key, value) {
    setFormState({ ...formState, [key]: value })
  }
  console.log('students', students)
  return (
    <div style={styles.container}>
      <h2>Text for America</h2>
      <input
        onChange={event => setInput('parentFirstName', event.target.value)}
        style={styles.input}
        value={formState.parentFirstName}
        placeholder='Parent First Name'
      />
      <input
        onChange={event => setInput('parentLastName', event.target.value)}
        style={styles.input}
        value={formState.parentLastName}
        placeholder='Parent Last Name'
      />
      <input
        onChange={event => setInput('email', event.target.value)}
        style={styles.input}
        value={formState.email}
        placeholder="Parent's Email"
      />
      <input
        onChange={event => setInput('phoneNumber', event.target.value)}
        style={styles.input}
        value={formState.phoneNumber}
        placeholder="Parent's Phone Number"
      />
      <input
        onChange={event => setInput('relationship', event.target.value)}
        style={styles.input}
        value={formState.relationship}
        placeholder='Relationship'
      />
      <input
        onChange={event => setInput('studentFirstName', event.target.value)}
        style={styles.input}
        value={formState.studentFirstName}
        placeholder='Student First Name'
      />
      <input
        onChange={event => setInput('studentLastName', event.target.value)}
        style={styles.input}
        value={formState.studentLastName}
        placeholder='Student Last Name'
      />
      <input
        onChange={event => setInput('studentGender', event.target.value)}
        style={styles.input}
        value={formState.studentGender}
        placeholder='Student Gender'
      />
      <input
        onChange={event => setInput('studentBirthday', event.target.value)}
        style={styles.input}
        value={formState.studentBirthday}
        placeholder='Student Birthday'
      />
      <input
        onChange={event => setInput('primaryLanguage', event.target.value)}
        style={styles.input}
        value={formState.primaryLanguage}
        placeholder="Student's Primary Language"
      />

      <input
        onChange={event => setInput('districtName', event.target.value)}
        style={styles.input}
        value={formState.districtName}
        placeholder='District Name'
      />
      <input
        onChange={event => setInput('school', event.target.value)}
        style={styles.input}
        value={formState.school}
        placeholder='School'
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder='Description'
      />
      <button style={styles.button} onClick={createNewStudent}>
        Create student
      </button>
      {students.map((student, index) => {
        console.log('student', student)
        const {
          id,
          parentFirstName,
          parentLastName,
          phoneNumber,
          email,
          relationship,
          primaryLanguage,
          studentFirstName,
          studentLastName,
          studentBirthday,
          studentGender,
          studentRace,
          districtName,
          school,
          description
        } = student
        return (
          <div key={student.id ? student.id : index} style={styles.student}>
            <p style={styles.studentName}>{districtName}</p>
            <p style={styles.studentName}>{school}</p>
            <p style={styles.studentDescription}>{studentFirstName}</p>
            <p style={styles.studentDescription}>{studentLastName}</p>
            <p style={styles.studentDescription}>{parentFirstName}</p>
            <p style={styles.studentDescription}>{parentLastName}</p>
          </div>
        )
      })}
    </div>
  )
}

const styles = {
  container: {
    width: 400,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20
  },
  student: { marginBottom: 15 },
  input: {
    border: 'none',
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18
  },
  studentName: { fontSize: 20, fontWeight: 'bold' },
  studentDescription: { marginBottom: 0 },
  button: {
    backgroundColor: 'black',
    color: 'white',
    outline: 'none',
    fontSize: 18,
    padding: '12px 0px'
  }
}

export default App
