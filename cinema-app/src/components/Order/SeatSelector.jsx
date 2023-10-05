import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { appendPosition, deletePosition } from '../../redux/slices/orderSlice';
import "./SeatSelector.scss"
const Seat = ({ row, col, selected = false }) => {
  const dispatch = useDispatch()
  const [isSelect, setIsSelected] = useState(selected)
  return <div
    className={`seat ${isSelect ? "selected" : ""}`}
    onClick={() => {
      if (isSelect)
        dispatch(deletePosition(`${row}${col}`))
      else
        dispatch(appendPosition(`${row}${col}`))
      setIsSelected(!isSelect)
    }}
  >
    {col}
  </div>
}

const rows = ["A", "B", "C", "D", "E", "F"]
const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function SeatSelector() {
  return (
    <div className='seat__selector'>
      <h3>Chọn ghế</h3>
      <div className='screen'>Screen</div>
      <div className='seat__map'>
        {rows.map((row, id) => <div className='__row' key={id}>
          <div className='row__name'>{row}</div>
          <div className='seat__row'>
            {columns.map((col, id2) => <Seat key={id2} row={row} col={col} />)}
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default SeatSelector
