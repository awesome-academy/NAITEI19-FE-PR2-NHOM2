import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  resetPosition,
  setTime,
  setScreen,
} from "../../redux/slices/orderSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./OrderTicket.scss";
const screenSeat = [60, 70, 80, 90, 100, 120];
function addMinutesToTime(timeString, minutesToAdd) {
  minutesToAdd = parseInt(minutesToAdd);
  const [hoursStr, minutesStr] = timeString.split(":");
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);
  const totalMinutes = hours * 60 + minutes + minutesToAdd;
  const newHours = Math.floor(totalMinutes / 60);
  const newMinutes = totalMinutes % 60;
  const newTimeString = `${String(newHours).padStart(2, "0")}:${String(
    newMinutes
  ).padStart(2, "0")}`;
  return newTimeString;
}
function OrderTicket({ filmId, timeStart, length }) {
  const order = useSelector((state) => state.order);
  const navigate = useNavigate();
  const [id, setId] = useState(filmId % screenSeat.length);
  const [hover, setHover] = useState(false);
  const [link, setLink] = useState(`/ticket`);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setTime(timeStart));
    dispatch(setScreen(`Screen ${id + 1}`));
    console.log(order.currentTheater);

    dispatch(resetPosition());
    if (order.currentTheater.length == 2) {
      console.log("ok");
      navigate("/payment");
    } else {
      toast.error("Bạn phải chọn rạp trước");
    }
  };
  return (
    <div
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={handleClick}
      className="ticket__order"
    >
      <div>Screen {id + 1}</div>
      <div className="time">
        {timeStart}
        {hover ? "~" + addMinutesToTime(timeStart, length) : ""}
      </div>
      <div>
        {parseInt(screenSeat[id] * 0.8)}/{screenSeat[id]} ghế ngồi
      </div>
    </div>
  );
}

export default OrderTicket;
