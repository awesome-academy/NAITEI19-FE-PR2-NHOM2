import "./GiftShopUnit.scss";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setGift } from "../../../redux/slices/ticketSlice";
export default function GiftShopUnit({ gift }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleGift = () => {
    dispatch(setGift(gift));
    navigate('/gift-shop-detail')
  };
  return (
    <>
      <div className="gift__unit">
        <div className="gift__img">
          <img src={gift.imgUrl} alt="" onClick={()=>handleGift()}/>
        </div>
        <div className="gift__info">
          <div className="gift__name">{gift.name}</div>
          <div className="gift__script">Hạn sử dụng sản phẩm | 12 tháng</div>
          <div className="gift__price">
            <span>
              Giá bán online{" "}
              <span className="gift__price--red">{gift.price}đ</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
