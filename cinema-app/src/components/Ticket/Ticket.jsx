import { useEffect, useState } from "react";
import { getAllTicket } from "../../services/ticketServices";
import "./Ticket.scss";
import TicketUnit from "./TicketUnit/TicketUnit";
export default function Ticket() {
  const [listTicket1, setListTicket1] = useState([]);
  const [listTicket2, setListTicket2] = useState([]);
  const [listTicket3, setListTicket3] = useState([]);
  useEffect(() => {
    const getListTicket = async () => {
      try {
        const res = await getAllTicket();
        setListTicket1(res.DT.filter((ticket) => +ticket.type === 1));
        setListTicket2(res.DT.filter((ticket) => +ticket.type === 2));
        setListTicket3(res.DT.filter((ticket) => +ticket.type === 3));
      } catch (error) {
        console.log(error);
      }
    };
    getListTicket();
  }, []);

  return (
    <>
      <section className="ticket__container container">
        <div className="promotion">
          <h2>Promotion</h2>
          <div className="promotion__content">
            {listTicket1 &&
              listTicket1.map((ticket) => {
                return <TicketUnit ticket={ticket} />;
              })}
          </div>
        </div>
        <div className="promotion">
          <h2>Phim</h2>
          <div className="promotion__content">
            {listTicket2 &&
              listTicket2.map((ticket) => {
                return <TicketUnit ticket={ticket} />;
              })}
          </div>
        </div>
        <div className="promotion">
          <h2>Đối tác</h2>
          <div className="promotion__content">
            {listTicket3 &&
              listTicket3.map((ticket) => {
                return <TicketUnit ticket={ticket} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
}
