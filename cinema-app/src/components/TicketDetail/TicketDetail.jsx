import { useSelector } from "react-redux";
import "./TicketDetail.scss";
export default function TicketDetail() {
  const ticket = useSelector((state) => state.ticket.currentTicket);
  return (
    <>
      <section className="ticket__detail">
        <div className="detail__container container">
          
            <div className="title">
              <h2>{ticket?.title}</h2>
            </div>
            <div className="body">
            <div className="detail__img">
              <img src={ticket?.imgUrl} alt={ticket?.title} />
            </div>
            <div className="content">
              <p>{ticket?.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
