import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  // Table
} from 'reactstrap'
import './Modal.scss'
// import { API, graphqlOperation } from 'aws-amplify'

const ModalComponent = ({ isModalOpen, toggle, selected }) => {
  const [message, setMessage] = useState('')
  const { phoneNumber } = selected[0]
  const sendText = async () => {
    const API_ENDPOINT =
      'https://8rwc658m85.execute-api.us-east-1.amazonaws.com/dev/api/sendText'
    const data = JSON.stringify({
      to: '+' + phoneNumber,
      message
    })
    const response = await fetch(API_ENDPOINT, {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: data,
      mode: 'cors'
      // authorization: userEvent.authTOken
    })
    let responseJson = await response.json()
  }

  return (
    <>
      <Modal isOpen={isModalOpen}>
        <ModalHeader>Write text message</ModalHeader>
        <ModalBody>
          <label>Enter message : </label>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => sendText()}>
            Send Message
          </Button>{' '}
          <Button color='secondary' onClick={() => toggle(false)}>
            Cancel
          </Button>
        </ModalFooter>
        <div>
          {selected.length > 0 ? (
            selected.map(
              ({ studentFirstName, studentLastName, id, phoneNumber }) => (
                <p
                  key={id}
                >{`${studentLastName}, ${studentFirstName}: ${phoneNumber}`}</p>
              )
            )
          ) : (
            <p>None selected</p>
          )}
        </div>
      </Modal>
    </>
  )
}

export default ModalComponent
