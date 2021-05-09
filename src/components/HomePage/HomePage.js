import React from 'react'
import './HomePage.scss'
import TableComponent from '../TableComponent/TableComponent'

const HomePage = () => {
  return (
    <div className='home-container'>
      <div className='content-wrapper'>
        <div className='content-wrapper'>
          <TableComponent />
        </div>
      </div>
    </div>
  )
}

export default HomePage
