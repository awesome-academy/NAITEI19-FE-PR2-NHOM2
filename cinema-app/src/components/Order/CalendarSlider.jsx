import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setDate } from '../../redux/slices/orderSlice';
import "./CalendarSlider.scss"

function formatDate(date) {
  return date.toLocaleString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  })
}

function CalendarSlider() {
  const [weekDates, setWeekDates] = useState([]);
  const order = useSelector((state) => state.order);
  const [today, setToday] = useState(new Date())
  const [page, setPage] = useState(1)
  const [selectDateId, setSelectDateId] = useState(0)
  const slideRef = useRef(null)
  const dispatch = useDispatch()

  const getWeekDates = () => {
    const currentDate = new Date();
    const endDate = new Date();
    let count = 0
    endDate.setDate(endDate.getDate() + 13);
    const dates = [];
    while (currentDate <= endDate) {
      const tmpDate = new Date(currentDate)
      if (formatDate(tmpDate) == order.date) {
        setSelectDateId(count)
      }
      dates.push(tmpDate);
      count += 1
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setWeekDates(dates);
  };
  useEffect(() => {
    getWeekDates();
  }, []);
  const handleLeftClick = () => {
    if (page != 1) {
      setPage(1)
      slideRef.current.style.transform = `translateX(${0}%)`
    }
  }
  const handleRightClick = () => {
    if (page != 2) {
      setPage(2)
      slideRef.current.style.transform = `translateX(${-100}%)`
    }
  }
  return (
    <div className='calendarSlider'>
      <div className='display__area' ref={slideRef}>
        {weekDates.length > 0 && weekDates.map((date, id) =>
          <div key={id} className="dateCell" >
            {(id == 0 || date.getDate() == 1) &&
              <div className='month'>
                <u>{date.getMonth() + 1}</u>
                <div className='year'>{date.toLocaleString('default', { year: "numeric", month: 'long' })}</div>
              </div>
            }
            <div
              className={'date' + (id == 0 || date.getDate() == 1 ? "" : " offset__date")
                + (date.getDate() - today.getDate() <= 9 ? " selectable" : "")
              }
              onClick={() => {
                if (date.getDate() - today.getDate() <= 9) {
                  dispatch(setDate(formatDate(date)))
                  setSelectDateId(id)
                }
              }}
            >
              <div className='week__day'>
                {date.toLocaleString("default", { weekday: 'short' })}
              </div>
              <div className={'date__number' + (selectDateId == id ? " selected" : "")}>
                {date.getDate()}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="calendar__control__buttons">
        <button onClick={() => { handleLeftClick() }}>
          <span className="material-symbols-outlined">
            arrow_back_ios
          </span>
        </button>
        <button onClick={() => { handleRightClick() }}>
          <span className="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </button>
      </div>
    </div >
  );
}

export default CalendarSlider;
