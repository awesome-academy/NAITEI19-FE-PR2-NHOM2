import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/Home/HeroBanner';
import Events from '../components/Home/Events';
import { getShowingFilms } from "../services/filmServices";
import "./Home.scss";
import FilmCard from '../components/Home/FilmCard';
const snsLink = [
  { "src": "https://i.ibb.co/8NRF6HL/yt.jpg", "link": "https://www.youtube.com/lottecinemavietnam" },
  { "src": "https://i.ibb.co/6rCgp6S/fb.jpg", "link": "https://www.facebook.com/lottecinema" },
  { "src": "https://i.ibb.co/HzptD2Y/ins.jpg", "link": "https://www.instagram.com/lottecinema_vietnam" },
  { "src": "https://i.ibb.co/dLtDrch/cr.png", "link": "http://online.gov.vn/Home/WebDetails/50588" }
]
function Home() {
  const [listFilm, setListFilm] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 14;
  const filmsPerPage = 5;
  const getListFilm = async () => {
    try {
      const res = await getShowingFilms(limit, page);
      setListFilm(res.DT);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getListFilm()
  }, []);
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
        {filmsToShow.map(e => <FilmCard key={e.id} id={e.id} imageUrl={e.imgUrl}></FilmCard>)}
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      {listFilm.length > 0 &&
        <HeroBanner listFilm={listFilm} />}
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
      <Events />
      <div className='sns__link__ctn'>
        {snsLink.map((e, id) => <a key={id} href={e.link}><img src={e.src} alt={e.link}></img></a>)}
      </div>
      <Footer />
    </div>
  )
}

export default Home;
