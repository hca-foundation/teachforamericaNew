import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import './HomePage.scss'
import Table from '../Table/Table'

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selected, setSelected] = useState([])
  return (
    <div className='home-container'>
      <nav className='home-header'>
        <div className='logo-wrapper'>
          <div className='logo'>
            TEACH<div id='logo-for'>FOR</div>AMERICA
          </div>
        </div>
      </nav>

      <div className='content-wrapper'>
        <aside className='options'>
          <div className='filter-sort-btns-wrapper'>
            <Button outline color='info'>
              Filter
            </Button>
            <Button outline color='info'>
              Sort
            </Button>
          </div>
          <div className='open-message-btn-wrapper'>
            <Button
              color='primary'
              size='lg'
              onClick={() => setIsModalOpen(true)}
            >
              Message Selected Students ({selected.length})
            </Button>
          </div>
        </aside>
        <div className='content-wrapper'>
          <Table
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
