import React from 'react'
import '../style/TabsBar.css'

const TabData = ({ event }) => {
  return (
    <div >
      <div className='body'>
        {event.data.map((item, i) => (
          <p className='text-detail' key={`${event.id}-${i}`}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default TabData;