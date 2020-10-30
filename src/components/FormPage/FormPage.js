import React from 'react';

import ParentGuardianForm from '../ParentGuardianForm/ParentGuardianForm';
import StudentForm from '../StudentForm/StudentForm';
import SelfDeclarationForm from '../SelfDeclarationForm/SelfDeclarationForm';

import './FormPage.scss';

const FormPage = () => (
    <div className="Form col-6 mx-auto my-5">
        <h1>Academy Student Registration: Grades K-8</h1>
        <h4><em>All fields required unless noted optional</em></h4>
        <ParentGuardianForm />
        <StudentForm />
        <SelfDeclarationForm />
        <button className="btn btn-dark col-3">Submit</button>
    </div>
);

export default FormPage;
