import React, { useContext, useEffect } from 'react'

// import studentData from '../../helpers/data/studentData'
import { setFormDataAction } from '../../state/globalActions';
import { GlobalStateContext } from '../../state/globalStore';
import './ParentGuardianForm.scss'

const ParentGuardianForm = ({ guardianNumber }) => {
  const { dispatch, state } = useContext(GlobalStateContext);
  useEffect(() => {
    dispatch(setFormDataAction(state.formData));
  }, [dispatch, state.formData]);
  const parent = `parent${guardianNumber}`;
  return (
    <div className='ParentGuardianForm text-left py-4'>
      <h5>Parent/Guardian Information</h5>
      <div className='row'>
        <div className='form-group col-6'>
          <label htmlFor='parentFirstName'>
            Parent/Guardian First Name
          </label>
          <input
            onChange={(e) => state.formData[`${parent}FirstName`] = e.target.value}
            type='text'
            className='form-control'
            id='parentFirstName'
            maxLength='50'
            required
          />
        </div>
        <div className='form-group col-6'>
          <label htmlFor='parentLastName'>
            Parent/Guardian Last Name
          </label>
          <input
            onChange={(e) => state.formData[`${parent}LastName`] = e.target.value}
            type='text'
            className='form-control'
            id='parentLastName'
            maxLength='50'
            required
          />
        </div>
      </div>
      <div className='row'>
        <div className='form-group col-6'>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input
            onChange={(e) => state.formData[`${parent}PhoneNumber`] = e.target.value}
            type='tel'
            className='form-control'
            id='phoneNumber'
            placeholder='(xxx)xxx-xxxx'
            maxLength='12'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            required
          />
        </div>
      </div>
      <div className='row'>
        <div className='form-group col-12'>
          <label htmlFor='email'>Email (optional)</label>
          <input
            onChange={(e) => state.formData[`${parent}Email`] = e.target.value}
            type='email'
            className='form-control'
            id='email'
            maxLength='100'
          />
        </div>
      </div>
      <div className="row">
            <div className="form-group col-12">
                <label htmlFor="relationship">What is your relationship to the student(s)? (optional)</label>
                <input
                    onChange={(e) => state.formData[`${parent}Relationship`] = e.target.value}
                    type="text"
                    className="form-control"
                    id="relationship"
                    maxLength="50"
                />
            </div>
        </div>
    </div>
  )
}

export default ParentGuardianForm
