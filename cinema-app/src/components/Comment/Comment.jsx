import "./Comment.scss";
import Rating from "react-rating";
import { useState } from "react";
import ListComment from "./ListComment/ListComment";
import { useSelector } from "react-redux";
import { createComment } from "../../services/commentServices";
import { toast } from "react-toastify";
import { checkTransaction } from "../../services/historyService";
export default function Comment() {
  const filmId = useSelector((state) => state.film.currentFilm.id);
  const [rating, setRating] = useState(5);
  const [ratesubmit, setRatesubmit] = useState(5);
  const [comment, setComment] = useState("");
  const [isReload, setIsReload] = useState(false);
  const handleRatingChange = (rate) => {
    if (rate) setRating(rate);
  };

  const handleHover = (rate) => {
    if (rate) setRatesubmit(rate);
    else setRatesubmit(rating);
  };
  const checkTransactionE = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user?.role) {
      toast.error("Bạn cần đăng nhập để bình luận");
      return;
    }
    let res = await checkTransaction(user.id, filmId);
    console.log(res);
    if (res.EC === 200) {
      return true;
    }
    toast.error("Bạn cần xem phim để bình luận");
    return false;
  };
  const handleSubmit = async () => {
    if (!comment) return;
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user?.role) {
      toast.error("Bạn cần đăng nhập để bình luận");
      return;
    }
    if (!await checkTransactionE()) return;
    let data = {
      showingId: filmId,
      rating: rating * 2,
      comment: comment,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: JSON.parse(localStorage.getItem("user")).id,
    };
    try {
      const res = await createComment(data);
      if (res.EC === 200) {
        setIsReload(!isReload);
        setComment("");
      }
    } catch (error) {
      console.log(error);
    }
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
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div className="button__submit">
            <button onClick={handleSubmit}>Bình luận</button>
          </div>
        </div>
      </section>
      <hr />
      <ListComment isReload={isReload} />
    </>
  );
}
