import React, { useState } from 'react'
import "./OrderTicket.scss"
const screenSeat = [60, 70, 80, 90, 100, 120]
function addMinutesToTime(timeString, minutesToAdd) {
  minutesToAdd = parseInt(minutesToAdd)
  const [hoursStr, minutesStr] = timeString.split(':');
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);
  const totalMinutes = hours * 60 + minutes + minutesToAdd;
  const newHours = Math.floor(totalMinutes / 60);
  const newMinutes = totalMinutes % 60;
  const newTimeString = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
  return newTimeString;
}
function OrderTicket({ filmId, timeStart, length }) {
  const [id, setId] = useState(filmId % screenSeat.length)
  const [hover, setHover] = useState(false)
  return (
    <div
      onMouseOver={() => { setHover(true) }}
      onMouseLeave={() => { setHover(false) }}
      className='ticket__order' >
      <div>Screen {id + 1}</div>
      <div className='time'>{timeStart}{hover ? "~" + addMinutesToTime(timeStart, length) : ""}</div>
      <div>{parseInt(screenSeat[id] * 0.8)}/{screenSeat[id]} ghế ngồi</div>
    </div >
  )
}

export default OrderTicket
