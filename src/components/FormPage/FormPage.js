import React, { useState } from 'react';

import ParentGuardianForm from '../ParentGuardianForm/ParentGuardianForm';
import StudentForm from '../StudentForm/StudentForm';
import SelfDeclarationForm from '../SelfDeclarationForm/SelfDeclarationForm';

import './FormPage.scss';

const FormPage = () => {
  const [formState, setFormState] = useState({
    parentFirstName: '',
    parentLastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    currentSchool: '',
    currentGrade: '',
    summerSchool: '',
    mnpsId: '',
    studentBirthday: '',
    studentGender: '',
    needTransportation: '',
    primaryLanguage: '',
    relationship: '',
    needMedicine: '',
    medicineConditionDesc: '',
    hasAllergies: '',
    allergiesList: '',
    emergencyContact: '',
    emergencyContactPhoneNumber: '',
    participatingStudents: '',
    participatingStudentAddress: '',
    householdNumber: '',
    grossIncome: '',
    studentFirstName: '',
    studentLastName: '',
    studentRace: [],
  });

  const setInput = (key, value) => {
    setFormState({ ...formState, [key]: value });
  };

  return (
    <div className="Form col-6 mx-auto my-5">
        <h1>Academy Student Registration: Grades K-8</h1>
        <h4><em>All fields required unless noted optional</em></h4>
        <ParentGuardianForm formState={formState} setInput={setInput} />
        <StudentForm formState={formState} setInput={setInput} />
        <SelfDeclarationForm formState={formState} setInput={setInput} />
        <button className="btn btn-dark col-3">Submit</button>
    </div>
  );
};
export default FormPage;
