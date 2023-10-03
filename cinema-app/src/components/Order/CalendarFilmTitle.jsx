import React, { useState } from 'react'
import "./CalendarFilmTitle.scss"

function CalendarFilmTitle({ mode, id, age, title }) {
  const [displayAge, setDisplayAge] = useState(age ? age : "R")
  return (
    <div className='calendar__film__title'>
      {mode == "film" ?
        <>
          <div className={`age__restrict__label age__${age}`} >{displayAge}</div>
          {title}
          <button onClick={() => { window.location.href.replace(`/film/${id}`) }}>
            <span className="material-symbols-outlined">
              chevron_right
            </span>
          </button>
        </> :
        <>{title}</>}
    </div>
  )
}

export default CalendarFilmTitle
