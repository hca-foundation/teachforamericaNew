import React, { useContext, useEffect, useState } from 'react';
import { Collapse, Button } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import { setFormDataAction } from '../../state/globalActions';
import { GlobalStateContext } from '../../state/globalStore';
import './ParentGuardianForm.scss'

const ParentGuardianForm = ({ guardianIndex }) => {
  const { dispatch, state } = useContext(GlobalStateContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(setFormDataAction(state.formData));
  }, [dispatch, state.formData]);

  const toggle = () => setIsOpen(!isOpen);

  const updateGuardian = (index, key, value) => {
    const newState = { ...state.formData };
    let currentGuardian = newState.guardians[index];
    if (currentGuardian === undefined) {
      currentGuardian = { ...newState.guardians[index], id: uuidv4() };
      currentGuardian[key] = value;
      newState.guardians[index] = currentGuardian;
    } else {
      currentGuardian[key] = value;
      newState.guardians[index] = currentGuardian;
    }
    dispatch(setFormDataAction(newState));
  };

  return (
    <div className='ParentGuardianForm text-left py-4'>
      <div className="d-flex justify-content-between align-items-center">
        <h5>Parent/Guardian {`${guardianIndex + 1}`} Information</h5>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{ isOpen ? 'Collapse' : 'Expand' }</Button>
      </div>
      <Collapse isOpen={isOpen}>
        <div className='row'>
          <div className='form-group col-6'>
            <label htmlFor='parentFirstName'>
              Parent/Guardian First Name
            </label>
            <input
              onChange={(e) => updateGuardian(guardianIndex, e.target.id, e.target.value)}
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
              onChange={(e) => updateGuardian(guardianIndex, e.target.id, e.target.value)}
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
              onChange={(e) => updateGuardian(guardianIndex, e.target.id, e.target.value)}
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
              onChange={(e) => updateGuardian(guardianIndex, e.target.id, e.target.value)}
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
                      onChange={(e) => updateGuardian(guardianIndex, e.target.id, e.target.value)}
                      type="text"
                      className="form-control"
                      id="relationship"
                      maxLength="50"
                  />
              </div>
          </div>
      </Collapse>
    </div>
  )
}

export default ParentGuardianForm
