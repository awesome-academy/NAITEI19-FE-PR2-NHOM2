import { useEffect, useState } from "react";
import "./FilmUnit.scss";
import { useDispatch } from "react-redux";
import { setFilm } from "../../../redux/slices/filmSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function FilmUnit({ film }) {
  const [color, setColor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const imgClick = () => {
    dispatch(setFilm(film));
    navigate("/detail"); // Use navigate to navigate to the "/detail" route
  };

  const setAgeColor = () => {
    if (+film?.age === 13) {
      setColor("type_blue");
    } else if (+film?.age === 16) {
      setColor("type_pink");
    } else if (+film?.age === 18) {
      setColor("type_red");
    } else {
      setColor("type_green");
    }
  };

  useEffect(() => {
    setAgeColor();
  }, []);

  return (
    <>
      <div className="film__unit col-sm-3">
        <div className="film__unit__img">
          <img src={film?.imgUrl} alt={film?.name} onClick={() => imgClick()} />
        </div>
        <div className="film__unit__info mt-2">
          <div className="film__unit__title">
            <div className="film__unit__info__detail__type">
              <p className={`${color}`}>{+film?.age === 0 ? "P" : film?.age}</p>
            </div>
            <div className="film__unit__info__name">
              <p className="font-weight-bold">{film?.name}</p>
            </div>
          </div>
          <div className="film__unit__info__detail d-flex">
            <div className="film__unit__info__detail__time">
              <p>{film?.time}Phút</p>
            </div>
            <div className="film__unit__info__detail__timestart">
              <p>{film?.timeStart}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
