import { getShowingFilms, getComingFilms } from "../../services/filmServices";
import { useEffect, useState } from "react";
import CenterMode from "./FilmSlider/FilmSlider";
import FilmUnit from "./FilmUnit/FilmUnit";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListFilm.scss";
export default function ListFilm() {
  const [listFilm, setListFilm] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 8;
  const getListFilm = async () => {
    try {
      const res = await getShowingFilms(limit, page);
      setListFilm(res.DT);
    } catch (error) {
      console.log(error);
    }
  };
  const loadMore = async () => {
    try {
      const res = await getShowingFilms(limit, page);
      setListFilm([...listFilm, ...res.DT]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListFilm();
  }, []);
  useEffect(() => {
    loadMore();
  }, [page]);
  return (
    <>
      <div className="slider">
        <CenterMode />
      </div>
      <section className="container listfilm__boy">
        <div className="list__film row">
          {listFilm.map((film) => (
            <FilmUnit key={film.maPhim} film={film} />
          ))}
        </div>
        <div className="btn__loadmore">
          <button className="btn btn-danger mb-3" onClick={() => setPage(page + 1)}>Xem thêm</button>
        </div>
      </section>
    </>
  );
}
