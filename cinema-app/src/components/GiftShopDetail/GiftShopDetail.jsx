import "./GiftShopDetail.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function GiftShopDetail() {
  const gift = useSelector((state) => state.ticket.currentGift);
  const navigate = useNavigate();
  const formatMoney = (money) => {
    return money.toLocaleString();
  };
  const backHandle = () => {
    navigate("/gift-shop");
    };
  const [count, setCount] = useState(10);
  return (
    <>
      <section className="gift__detail">
        <div className="gift__detail__container container">
          <div className="row">
            <div className="col-lg-7 gift__detail__content">
              <div className="gift__detail__content__img">
                <img src={gift?.imgUrl} alt="" />
              </div>
              <div className="gift__detail__descrpition">
                <span className="description">
                  Nội dung sản phẩm |{" "}
                  <span className="description-white">Quà tặng online 1EA</span>
                </span>{" "}
                <br />
                <span className="description">
                  Số lượng mua tối thiếu |{" "}
                  <span className="description-white">Không giới hạn</span>
                </span>
                <br />
                <span className="description">
                  Hạn sử dụng sản phẩm |{" "}
                  <span className="description-white">
                    Quà tặng online 12 tháng
                  </span>
                </span>
              </div>
              <div className="guide">
                <div className="guide__title">Hướng dẫn sử dụng</div>
                <table className="guide__detail">
                  <tbody>
                    <tr>
                      <td className="col-lg-4 guide__left">Use Method</td>
                      <td className="col-lg-8 guide__right">
                        <p>
                          - Phiếu quà tặng có thể đổi thành 1 vé xem phim cho
                          các bộ phim định dang 2D tại quầy vé hoặc đặt vé trực
                          tuyến trong lịch chiếu tại Lotte Cinema
                        </p>
                        <p>
                          - Quý khách vui lòng đổi phiếu quà tặng thành vé xem
                          phim tại quầy vé trước khi vào phòng chiếu.
                        </p>
                        <p>
                          - Khách hàng dùng phiếu quà tặng để mua vé và thanh
                          toán qua App Lotte Cinema sẽ được vào rạp trực tiếp
                          thông qua quầy soát vé.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-lg-4 guide__left">Cancel/Refund</td>
                      <td className="col-lg-8 guide__right">
                        <p>
                          - Phiếu quà tặng dành cho 1 người, không được nhượng
                          bán, quy đổi thành tiền hoặc hàng hóa
                        </p>
                        <p>
                          - Phiếu quà tặng không hỗ trợ đổi trả và hoàn tiền
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-lg-4 guide__left">ETC</td>
                      <td className="col-lg-8 guide__right">
                        <p>
                          - Mọi thông tin chi tiết vui lòng liên hệ qua trung
                          tâm chăm sóc khách hàng.
                        </p>
                        <p>- Hoặc gọi vào số (028) 37752520 Ext(164)</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-5 detail__and__payment">
              <div className="title">
                <h3>{gift?.name}</h3>
              </div>
              <div className="price">
                <span className="price__title">
                  Giá bán online <span className="price-amout">{formatMoney(gift?.price)}₫</span>
                </span>
              </div>
              <div className="counter">
                <span className="counter__title">Số lượng</span>
                <div className="counter__box">
                  <span className="counter__number">{count}</span>
                  <button
                    className="counter__btn"
                    onClick={() => setCount(count - 1)}
                  >
                    -
                  </button>
                  <button
                    className="counter__btn"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="amout">
                <span className="amout__title">Thành tiền: </span>
                <span className="amout__number">
                  {formatMoney(gift?.price * count)}₫
                </span>
              </div>
              <div className="button__group">
                <button className="button__group__btn" onClick={backHandle}>Quay lại</button>
                <button className="button__group__btn">Mua ngay</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      c
    </>
  );
}
