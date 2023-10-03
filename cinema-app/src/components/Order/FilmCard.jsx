import React from 'react'
import "./FilmCard.scss"

function FilmCard({ imgUrl, name, age, onClick, selected }) {
  return (
    <div className={`film__card ${selected ? "selected" : ""}`} onClick={onClick}>
      <div className='img__ctn'>
        <img height={245} src={imgUrl}></img>
      </div>
      <div className='film__info'>
        <div className={`age__restrict__label age__${age}`}>{age}</div>
        <div className='name'>{name}</div>
      </div>
    </div>
  )
}

export default FilmCard
