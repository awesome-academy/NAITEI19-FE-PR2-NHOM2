import "./CommentUnit.scss";
import Rating from "react-rating";
export default function CommentUnit({ comment }) {
  const convertTime = (time) => {
    const date = new Date(time);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <>
      <section className="row">
        <div className="comment col-lg-10">
          <div className="user__name">
            <span>{comment?.User?.username}</span>
          </div>
          <div className="rating">
            <Rating
              initialRating={comment?.rating / 2}
              fractions={2}
              stop={5}
              emptySymbol={<span style={{ color: "#e4e5e9" }}>&#9734;</span>}
              fullSymbol={<span style={{ color: "#fb4226" }}>&#9733;</span>}
              readonly={true}
            />
          </div>
          <div className="comment__content">
            <span>{comment?.comment}</span>
          </div>
          <div className="time">
            <span>{convertTime(comment?.createdAt)}</span>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}
