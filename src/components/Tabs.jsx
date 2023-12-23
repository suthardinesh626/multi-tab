import React from 'react'
import '../style/Tabs.css'

const Tabs = ({ event, removeEvent, setSelectedTab }) => {
  return (
    <div className='tab-menu'>
      <div className='alltab' onClick={() => setSelectedTab(event)}>
        <p>{event.event}</p>
        <p className='close-btn' onClick={(e) => { e.stopPropagation(); removeEvent(event.id); }}> X </p>
      </div>
    </div>
  )
}

export default Tabs