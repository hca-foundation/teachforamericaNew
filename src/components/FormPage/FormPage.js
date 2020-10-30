import React, { useContext, useEffect, useState } from 'react';

import { Button, Form } from 'reactstrap';

import { GlobalStateContext } from '../../state/globalStore';
import { setFormDataAction } from '../../state/globalActions';
import ParentGuardianForm from '../ParentGuardianForm/ParentGuardianForm';
import StudentForm from '../StudentForm/StudentForm';
import SelfDeclarationForm from '../SelfDeclarationForm/SelfDeclarationForm';
import { createNewStudent } from '../../helpers/data/studentData';

import './FormPage.scss';

const FormPage = () => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const [formState, setFormState] = useState({
    parentFirstName: '',
    parentLastName: '',
    phoneNumber: '',
    email: '',
    ethnicities: [],
    grossIncome: '',
    householdNumber: '',

    students: [
      {
        address: '',
        address2: '',
        allergiesList: '',
        city: '',
        currentGrade: '',
        currentSchool: '',
        emergencyContact: '',
        emergencyContactPhoneNumber: '',
        hasAllergies: '',
        medicineConditionDesc: '',
        mnpsId: '',
        needMedicine: '',
        needTransportation: '',
        participatingStudents: '',
        participatingStudentAddress: '',
        primaryLanguage: '',
        relationship: '',
        state: '',
        studentBirthday: '',
        studentFirstName: '',
        studentGender: '',
        studentLastName: '',
        summerSchool: '',
        zipCode: '',
      },
    ],
  });

  useEffect(() => {
    dispatch(setFormDataAction(formState));
  }, [dispatch, formState, state.formData]);

  const handleSubmit = (data) => {
    createNewStudent(data)
      .then(() => {
        dispatch(setFormDataAction(formState));
      });
  };

  const setInput = (key, value) => {
    setFormState({ ...formState, [key]: value });
  };

  return (
    <div className="Form col-6 mx-auto my-5">
        <h1>Academy Student Registration: Grades K-8</h1>
        <h4><em>All fields required unless noted optional</em></h4>
        <Form>
          <ParentGuardianForm />
          <StudentForm />
          <SelfDeclarationForm />
          <Button className="btn btn-dark col-3" onClick={() => handleSubmit(state.formData)}>Submit</Button>
        </Form>
    </div>
  );
};
export default FormPage;
