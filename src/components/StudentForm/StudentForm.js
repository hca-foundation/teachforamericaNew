import React, { useState, useEffect } from 'react';

import formData from '../../helpers/data/formData';

import './StudentForm.scss';

const StudentForm = ({ setInput, formState }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const getData = () => {
      if (isMounted) {
        console.log('Mounted');
      }
    };
    getData();
    return () => setIsMounted(false);
  }, [isMounted]);

  return (
    <div className="StudentForm text-left py-4">
        <form>
            <h5>Student Information</h5>
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="studentFirstName">Student First Name</label>
                    <input
                        onChange={(e) => setInput('studentFirstName', e.target.value)}
                        value={formState.studentFirstName}
                        type="text"
                        className="form-control"
                        id="studentFirstName"
                        maxLength="50"
                        required
                    />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="studentLastName">Student Last Name</label>
                    <input
                        onChange={(e) => setInput('studentLastName', e.target.value)}
                        value={formState.studentLastName}
                        type="text"
                        className="form-control"
                        id="studentLastName"
                        maxLength="50"
                        required
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-12">
                    <label htmlFor="address">Address</label>
                    <input
                        onChange={(e) => setInput('address', e.target.value)}
                        value={formState.address}
                        type="text"
                        className="form-control"
                        id="address"
                        maxLength="100"
                        required
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-12">
                    <label htmlFor="address2">Address 2 (optional)</label>
                    <input
                        onChange={(e) => setInput('address2', e.target.value)}
                        value={formState.address2}
                        type="text"
                        className="form-control"
                        id="address2"
                        maxLength="100"
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="city">City</label>
                    <input
                        onChange={(e) => setInput('city', e.target.value)}
                        value={formState.city}
                        type="text"
                        className="form-control"
                        id="city"
                        maxLength="100"
                        required
                    />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="inputState">State</label>
                    <select
                        onChange={(e) => setInput('state', e.target.value)}
                        value={formState.state}
                        id="inputState"
                        className="form-control"
                        required
                    >
                        <option>Select state</option>
                        {
                            formData.getStates().map((state, i) => (
                                <option key={i} value={state.value}>{state.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                        onChange={(e) => setInput('zipCode', e.target.value)}
                        value={formState.zipCode}
                        type="text"
                        className="form-control"
                        id="zipCode"
                        maxLength="5"
                        required
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-12">
                    <label htmlFor="school">What school does the student currently attend?</label>
                    <input
                        onChange={(e) => setInput('currentSchool', e.target.value)}
                        value={formState.currentSchool}
                        type="text"
                        className="form-control"
                        id="school"
                        maxLength="150"
                        required
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="inputGrade">Student's Current Grade</label>
                    <select
                        onChange={(e) => setInput('currentGrade', e.target.value)}
                        value={formState.currentGrade}
                        id="inputGrade"
                        className="form-control"
                        required
                    >
                        <option>Select grade</option>
                        {
                            formData.getGrades().map((grade, i) => (
                                <option key={i} value={grade.value}>{grade.value}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-12">
                    <label htmlFor="inputSchool">Which summer school site will this student attend?</label>
                    <select
                        onChange={(e) => setInput('summerSchool', e.target.value)}
                        value={formState.summerSchool}
                        id="inputSchool"
                        className="form-control"
                        required
                    >
                        <option>Select school</option>
                        {
                            formData.getSummerSchoolSites().map((site, i) => (
                                <option key={i} value={site.value}>{site.value}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="studentNumber">Student MNPS ID Number (optional)</label>
                    <input
                        onChange={(e) => setInput('mnpsId', e.target.value)}
                        value={formState.mnpsId}
                        type="number"
                        className="form-control"
                        id="studentNumber"
                        maxLength="50"
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="birthday">Birthday (optional) </label>
                    <input
                        onChange={(e) => setInput('studentBirthday', e.target.value)}
                        value={formState.studentBirthday}
                        type="date"
                        className="form-control"
                        id="birthday"
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="gender">Gender</label>
                    <select
                        onChange={(e) => setInput('studentGender', e.target.value)}
                        value={formState.studentGender}
                        id="gender"
                        className="form-control"
                    >
                        <option>Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <p>Are you requesting daily transporation to and from school?</p>
                    <div className="form-check form-check-inline">
                        <input
                            onChange={(e) => setInput('needTransportation', e.target.value)}
                            checked={formState.needTransportation === 'Yes'}
                            className="form-check-input"
                            type="radio"
                            name="transportation"
                            id="transportationTrue"
                            value="Yes"
                            required
                        />
                        <label className="form-check-label" htmlFor="transportationTrue">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            onChange={(e) => setInput('needTransportation', e.target.value)}
                            checked={formState.needTransportation === 'No'}
                            className="form-check-input"
                            type="radio"
                            name="transportation"
                            id="transportationFalse"
                            value="No"
                        />
                        <label className="form-check-label" htmlFor="transportationFalse">No</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-12">
                    <label htmlFor="primaryLanguage">Primary language spoken at home (optional)</label>
                    <input
                        onChange={(e) => setInput('primaryLanguage', e.target.value)}
                        value={formState.primaryLanguage}
                        type="text"
                        className="form-control"
                        id="primaryLanguage"
                        maxLength="100"
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-12">
                    <label htmlFor="relationship">What is your relationship to the student(s)? (optional)</label>
                    <input
                        onChange={(e) => setInput('relationship', e.target.value)}
                        value={formState.relationship}
                        type="text"
                        className="form-control"
                        id="relationship"
                        maxLength="50"
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <p>Does the student need to take medicine at school? (optional)</p>
                    <div className="form-check form-check-inline">
                        <input
                            onChange={(e) => setInput('needMedicine', e.target.value)}
                            checked={formState.needMedicine === 'Yes'}
                            className="form-check-input"
                            type="radio"
                            name="medicine"
                            id="medicineTrue"
                            value="Yes"
                        />
                        <label className="form-check-label" htmlFor="medicineTrue">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            onChange={(e) => setInput('needMedicine', e.target.value)}
                            checked={formState.needMedicine === 'No'}
                            className="form-check-input"
                            type="radio"
                            name="medicine"
                            id="medicineFalse"
                            value="No"
                        />
                        <label className="form-check-label" htmlFor="medicineFalse">No</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-12">
                    <label htmlFor="medicineCondition">If yes, please indicate the medicine and condition requiring medicine.</label>
                    <input
                        onChange={(e) => setInput('medicineConditionDesc', e.target.value)}
                        value={formState.medicineConditionDesc}
                        type="text"
                        className="form-control"
                        id="medicineCondition"
                        maxLength="500"
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <p>Does the student have allergies to medicine or food, etc? (optional)</p>
                    <div className="form-check form-check-inline">
                        <input
                            onChange={(e) => setInput('hasAllergies', e.target.value)}
                            checked={formState.hasAllergies === 'Yes'}
                            className="form-check-input"
                            type="radio"
                            name="allergies"
                            id="allergiesTrue"
                            value="Yes"
                        />
                        <label className="form-check-label" htmlFor="allergiesTrue">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            onChange={(e) => setInput('hasAllergies', e.target.value)}
                            checked={formState.hasAllergies === 'No'}
                            className="form-check-input"
                            type="radio"
                            name="allergies"
                            id="allergiesFalse"
                            value="No"
                        />
                        <label className="form-check-label" htmlFor="allergiesFalse">No</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-12">
                    <label htmlFor="allergiesList">If yes, please list.</label>
                    <input
                        onChange={(e) => setInput('allergiesList', e.target.value)}
                        value={formState.allergiesList}
                        type="text"
                        className="form-control"
                        id="allergiesList"
                        maxLength="500"
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-12">
                    <label htmlFor="emergencyContact">In case of emergency during the school day, who should we contact? (optional)</label>
                    <input
                        onChange={(e) => setInput('emergencyContact', e.target.value)}
                        value={formState.emergencyContact}
                        type="text"
                        className="form-control"
                        id="emergencyContact"
                        maxLength="100"
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="formGroupExampleInput">Emergency Contact Phone Number (optional)</label>
                    <input
                        onChange={(e) => setInput('emergencyContactPhoneNumber', e.target.value)}
                        value={formState.emergencyContactPhoneNumber}
                        type="tel"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="(xxx)xxx-xxxx"
                        maxLength="10"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />
                </div>
            </div>
            <button className="col-4 btn btn-secondary"><i className="fas fa-plus mr-2"></i>Add Another Student</button>
        </form>
    </div>
  );
};

export default StudentForm;
