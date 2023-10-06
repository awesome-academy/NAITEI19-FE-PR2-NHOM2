import DetailSlider from "./filmdetailslider/DetailSlider";
import "./FilmDetail.scss";
import { useSelector } from "react-redux";
import Rating from "react-rating";
import Comment from "../Comment/Comment";
const {useNavigate} = require("react-router-dom");
export default function FilmDetail() {
  const filmDetail = useSelector((state) => state.film.currentFilm);
  const navigate = useNavigate();
  return (
    <>
      <DetailSlider />
      <section className="container">
        <div className="row film__detail">
          <div className="col-sm-2 detail__img">
            <div className="img">
              <img src={filmDetail?.imgUrl} alt="film" />
            </div>
            <div className="button__book">
              <button className="btn" 
              onClick={() => {
                navigate("/ticket");
              }}
              >Đặt vé</button>
            </div>
          </div>
          <div className="col-10 detail__script">
            <h2>{filmDetail?.name}</h2>
            <div className="script__rating d-flex">
              <span className="rating__text">Xem xếp hạng</span>
              <Rating
                initialRating={filmDetail?.rating / 2}
                fractions={2}
                stop={5}
                emptySymbol={<span style={{ color: "#e4e5e9" }}>&#9734;</span>}
                fullSymbol={<span style={{ color: "#fb4226" }}>&#9733;</span>}
                readonly={true}
              />
              <span className="rating__number">{filmDetail?.rating}</span>
            </div>
            <div className="script__genre d-flex">
              <div className="genre__rank d-flex flex-row">
                <span className="rank__title">Xếp hạng</span>
                <span className="rank__script">
                  [Trong nước]{" "}
                  {filmDetail?.age > 0
                    ? `(${filmDetail?.age}+) Trên ${filmDetail?.age} tuổi`
                    : "Mọi lứa tuổi"}
                </span>
              </div>
              <div className="genre__time">
                <span className="time__title">Ngày phát hành</span>
                <span className="time__script">{filmDetail?.timeStart}</span>
              </div>
            </div>
            <div className="script__info">
              <span className="info__title">Thông tin cơ bản </span>
              <span className="info__script">
                {filmDetail?.genre} {`(${filmDetail?.time}Phút)`}
              </span>
            </div>
            <div className="script__category">
              <span className="category__title">Thể loại</span>
              <span className="category__script">{filmDetail?.category}</span>
            </div>
          </div>
        </div>
        <div className="trailer">
          <div className="trailer__title"> Tóm tắt</div>
          <div className="trailer__content">
            <p>{filmDetail?.description}</p>
          </div>
        </div>
        <Comment />    
      </section>
    </>
  );
}
