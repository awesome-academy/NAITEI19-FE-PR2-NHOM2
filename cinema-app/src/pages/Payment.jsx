import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CalendarSlider from '../components/Order/CalendarSlider';
import { useSelector } from "react-redux";
import SeatSelector from '../components/Order/SeatSelector';
import axios from 'axios';
import "../components/Order/Payment.scss"

const API = "http://localhost:8000/order/"

function Payment() {
  const order = useSelector((state) => state.order);

  useEffect(() => {
    console.log(order)
  }, [])
  const makeOrder = () => {
    const orderData = {
      filmId: order.currentFilm.id,
      date: order.date,
      time: order.time,
      currentTheater: order.currentTheater,
      positions: order.positions,
    };
    axios.post(API, orderData)
      .then(response => {
        console.log('Order successfully placed:', response.data);
      })
      .catch(error => {
        console.error('Error placing the order:', error);
      });
    setTimeout(() => {
      window.location.href = "/"
    }, 5000)
    window.alert('Đặt hàng thàng công! Bạn sẽ trở lại trang chủ sau 5 giây');

  };

  return (
    <>
      <Navbar />
      <CalendarSlider />
      <div>
        <SeatSelector />
        <div className='payment__ctn'>
          <div className='payment__info'>
            <div className='payment__film__info'>
              <div className='info__type'>Phim chiếu rạp</div>
              <div className='info__ctn'>
                <img width={65} src={order.currentFilm.imgUrl} />
                <div className='film__name'>{order.currentFilm.name}</div>
              </div>
            </div>
            <div className='payment__ticket__info'>
              <div className='info__type'>Thông tin vé đã đặt</div>
              <div className='info__detail'><div>Ngày</div><div>{order.date}</div></div>
              <div className='info__detail'><div>Giờ chiếu</div><div>{order.time}</div></div>
              <div className='info__detail'><div>Rạp chiếu</div><div>{order.currentTheater[1]}, {order.currentTheater[0]}</div></div>
              <div className='info__detail'><div>Ghế ngồi</div><div>{order.positions.join(", ")}</div></div>
            </div>
            <div className='total'>
              <div className='info__type'>Tông tiền đơn hàng
              </div>
              <div className='info__detail'><div>Đặt trước phim</div><div>{(order.positions.length * 150000).toLocaleString("en-US")}đ</div></div>
            </div>
          </div>
        </div>
        <div className='payment__btn__ctn' >
          <button className='payment__btn' onClick={() => { makeOrder() }} >Thanh toán</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Payment
