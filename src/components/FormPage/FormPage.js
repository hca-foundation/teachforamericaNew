import React, { useContext, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid'
import { Button, Form } from 'reactstrap'

import { GlobalStateContext, formState } from '../../state/globalStore'
import { setFormDataAction } from '../../state/globalActions'
import GuardianContainer from '../ParentGuardianForm/GuardianContainer'
import StudentContainer from '../StudentForm/StudentContainer'
import SelfDeclarationForm from '../SelfDeclarationForm/SelfDeclarationForm'
// import { createNewStudent } from '../../helpers/data/studentData';
import formData from '../../helpers/data/formData'

import './FormPage.scss'

const FormPage = () => {
  const { state, dispatch } = useContext(GlobalStateContext)

  const handleSubmit = data => {
    const enrollment = {
      id: uuidv4(),
      date: formData.getDate(),
      ...data
    }
    console.log(enrollment)
    // createNewStudent(data)
    //   .then(() => {
    //     dispatch(setFormDataAction(formState));
    //   });
  }

  // {
  //   "parentFirstName": "David",
  //   "parentLastName": "Everett",
  //   "phoneNumber": "2173431348",
  //   "email": "davideverett1989@gmail.com",
  //   "ethnicities": [
  //     {
  //       "value": "Alaskan, Native, or American Indian",
  //       "selected": false
  //     },
  //     {
  //       "value": "Asian",
  //       "selected": true
  //     },
  //     {
  //       "value": "Black or African-American",
  //       "selected": true
  //     },
  //     {
  //       "value": "Latino or Hispanic",
  //       "selected": false
  //     },
  //     {
  //       "value": "Middle Eastern, North African, or Arab American",
  //       "selected": false
  //     },
  //     {
  //       "value": "White",
  //       "selected": true
  //     }
  //   ],
  //   "grossIncome": "$46,435 - $54,426",
  //   "householdNumber": "2 persons",
  //   "address": "123 Whatever St.",
  //   "address2": "",
  //   "allergiesList": "",
  //   "city": "Nashville",
  //   "currentGrade": "5th Grade",
  //   "currentSchool": "Nashville Software School",
  //   "emergencyContact": "Mom",
  //   "emergencyContactPhoneNumber": "3334444555",
  //   "hasAllergies": "No",
  //   "medicineConditionDesc": "Tylenol",
  //   "mnpsId": "35132515",
  //   "needMedicine": "Yes",
  //   "needTransportation": "No",
  //   "participatingStudents": "",
  //   "participatingStudentAddress": "",
  //   "primaryLanguage": "English",
  //   "relationship": "Father",
  //   "state": "Tennessee",
  //   "studentBirthday": "2020-12-02",
  //   "studentFirstName": "James",
  //   "studentGender": "Male",
  //   "studentLastName": "Doe",
  //   "summerSchool": "Gra-Mar Elementary (current K-4)",
  //   "zipCode": "37216"
  // }

  useEffect(() => {
    dispatch(setFormDataAction(state.formData))
  }, [dispatch, state.formData])

  return (
    <div className='Form col-6 mx-auto my-5 text-center'>
      <h1>Academy Student Registration: Grades K-8</h1>
      <h4>
        <em>All fields required unless noted optional</em>
      </h4>
      <Form>
        <GuardianContainer />
        <StudentContainer />
        <SelfDeclarationForm />
        <Button
          className='btn btn-dark col-3'
          onClick={() => handleSubmit(state.formData)}
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}
export default FormPage
