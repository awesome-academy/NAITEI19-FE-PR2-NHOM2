import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CalendarSlider from '../components/Order/CalendarSlider';
import "../components/Order/Order.scss";
import Calendar from '../components/Order/Calendar';
function Order() {
  const [option, setOption] = useState(0)
  return (
    <>
      <Navbar />
      <div className='select__option'>
        <div className={"option" + (option == 0 ? " selected__option" : "")} onClick={() => { setOption(0) }}>MUA VÉ XEM PHIM</div>
        <div className={"option" + (option == 1 ? " selected__option" : "")} onClick={() => { setOption(1) }}>LỊCH CHIẾU PHIM</div>
      </div>
      <CalendarSlider />
      {option == 1 && <Calendar />}
      <Footer />
    </>
  )
}

export default Order
