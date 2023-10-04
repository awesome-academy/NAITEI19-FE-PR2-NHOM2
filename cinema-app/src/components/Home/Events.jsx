import React from 'react'
import "./Events.scss"

const eventImages = ["https://i.ibb.co/LhV4VtB/1.jpg",
  "https://i.ibb.co/mSXXSGC/2.jpg",
  "https://i.ibb.co/NmCYYQg/3.jpg",
  "https://i.ibb.co/6DhSjVd/4.jpg",
  "https://i.ibb.co/WBDK41b/5.jpg",
  "https://i.ibb.co/GdXLcmr/6.jpg",
  "https://i.ibb.co/zZYQMD9/7.png"]

function Events() {
  return (
    <div className='event'>
      <h3>EVENT</h3>
      <div className='event__grid'>
        <div className='col__12'>
          <div className='row__12'>
            <div className='col__1'>
              <div className='event__image'>
                <img src={eventImages[0]} alt="" />
              </div>
              <div className='event__image'>
                <img src={eventImages[3]} alt="" />
              </div>
            </div>
            <div className='col__2'>
              <div className='event__image'>
                <img src={eventImages[1]} alt="" />
              </div>
              <div className='event__image'>
                <img src={eventImages[4]} alt="" />
              </div>
            </div>
          </div>
          <div className='row__3'>
            <div className='event__image'>
              <img src={eventImages[6]} alt="" />
            </div>
          </div>
        </div>
        <div className='col__3'>
          <div className='event__image'>
            <img src={eventImages[2]} alt="" />
          </div>
          <div className='event__image'>
            <img src={eventImages[5]} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
