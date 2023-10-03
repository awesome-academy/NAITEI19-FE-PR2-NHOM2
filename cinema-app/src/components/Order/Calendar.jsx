import React, { useState, useEffect } from 'react';
import { getShowingFilms } from "../../services/filmServices";
import "./Calendar.scss"
import CalendarFilmTitle from './CalendarFilmTitle';
import OrderTicket from './OrderTicket';
import FilmCard from './FilmCard';

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

function Calendar() {
  const [option, setOption] = useState(0);
  const [selectedArea, setSelectedArea] = useState(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [activeTheaterIndex, setActiveTheaterIndex] = useState(null);
  const [selectFilm, setSelectedFilm] = useState(null);
  const [listFilm, setListFilm] = useState([]);
  const [page, setPage] = useState(1);
  const filmsPerPage = 5;
  const limit = 14;

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
    }
  };
  const handleTheaterClick = (theater, index) => {
    setSelectedTheater(theater);
    setActiveTheaterIndex(index);
  };
  const handleFilmClick = (film) => {
    setSelectedFilm(film)
  }
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const renderFilmSlider = () => {
    const startIndex = (page - 1) * filmsPerPage;
    const endIndex = startIndex + filmsPerPage;
    const filmsToShow = listFilm.slice(startIndex, endIndex);
    return (
      <div className='film__list__slider'>
        {filmsToShow.map(e => <FilmCard key={e.id} imgUrl={e.imgUrl} name={e.name} age={e.age} selected={selectFilm?.id == e.id} onClick={() => { handleFilmClick(e) }} />)}
      </div>
    );
  };
  return (
    <div className='calendar'>
      <div className='select__option'>
        <div className={"option" + (option === 0 ? " selected" : "")} onClick={() => { setOption(0) }}>Lịch chiếu phim theo rạp</div>
        <div className={"option" + (option === 1 ? " selected" : "")} onClick={() => { setOption(1) }}>Danh sách phim theo rạp</div>
      </div>
      {option == 0 &&
        <div className='main'>
          <h3>Rạp phim</h3>
          <div className='area__btn__ctn'>
            {Object.keys(theater).map((area, index) => (
              <button
                key={index}
                className={"area__btn" + (index === activeButtonIndex ? " active" : "")}
                onClick={() => handleAreaClick(area, index)}
              >
                {area} ({theater[area].length})
              </button>
            ))}
          </div>
          {selectedArea && (
            <div className='theater__btn__ctn'>
              {theater[selectedArea].map((theaterName, index) => (
                <button
                  className={"theater__btn" + (index === activeTheaterIndex ? " active" : "")}
                  key={index}
                  onClick={() => handleTheaterClick(theaterName, index)}>
                  {theaterName}
                </button>
              ))}
            </div>
          )}
          <div className='showtime'>
            <div className='info'>
              <h3>Giờ chiếu </h3>
              <span>Thời gian chiếu phim có thể chênh lệch 15 phút do chiếu quảng cáo, giới thiệu phim ra rạp</span>
            </div>
            <div className='list'>
              {selectedTheater && listFilm.map((e, id) => (
                <div key={id}>
                  <CalendarFilmTitle key={e.id} mode={"film"} title={e.name} age={e.age} id={e.id} />
                  <div className='category'>{e.category.split(",").join(", ")}</div>
                  <div className='theater__list__ctn'>
                    {Array.from({ length: e.id * 89 % 17 }).map((el, id) => (
                      <OrderTicket key={id} filmId={e.id} timeStart={timeStart[Math.floor(Math.random() * 17)]} length={e.time} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
      {option == 1 &&
        <div className='main'>
          <h3>Phim chiếu rạp</h3>
          <div className='film__slider'>
            {listFilm.length > 0 && renderFilmSlider()}
            <div className='pagination-buttons'>
              {page > 1 &&
                <button id='prevBtn' onClick={handlePrevPage}>
                  <span className="material-symbols-outlined">
                    arrow_back_ios
                  </span>
                </button>}
              {listFilm.length > filmsPerPage * page &&
                <button id='nextBtn' onClick={handleNextPage}>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </button>}
            </div>
          </div>
          <div className='info'>
            <h3>Giờ chiếu </h3>
            <span>Thời gian chiếu phim có thể chênh lệch 15 phút do chiếu quảng cáo, giới thiệu phim ra rạp</span>
          </div>
          <div className='area__btn__ctn'>
            {Object.keys(theater).map((area, index) => (
              <button
                key={index}
                className={"area__btn" + (index === activeButtonIndex ? " active" : "")}
                onClick={() => handleAreaClick(area, index)}
              >
                {area} ({theater[area].length})
              </button>
            ))}
          </div>
          <div className='showtime'>
            <div className='list'>
              {selectedArea && theater[selectedArea].map((e, id) => (
                <div key={id}>
                  <CalendarFilmTitle key={id} title={e} />
                  <div className='theater__list__ctn'>
                    {Array.from({ length: selectFilm?.id * 89 % 17 }).map((el, tid) => (
                      <OrderTicket
                        key={tid}
                        filmId={selectFilm?.id}
                        timeStart={timeStart[Math.floor(Math.random() * 17)]}
                        length={selectFilm.time} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Calendar;
