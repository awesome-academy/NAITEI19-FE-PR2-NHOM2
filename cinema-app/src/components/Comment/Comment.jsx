import "./Comment.scss";
import Rating from "react-rating";
import { useState } from "react";
import ListComment from "./ListComment/ListComment";
export default function Comment() {
  const [rating, setRating] = useState(5);
  const [ratesubmit, setRatesubmit] = useState(5);
  const handleRatingChange = (rate) => {
    if (rate) setRating(rate);
  };

  const handleHover = (rate) => {
    if (rate) setRatesubmit(rate);
    else setRatesubmit(rating);
  };

  return (
    <>
      <section className="comment__container">
        <div className="title">Xếp hạng và đánh giá phim</div>
        <div className="comment__box">
          <div className="rating">
            <div className="rating__title">Đánh giá của bạn</div>
            <div className="rating__star">
              <Rating
                initialRating={rating}
                fractions={2}
                stop={5}
                emptySymbol={<span style={{ color: "#e4e5e9" }}>&#9734;</span>}
                fullSymbol={<span style={{ color: "#fb4226" }}>&#9733;</span>}
                onChange={handleRatingChange}
                onHover={handleHover}
                value={rating}
              />
              <div className="score">
                {ratesubmit ? ratesubmit * 2 : 0} điểm
              </div>
            </div>
          </div>
          <div className="comment_content">
            <textarea
              className="comment__text"
              placeholder="Bạn nghĩ gì về phim này?"
            ></textarea>
          </div>
          <div className="button__submit">
            <button>Bình luận</button>
          </div>
        </div>
      </section>
      <hr />
      <ListComment />
    </>
  );
}