import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { createStudent } from '../../graphql/mutations';
import { getStudent, listStudents } from '../../graphql/queries';

export const fetchStudents = async () => {
  try {
    const studentData = await API.graphql(graphqlOperation(listStudents));
    const allStudents = studentData.data.listStudents.items;
    return allStudents;
  } catch (err) {
    console.log('error fetching students');
  }
  return null;
}

export const createNewStudent = async (formData) => {

  try {
    // if (!parentFirstName || !phoneNumber) return
    const student = { ...formData, id: uuidv4() };
    console.log(student);
    // setStudents([...students, student]);
    //   setFormState(initialState);
    await API.graphql(graphqlOperation(createStudent, { input: student }));
  } catch (err) {
    console.log('error creating student:', err);
  }
}
