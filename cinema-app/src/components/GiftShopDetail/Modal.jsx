import { useEffect } from "react";
import "./Modal.scss";
import { createTransaction } from "../../services/historyService";
import { toast } from "react-toastify";
export default function Modal({ trigger, setTrigger, data }) {
  const handleTransaction = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let transaction = {
      name: data?.name,
      idUser: user?.id,
      price: data?.price,
      quantity: data?.count,
      totalPrice: data?.price * data?.count,
      seat: "A1",
      createAt: new Date(),
      screen: "screen2",
      imgUrl: data?.imgUrl,
      address: "Web",
      type: "Gift",
      time: "no limit"
    };
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        toast.error("Bạn cần đăng nhập để thanh toán");
        return;
      }
      const res = await createTransaction(transaction);
      if (res?.EC === 200) {
        toast.success("Thanh toán thành công");
        setTrigger(false);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return trigger ? (
    <div className="modal">
      <div className="modal__content">
        <span className="close" onClick={() => setTrigger(false)}>
          &times;
        </span>
        <div className="transaction container">
          <h3>{data?.name}</h3>
          <div className="price row">
            <span className="price__title col-lg-2">Giá bán online</span>
            <span className="price-amout">| {data?.price}₫</span>

            <br />
            <span className="quantity col-lg-2">Số lượng</span>
            <span className="quantity__number">| {data?.count}</span>
          </div>
          <div className="amount row">
            <span className="amount__title col-lg-2">Thành tiền: </span>
            <span className="amount__number">
              | {data?.price * data?.count}₫
            </span>
          </div>
        </div>
        <div className="button__group">
          <button
            className="button__group__btn"
            onClick={() => setTrigger(false)}
          >
            Quay lại
          </button>
          <button
            className="button__group__btn"
            onClick={() => handleTransaction()}
          >
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
