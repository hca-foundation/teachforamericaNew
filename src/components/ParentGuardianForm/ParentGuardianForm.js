import React, { useEffect, useState } from 'react'

import studentData from '../../helpers/data/studentData'

import './ParentGuardianForm.scss'

const ParentGuardianForm = ({ setInput, formState }) => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    studentData
      .fetchStudents()
      .then(allStudents => {
        setStudents(allStudents)
      })
      .catch(err => console.error('There was an error fetching students:', err))
  }, [])

  console.log('students', students)
  return (
    <div className='ParentGuardianForm text-left py-4'>
      <form>
        <h5>Parent/Guardian Information</h5>
        <div className='row'>
          <div className='form-group col-6'>
            <label htmlFor='parentGuardianFirstName'>
              Parent/Guardian First Name
            </label>
            <input
              onChange={e => setInput('parentFirstName', e.target.value)}
              value={formState.parentFirstName}
              type='text'
              className='form-control'
              id='parentGuardianFirstName'
              maxLength='50'
              required
            />
          </div>
          <div className='form-group col-6'>
            <label htmlFor='parentGuardianLastName'>
              Parent/Guardian Last Name
            </label>
            <input
              onChange={e => setInput('parentLastName', e.target.value)}
              value={formState.parentLastName}
              type='text'
              className='form-control'
              id='parentGuardianLastName'
              maxLength='50'
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-6'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input
              onChange={e => setInput('phoneNumber', e.target.value)}
              value={formState.phoneNumber}
              type='tel'
              className='form-control'
              id='phoneNumber'
              placeholder='(xxx)xxx-xxxx'
              maxLength='10'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-12'>
            <label htmlFor='email'>Email (optional)</label>
            <input
              onChange={e => setInput('email', e.target.value)}
              value={formState.email}
              type='email'
              className='form-control'
              id='email'
              maxLength='100'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ParentGuardianForm
