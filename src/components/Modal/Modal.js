import React, { useEffect, useState, useRef } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table
} from 'reactstrap'
import './Modal.scss'
import { API, graphqlOperation } from 'aws-amplify'

const ModalComponent = ({ isModalOpen, toggle, selected }) => {
  console.log('selected', selected)
  const sendText = async () => {
    const response = await fetch(
      'https://8rwc658m85.execute-api.us-east-1.amazonaws.com/dev'
    )
    let responseJson = await response.json()
    this.setState(
      {
        isLoading: false,
        dataSource: responseJson
      },
      function () {}
    )
  }

  return (
    <>
      <Modal isOpen={isModalOpen}>
        <ModalHeader>Write text message</ModalHeader>
        <ModalBody>
          <textarea></textarea>
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
