import { getComments } from "../../../services/commentServices";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import CommentUnit from "./CommentUnit/CommentUnit";
export default function ListComment(props) {
  const filmId = useSelector((state) => state.film.currentFilm.id);
  const [page, setPage] = useState(1);
  const [listComment, setListComment] = useState([]);
  const [totalPage, setTotalPage] = useState(1); // [1,2,3,4,5
  const limit = 5;
  useEffect(() => {
    const getComment = async () => {
      try {
        const res = await getComments(limit, page, filmId);
        setTotalPage(Math.ceil(+res.DT.count/limit));
        setListComment(res.DT.rows);
      } catch (error) {
        console.log(error);
      }
    };
    getComment();
  }, []);
  useEffect(() => {
    const getComment = async () => {
      try {
        const res = await getComments(limit, page, filmId);
        console.log(res.DT.rows);
        setTotalPage(Math.ceil(+res.DT.count/limit));
        setListComment(res.DT.rows);
      } catch (error) {
        console.log(error);
      }
    };
    getComment();
  }, [page,props.isReload]);
  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };
  return (
    <>
      <section className="list__comment">
        {listComment &&
          listComment?.map((comment, index) => (
            <CommentUnit key={index} comment={comment} />
          ))}
      </section>
      <ReactPaginate
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={totalPage}
        previousLabel="< "
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel=".."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        style={{ color: "black" }}
      />
    </>
  );
}
