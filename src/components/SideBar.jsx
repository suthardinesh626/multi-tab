import React from 'react'
import '../style/SideBar.css'
import data from '../data.json'

const SideBar = ({ addEvent }) => {
  return (
    <div>
      <div className='all-tab'>
        <h1 className='event-head'>Event Viewer</h1>
        <div className='table-data1' >
          {data.events.map((event) => (
            <p key={event.id} onClick={() => addEvent(event)}>
              {event.event}
            </p>
          ))}
        </div>
      </div>
    </div>

  )
}

export default SideBar