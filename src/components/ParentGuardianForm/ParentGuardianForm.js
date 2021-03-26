import React, { useContext, useEffect, useState } from 'react'
import { Collapse, Button } from 'reactstrap'
import { v4 as uuidv4 } from 'uuid'
import { setFormDataAction } from '../../state/globalActions'
import { GlobalStateContext } from '../../state/globalStore'
import './ParentGuardianForm.scss'

const ParentGuardianForm = ({ guardianIndex }) => {
  const { dispatch, state } = useContext(GlobalStateContext)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    dispatch(setFormDataAction(state.formData))
  }, [dispatch, state.formData])
  const pre = `guardian${guardianIndex + 1}`
  const toggle = () => setIsOpen(!isOpen)

  const updateGuardian = (index, key, value) => {
    const newState = { ...state.formData }
    let currentGuardian = newState.guardians[index]
    if (currentGuardian === undefined) {
      currentGuardian = { ...newState.guardians[index], id: uuidv4() }
      currentGuardian[key] = value
      newState.guardians[index] = currentGuardian
    } else {
      currentGuardian[key] = value
      newState.guardians[index] = currentGuardian
    }
    dispatch(setFormDataAction(newState))
  }

  return (
    <div className='ParentGuardianForm text-left py-4'>
      <div className='d-flex justify-content-between align-items-center expand-collapse my-1' onClick={toggle}>
        <h5>Parent/Guardian {`${guardianIndex + 1}`} Information</h5>
        <i className={`fas fa-chevron-right chevron-icon ${isOpen ? 'icon-rotate' : 'icon-start'}`}></i>
      </div>
      <Collapse isOpen={isOpen}>
        <div className='row'>
          <div className='form-group col-6'>
            <label htmlFor={`${pre}FirstName`}>
              Parent/Guardian First Name
            </label>
            <input
              onChange={e =>
                updateGuardian(guardianIndex, e.target.id, e.target.value)
              }
              type='text'
              className='form-control'
              id={`${pre}FirstName`}
              maxLength='50'
              required
            />
          </div>
          <div className='form-group col-6'>
            <label htmlFor={`${pre}LastName`}>Parent/Guardian Last Name</label>
            <input
              onChange={e =>
                updateGuardian(guardianIndex, e.target.id, e.target.value)
              }
              type='text'
              className='form-control'
              id={`${pre}LastName`}
              maxLength='50'
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-6'>
            <label htmlFor={`${pre}PhoneNumber`}>Phone Number</label>
            <input
              onChange={e =>
                updateGuardian(guardianIndex, e.target.id, e.target.value)
              }
              type='tel'
              className='form-control'
              id={`${pre}PhoneNumber`}
              placeholder='(xxx)xxx-xxxx'
              maxLength='12'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-12'>
            <label htmlFor={`${pre}email`}>Email (optional)</label>
            <input
              onChange={e =>
                updateGuardian(guardianIndex, e.target.id, e.target.value)
              }
              type='email'
              className='form-control'
              id={`${pre}email`}
              maxLength='100'
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-12'>
            <label htmlFor={`${pre}Relationship`}>
              What is your relationship to the student(s)? (optional)
            </label>
            <input
              onChange={e =>
                updateGuardian(guardianIndex, e.target.id, e.target.value)
              }
              type='text'
              className='form-control'
              id={`${pre}Relationship`}
              maxLength='50'
            />
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default ParentGuardianForm
