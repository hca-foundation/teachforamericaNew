import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import './HomePage.scss'
import TableComponent from '../TableComponent/TableComponent'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const HomePage = () => {
  return (
    <div className='home-container'>
      <nav className='home-header'>
        <div className='logo-wrapper'>
          <div className='logo'>
            TEACH<div id='logo-for'>FOR</div>AMERICA
          </div>
        </div>
        <div className='signout-wrapper'>
          <AmplifySignOut />
        </div>
      </nav>

      <div className='content-wrapper'>
        <div className='content-wrapper'>
          <TableComponent />
        </div>
      </div>
    </div>
  )
}

export default withAuthenticator(HomePage)
