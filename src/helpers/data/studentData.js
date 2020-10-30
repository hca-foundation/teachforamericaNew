import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { createStudent } from '../../graphql/mutations';
import { getStudent, listStudents } from '../../graphql/queries';

async function fetchStudents() {
  try {
    const studentData = await API.graphql(graphqlOperation(listStudents));
    const allStudents = studentData.data.listStudents.items;
    return allStudents;
  } catch (err) {
    console.log('error fetching students');
  }
  return null;
}

// async function createNewStudent(newStudent) {
// //   const newStudent = {
// //     parentFirstName: parentFirstName.current.value,
// //     parentLastName: parentLastName.current.value,
// //     phoneNumber: phoneNumber.current.value,
// //     email: email.current.value,
// //     primaryLanguage: primaryLanguage.current.value,
// //     relationship: relationship.current.value,
// //     studentFirstName: studentFirstName.current.value,
// //     studentLastName: studentLastName.current.value,
// //     studentBirthday: studentBirthday.current.value,
// //     studentGender: studentGender.current.value,
// //     studentRace: studentRace.current.value,
// //     districtName: districtName.current.value,
// //     school: school.current.value,
// //     description: description.current.value,
// //   };

//   try {
//     // if (!parentFirstName || !phoneNumber) return
//     const student = { ...newStudent, id: uuidv4() };
//     setStudents([...students, student]);
//     //   setFormState(initialState);
//     await API.graphql(graphqlOperation(createStudent, { input: student }));
//   } catch (err) {
//     console.log('error creating student:', err);
//   }
// }

const exportObj = { fetchStudents };

export default exportObj;
