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
  return (
    <>
      <Modal isOpen={isModalOpen}>
        <ModalHeader>Write text message</ModalHeader>
        <ModalBody>
          <textarea></textarea>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => toggle(false)}>
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
