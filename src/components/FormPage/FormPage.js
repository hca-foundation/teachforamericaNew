import React from 'react';

import ParentGuardianForm from '../ParentGuardianForm/ParentGuardianForm';
import StudentForm from '../StudentForm/StudentForm';
import SelfDeclarationForm from '../SelfDeclarationForm/SelfDeclarationForm';

import './FormPage.scss';

const FormPage = () => (
    <div className="Form col-6 mx-auto my-5">
        <h5>Academy Student Registration: Grades K-8</h5>
        <p><em>All fields required unless noted optional</em></p>
        <ParentGuardianForm />
        <StudentForm />
        <SelfDeclarationForm />
        <button className="btn btn-dark col-3">Submit</button>
    </div>
);

export default FormPage;
