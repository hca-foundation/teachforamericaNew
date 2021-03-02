import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createStudent } from '../../graphql/mutations'
import { getStudent, listStudents } from '../../graphql/queries'

export const fetchStudents = async () => {
  try {
    const studentData = await API.graphql(graphqlOperation(listStudents))
    const allStudents = studentData.data.listStudents.items
    return allStudents
  } catch (err) {
    console.log('error fetching students')
  }
  return null
}

export const createNewStudent = async formData => {
  try {
    const student = { ...formData }
    console.log(student)

    // await API.graphql(graphqlOperation(createStudent, { input: student }));
  } catch (err) {
    console.error('Error creating student:', err)
  }
}
