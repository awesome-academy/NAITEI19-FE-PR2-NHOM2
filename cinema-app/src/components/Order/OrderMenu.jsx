import React, { useState, useEffect } from 'react'
import { getShowingFilms } from "../../services/filmServices";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentFilm, setTheater } from '../../redux/slices/orderSlice';
import "./OrderMenu.scss";
import CalendarFilmTitle from './CalendarFilmTitle';
import OrderTicket from './OrderTicket';


const theater = {
  "TP.HCM": ["Cantavil", "Cộng Hòa", "Gò Vấp", "Gold View", "Moonlight", "Nam Sài Gòn", "Nowzone", "Phú Thọ", "Thủ Đức"],
  "Hà Nội": ["Hà Đông", "Kosmo", "Thăng Long", "West Lake"],
  "ĐB Sông Hồng": ["Bắc Giang", "Bắc Ninh", "Hải Dương", "Hải Phòng", "Nam Định", "Ninh Bình", "Phủ Lý", "Thái Bình"],
  "Đông Bắc, Tây Bắc": ["Hạ Long", "Tuyên Quang", "Việt Trì"],
  "Bắc Miền Trung": ["Huế", "Thanh Hóa", "Vinh"],
  "Nam Miền Trung": ["Bảo Lộc", "Đà Nẵng", "Hội An", "Nha Trang Thái Nguyên", "Nha Trang Trần Phú", "Phan Rang", "Phan Thiết"],
  "Đông Nam Bộ": ["Biên Hòa", "Bình Dương", "Dĩ An", "Đồng Nai", "Tây Ninh", "Vũng Tàu"],
  "Tây Nam Bộ": ["Cà Mau", "Cần Thơ Cái Răng", "Cần Thơ Ninh Kiều", "Long Xuyên"]
}

const timeStart = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "17:30",
  "18:00", "19:00", "20:00", "20:30", "21:00", "21:00", "22:00"]

function OrderMenu() {
  const [selectedArea, setSelectedArea] = useState(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [activeTheaterIndex, setActiveTheaterIndex] = useState(null);
  const [selectFilm, setSelectedFilm] = useState(null);
  const [listFilm, setListFilm] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const filmsPerPage = 5;
  const limit = 14;
  const order = useSelector((state) => state.order);

  useEffect(() => {
    console.log(order)
  }, [])
  const getListFilm = async () => {
    try {
      const res = await getShowingFilms(limit, 1);
      setListFilm(res.DT);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getListFilm();
  }, []);
  const handleAreaClick = (area, index) => {
    if (area != selectedArea) {
      setSelectedArea(area);
      setActiveButtonIndex(index);
      setSelectedTheater(null);
      setActiveTheaterIndex(null);
      console.log(order)

    }
  };
  const handleTheaterClick = (theater, index) => {
    dispatch(setTheater([selectedArea, theater]));
    setSelectedTheater(theater);
    setActiveTheaterIndex(index);
    console.log(order)
  };
  const handleFilmClick = (film) => {
    dispatch(setCurrentFilm(film))
    setSelectedFilm(film)
    console.log(order)

  }
  return (
    <>
      <div className='order__menu__main'>
        <div className='left__area'>
          <h3>Rạp</h3>
          <div className='theater__ctn'>
            <div className='area__list__ctn'>
              {Object.keys(theater).map((area, index) => (
                <button
                  key={index}
                  className={"area__btn" + (index === activeButtonIndex ? " active" : "")}
                  onClick={() => handleAreaClick(area, index)}
                >
                  {area} ({theater[area].length})
                </button>
              ))}</div>
            <div className='theater__list__ctn'>
              {selectedArea &&
                theater[selectedArea].map((theaterName, index) => (
                  <button
                    className={"theater__btn" + (index === activeTheaterIndex ? " active" : "")}
                    key={index}
                    onClick={() => handleTheaterClick(theaterName, index)}>
                    {theaterName}
                  </button>
                ))}
            </div>
          </div>
        </div>
        <div className='right__area'>
          <h3>Phim</h3>
          <div className='film__list__ctn'>
            {listFilm.length > 0 && listFilm.map((film, id) => <div>
              <div
                className={`film__info ${selectFilm?.id == film.id ? "selected" : ""}`}
                onClick={() => { handleFilmClick(film) }}>
                <div className={`age__restrict__label age__${film.age}`}>{film.age ? film.age : "R"}</div>
                <div className='name'>{film.name}</div>
              </div>
            </div>)}
          </div>
        </div>
      </div >
      <div className='showtime'>
        <div className='info'>
          <h3>Giờ chiếu </h3>
          <span>Thời gian chiếu phim có thể chênh lệch 15 phút do chiếu quảng cáo, giới thiệu phim ra rạp</span>
        </div>
        {selectFilm &&
          <CalendarFilmTitle mode={"film"} title={selectFilm.name} age={selectFilm.age} id={selectFilm.id} />
        }
        <div className='list'>
          {Array.from({ length: selectFilm?.id * 89 % 17 }).map((el, tid) => (
            <OrderTicket
              key={tid}
              filmId={selectFilm?.id}
              timeStart={timeStart[Math.floor(Math.random() * 17)]}
              length={selectFilm.time} />
          ))}
        </div>
      </div>
    </>
  )
}

export default OrderMenu
