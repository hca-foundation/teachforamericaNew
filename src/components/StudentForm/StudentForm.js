import React, { useContext, useEffect, useState } from 'react'
import { Collapse, Button } from 'reactstrap'
import { v4 as uuidv4 } from 'uuid'
import formData from '../../helpers/data/formData'
import { setFormDataAction } from '../../state/globalActions'
import { GlobalStateContext } from '../../state/globalStore'

import { FormGroup, Input, Label } from 'reactstrap'

import './StudentForm.scss'

const StudentForm = ({ studentIndex }) => {
  const { dispatch, state } = useContext(GlobalStateContext)
  const [ethnicities, setEthnicities] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    dispatch(setFormDataAction(state.formData))
    setEthnicities(formData.getEthnicities())
  }, [dispatch, state.formData])

  const toggle = () => setIsOpen(!isOpen)

  const concatString = arr => {
    return arr
      .filter(x => x.selected)
      .map(x => `${x.value}, `)
      .join('')
  }

  const handleEthnicityChange = (studentIndex, e, i) => {
    const newState = { ...state.formData }
    let currentStudent = newState.students[studentIndex]
    const ethnicityCheckboxes = [...ethnicities]
    ethnicityCheckboxes[i].selected = e.target.checked
    setEthnicities(ethnicityCheckboxes)
    if (currentStudent === undefined) {
      currentStudent = {
        ...state.formData.students[studentIndex],
        id: uuidv4()
      }
      const string = concatString(ethnicityCheckboxes)
      currentStudent.ethnicities = string
      newState.students[studentIndex] = currentStudent
    } else {
      const string = concatString(ethnicityCheckboxes)
      currentStudent.ethnicities = string
      newState.students[studentIndex] = currentStudent
    }
    dispatch(setFormDataAction(newState))
  }

  const updateStudent = (index, key, value) => {
    const newState = { ...state.formData }
    let currentStudent = newState.students[index]
    if (currentStudent === undefined) {
      currentStudent = { ...newState.students[index], id: uuidv4() }
      currentStudent[key] = value
      newState.students[index] = currentStudent
    } else {
      currentStudent[key] = value
      newState.students[index] = currentStudent
    }
    dispatch(setFormDataAction(newState))
  }

  return (
    <div className='StudentForm text-left py-4'>
      <div className='d-flex justify-content-between align-items-center expand-collapse my-1' onClick={toggle}>
        <h5>Student {`${studentIndex + 1}`} Information</h5>
        <i class={`fas fa-chevron-right chevron-icon ${isOpen ? 'icon-rotate' : 'icon-start'}`}></i>
      </div>
      <Collapse isOpen={isOpen}>
        <div className='row'>
          <div className='form-group col-6'>
            <label htmlFor='studentFirstName'>Student First Name</label>
            <input
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              type='text'
              className='form-control'
              id='studentFirstName'
              maxLength='50'
              required
            />
          </div>
          <div className='form-group col-6'>
            <label htmlFor='studentLastName'>Student Last Name</label>
            <input
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              type='text'
              className='form-control'
              id='studentLastName'
              maxLength='50'
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-12'>
            <label htmlFor='address'>Address</label>
            <input
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              type='text'
              className='form-control'
              id='address'
              maxLength='100'
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-12'>
            <label htmlFor='address2'>Address 2 (optional)</label>
            <input
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              type='text'
              className='form-control'
              id='address2'
              maxLength='100'
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-6'>
            <label htmlFor='city'>City</label>
            <input
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              type='text'
              className='form-control'
              id='city'
              maxLength='100'
              required
            />
          </div>
          <div className='form-group col-6'>
            <label htmlFor='inputState'>State</label>
            <select
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              id='state'
              className='form-control'
              required
            >
              <option>Select state</option>
              {formData.getStates().map((state, i) => (
                <option key={i}>{state.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-6'>
            <label htmlFor='zipCode'>Zip Code</label>
            <input
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              type='text'
              className='form-control'
              id='zipCode'
              maxLength='5'
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-12'>
            <label htmlFor='currentSchool'>
              What school does the student currently attend?
            </label>
            <input
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              type='text'
              className='form-control'
              id='currentSchool'
              maxLength='150'
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-6'>
            <label htmlFor='currentGrade'>Student's Current Grade</label>
            <select
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              id='currentGrade'
              className='form-control'
              required
            >
              <option>Select grade</option>
              {formData.getGrades().map((grade, i) => (
                <option key={i}>{grade.value}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-12'>
            <label htmlFor='summerSchool'>
              Which summer school site will this student attend?
            </label>
            <select
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              id='summerSchool'
              className='form-control'
              required
            >
              <option>Select school</option>
              {formData.getSummerSchoolSites().map((site, i) => (
                <option key={i}>{site.value}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-6'>
            <label htmlFor='mnpsId'>Student MNPS ID Number (optional)</label>
            <input
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              type='number'
              className='form-control'
              id='mnpsId'
              maxLength='50'
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-6'>
            <label htmlFor='studentBirthday'>Birthday (optional) </label>
            <input
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              type='date'
              className='form-control'
              id='studentBirthday'
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-6'>
            <label htmlFor='studentGender'>Gender</label>
            <select
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              id='studentGender'
              className='form-control'
            >
              <option>Select gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-12'>
            <p>Are you requesting daily transporation to and from school?</p>
            <div className='form-check form-check-inline'>
              <input
                onChange={e =>
                  updateStudent(studentIndex, e.target.name, e.target.value)
                }
                className='form-check-input'
                type='radio'
                name='needTransportation'
                id='transportationTrue'
                value='Yes'
                required
              />
              <label className='form-check-label' htmlFor='transportationTrue'>
                Yes
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                onChange={e =>
                  updateStudent(studentIndex, e.target.name, e.target.value)
                }
                className='form-check-input'
                type='radio'
                name='needTransporation'
                value='No'
                id='transportationFalse'
              />
              <label className='form-check-label' htmlFor='transportationFalse'>
                No
              </label>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-12'>
            <label htmlFor='primaryLanguage'>
              Primary language spoken at home (optional)
            </label>
            <input
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              type='text'
              className='form-control'
              id='primaryLanguage'
              maxLength='100'
            />
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-12'>
            <p>Does the student need to take medicine at school?</p>
            <div className='form-check form-check-inline'>
              <input
                onChange={e =>
                  updateStudent(studentIndex, e.target.name, e.target.value)
                }
                className='form-check-input'
                type='radio'
                name='needMedicine'
                id='medicineTrue'
                value='Yes'
                required
              />
              <label className='form-check-label' htmlFor='medicineTrue'>
                Yes
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                onChange={e =>
                  updateStudent(studentIndex, e.target.name, e.target.value)
                }
                className='form-check-input'
                type='radio'
                name='needMedicine'
                value='No'
                id='medicineFalse'
              />
              <label className='form-check-label' htmlFor='medicineFalse'>
                No
              </label>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-12'>
            <label htmlFor='medicineConditionDesc'>
              If yes, please indicate the medicine and condition requiring
              medicine.
            </label>
            <input
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              type='text'
              className='form-control'
              id='medicineConditionDesc'
              maxLength='500'
            />
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-12'>
            <p>
              Does the student have allergies to medicine or food, etc?
              (optional)
            </p>
            <div className='form-check form-check-inline'>
              <input
                onChange={e =>
                  updateStudent(studentIndex, e.target.name, e.target.value)
                }
                className='form-check-input'
                type='radio'
                name='hasAllergies'
                id='allergiesTrue'
              />
              <label className='form-check-label' htmlFor='allergiesTrue'>
                Yes
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                onChange={e =>
                  updateStudent(studentIndex, e.target.name, e.target.value)
                }
                className='form-check-input'
                type='radio'
                name='hasAllergies'
                id='allergiesFalse'
              />
              <label className='form-check-label' htmlFor='allergiesFalse'>
                No
              </label>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-12'>
            <label htmlFor='allergiesList'>If yes, please list.</label>
            <input
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              type='text'
              className='form-control'
              id='allergiesList'
              maxLength='500'
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-12'>
            <label htmlFor='emergencyContact'>
              In case of emergency during the school day, who should we contact?
              (optional)
            </label>
            <input
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              type='text'
              className='form-control'
              id='emergencyContact'
              maxLength='100'
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-6'>
            <label htmlFor='emergencyContactPhoneNumber'>
              Emergency Contact Phone Number (optional)
            </label>
            <input
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              type='tel'
              className='form-control'
              id='emergencyContactPhoneNumber'
              placeholder='(xxx)xxx-xxxx'
              maxLength='10'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-6'>
            <label htmlFor='householdNumber'>Number in Household</label>
            <select
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              id='householdNumber'
              className='form-control'
              required
            >
              <option>Select number</option>
              {formData.getNumberInHousehold().map((num, i) => (
                <option key={i}>{num.value}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-6'>
            <label htmlFor='grossIncome'>Annual Gross Income</label>
            <select
              onChange={e =>
                updateStudent(studentIndex, e.target.id, e.target.value)
              }
              id='grossIncome'
              className='form-control'
              required
            >
              <option>Select number</option>
              {formData.getIncomes().map((x, i) => (
                <option key={i}>{x.value}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-12 mt-2'>
            <FormGroup id='ethnicity'>
              <Label for='ethnicity'>
                Please check all race or ethnicity categories that apply to your
                student.
              </Label>
              {ethnicities.map((x, i) => (
                <FormGroup key={i} id={`ethnicity${i}`} check>
                  <Label for={`ethnicity${i}`} check>
                    <Input
                      type='checkbox'
                      checked={x.selected}
                      onChange={e => handleEthnicityChange(studentIndex, e, i)}
                    />
                    {x.value}
                  </Label>
                </FormGroup>
              ))}
            </FormGroup>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default StudentForm
