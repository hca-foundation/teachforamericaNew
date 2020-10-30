import React, { useEffect, useState, useRef } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { createStudent } from '../../graphql/mutations';
import { getStudent, listStudents } from '../../graphql/queries';

import './ParentGuardianForm.scss';

// const initialState = {
//   id: '',
//   parentFirstName: '',
//   parentLastName: '',
//   phoneNumber: '',
//   email: '',
//   primaryLanguage: '',
//   relationship: '',
//   studentFirstName: '',
//   studentLastName: '',
//   studentBirthday: '',
//   studentGender: '',
//   studentRace: '',
//   districtName: '',
//   school: '',
//   description: '',
// };

const ParentGuardianForm = () => {
//   const [formState, setFormState] = useState(initialState);
  const [students, setStudents] = useState([]);
  const parentFirstName = useRef();
  const parentLastName = useRef();
  const phoneNumber = useRef();
  const email = useRef();
  const primaryLanguage = useRef();
  const relationship = useRef();
  const studentFirstName = useRef();
  const studentLastName = useRef();
  const studentBirthday = useRef();
  const studentGender = useRef();
  const studentRace = useRef();
  const districtName = useRef();
  const school = useRef();
  const description = useRef();

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    try {
      const studentData = await API.graphql(graphqlOperation(listStudents));
      const allStudents = studentData.data.listStudents.items;
      setStudents(allStudents);
    } catch (err) {
      console.log('error fetching students');
    }
  }

  async function createNewStudent() {
    // const {
    //   parentFirstName,
    //   parentLastName,
    //   phoneNumber,
    //   email,
    //   primaryLanguage,
    //   relationship,
    //   studentFirstName,
    //   studentLastName,
    //   studentBirthday,
    //   studentGender,
    //   studentRace,
    //   districtName,
    //   school,
    //   description,
    // } = formState;

    const newStudent = {
      parentFirstName: parentFirstName.current.value,
      parentLastName: parentLastName.current.value,
      phoneNumber: phoneNumber.current.value,
      email: email.current.value,
      primaryLanguage: primaryLanguage.current.value,
      relationship: relationship.current.value,
      studentFirstName: studentFirstName.current.value,
      studentLastName: studentLastName.current.value,
      studentBirthday: studentBirthday.current.value,
      studentGender: studentGender.current.value,
      studentRace: studentRace.current.value,
      districtName: districtName.current.value,
      school: school.current.value,
      description: description.current.value,
    };

    try {
      // if (!parentFirstName || !phoneNumber) return
      const student = { ...newStudent, id: uuidv4() };
      setStudents([...students, student]);
      //   setFormState(initialState);
      await API.graphql(graphqlOperation(createStudent, { input: student }));
    } catch (err) {
      console.log('error creating student:', err);
    }
  }

  //   function setInput(key, value) {
  //     setFormState({ ...formState, [key]: value });
  //   }
  console.log('students', students);
  return (
    <div className="ParentGuardianForm text-left py-4">
      <form>
        <h5>Parent/Guardian Information</h5>
        <div className="row">
          <div className="form-group col-6">
            <label htmlFor="parentGuardianFirstName">Parent/Guardian First Name</label>
            <input type="text" className="form-control" id="parentGuardianFirstName" maxLength="50" required/>
          </div>
          <div className="form-group col-6">
            <label htmlFor="parentGuardianLastName">Parent/Guardian Last Name</label>
            <input type="text" className="form-control" id="parentGuardianLastName" maxLength="50" required/>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-6">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" className="form-control" id="phoneNumber" placeholder="(xxx)xxx-xxxx" maxLength="10" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-12">
            <label htmlFor="email">Email (optional)</label>
            <input type="email" className="form-control" id="email" maxLength="100" />
          </div>
        </div>
      </form>
    </div>
  );
};

// const styles = {
//   container: {
//     width: 400,
//     margin: '0 auto',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   student: { marginBottom: 15 },
//   input: {
//     border: 'none',
//     backgroundColor: '#ddd',
//     marginBottom: 10,
//     padding: 8,
//     fontSize: 18,
//   },
//   studentName: { fontSize: 20, fontWeight: 'bold' },
//   studentDescription: { marginBottom: 0 },
//   button: {
//     backgroundColor: 'black',
//     color: 'white',
//     outline: 'none',
//     fontSize: 18,
//     padding: '12px 0px',
//   },
// };

export default ParentGuardianForm;
