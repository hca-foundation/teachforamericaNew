import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
  // Table
} from 'reactstrap'
import './Modal.scss'

const ModalComponent = ({
  isModalOpen,
  messageSent,
  toggle,
  selected,
  setSelected
}) => {
  const [message, setMessage] = useState('')
  console.log('selected', selected)
  // array of the phone numbers to send to
  const selectedValues = selected.map(({ values: { phone: phoneNumber } }) => {
    const formattedNumber = `+1${phoneNumber.replace(/-/g, '')}`
    return formattedNumber
  })
  const sendText = async () => {
    const API_ENDPOINT =
      'https://9hxir29w6i.execute-api.us-east-1.amazonaws.com/dev/api/sendText'
    const data = JSON.stringify({
      phoneNumbers: selectedValues,
      message
    })
    try {
      const response = await fetch(API_ENDPOINT, {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'POST',
        body: data,
        mode: 'cors'
        // authorization: userEvent.authTOken
      })
      if (response.status === 200) {
        messageSent(`Message sent: ${message}`)
        setMessage('')
      }
    } catch (err) {
      messageSent(`Error sending sms: ${err}`)
    }
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
            selected.map(({ id, name, phone }) => (
              <p key={id}>{`${name}: ${phone}`}</p>
            ))
          ) : (
            <p>None selected</p>
          )}
        </div>
      </Modal>
    </>
  )
}

export default ModalComponent
