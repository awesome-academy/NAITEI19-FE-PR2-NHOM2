import "./TicketUnit.scss";
import {useDispatch} from 'react-redux';
import { setTicket } from "../../../redux/slices/ticketSlice";
import {useNavigate} from 'react-router-dom';
export default function TicketUnit({ ticket}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dayConvert = (time) => {
        const date = new Date(time);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    const handleClicked = () => {
        dispatch(setTicket(ticket));
        navigate('/event-detail');
    }
  return (
    <>
      <section className="ticket">
        <div className="ticket__img">
            <img src={ticket?.icon} alt={ticket?.title} onClick={()=>handleClicked()} />
        </div>
        <div className="time">
            <span>{dayConvert(ticket?.timeStart)}~{dayConvert(ticket?.timeEnd)}</span>
        </div>
      </section>
    </>
  );
}
