import { getShowingFilms, getComingFilms } from "../../services/filmServices";
import { useEffect, useState } from "react";
import CenterMode from "./FilmSlider/FilmSlider";
import FilmUnit from "./FilmUnit/FilmUnit";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListFilm.scss";
export default function ListFilm() {
  const [listFilm, setListFilm] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowing, setIsShowing] = useState(true);
  const limit = 8;
  const getListFilm = async () => {
    try {
      const res = await getShowingFilms(limit, page);
      setListFilm(res.DT.slice(0, 8));
    } catch (error) {
      console.log(error);
    }
  };
  const getComingFilm = async () => {
    try {
      const res = await getComingFilms(limit, page);
      setListFilm(res.DT);
    } catch (error) {
      console.log(error);
    }
  };
  const loadMore = async () => {
    try {
      if (isShowing) {
        const res = await getShowingFilms(limit, page);
        if (page === 1) return setListFilm(res.DT);
        setListFilm([...listFilm, ...res.DT]);
      } else {
        const res = await getComingFilms(limit, page);
        if (page === 1) return setListFilm(res.DT);
        setListFilm([...listFilm, ...res.DT]);
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getListFilm();
  }, []);
  useEffect(() => {
    if (isShowing) {
      getListFilm();
    } else {
      getComingFilm();
    }
  }, [isShowing]);
  useEffect(() => {
    loadMore();
  }, [page]);
  return (
    <>
      <div className="slider">
        <CenterMode />
      </div>
      <section className="container list film__boy">
        <div className="button__switch">
          <button
            className={`btn ${isShowing ? "btn-danger" : "btn-light"}`}
            onClick={() => {
              setPage(1);
              setIsShowing(true);
            }}
          >
            Đang chiếu
          </button>
          <button
            className={`btn ${isShowing ? "btn-light" : "btn-danger"}`}
            onClick={() => {
              setPage(1);
              setIsShowing(false);
            }}
          >
            Sắp chiếu
          </button>
        </div>
        <div className="list__film row">
          {listFilm?.map((film) => (
            <FilmUnit key={film.maPhim} film={film} />
          ))}
        </div>
        <div className="btn__loadmore">
          <button
            className="btn btn-danger mb-3"
            onClick={() => setPage(page + 1)}
          >
            Xem thêm
          </button>
        </div>
      </section>
    </>
  );
}
