import Amplify, { API } from 'aws-amplify'

export const createNewStudent = async formData => {
  const apiName = 't4aApi'
  const path = '/students'
  const myInit = {
    body: formData
  }
  console.log('formData', formData)
  try {
    API.post(apiName, path, myInit)
      .then(response => {
        console.log('response', response)
      })
      .catch(error => {
        console.log(error.response)
      })
  } catch (err) {
    console.error('Error creating student:', err)
  }
}
