import "./History.scss";
import { getALlTransaction } from "../../services/historyService";
import { useEffect, useState } from "react";
export default function History() {
  const [listTransaction, setListTransaction] = useState([]);
  const convert = (date) => {
    let time = new Date(date);
    let day = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
  };
  const getAmount = () => {
    let amount = 0;
    listTransaction.forEach((transaction) => {
      amount += transaction.totalPrice * 1.1;
    });
    return amount;
  };
  useEffect(() => {
    const getTransaction = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const res = await getALlTransaction(user.id);
        setListTransaction(res.DT);
      } catch (error) {
        console.log(error);
      }
    };
    getTransaction();
  }, []);
  return (
    <>
      <section className="history__ctn">
        <div className="container">
          <h3>Lịch sử thanh toán</h3>
          <div className="list__transaction">
            {listTransaction &&
              listTransaction.map((transaction) => (
                <>
                  <div className="transaction__unit">
                    <div className="trans__ing">
                      <img src={transaction?.imgUrl} alt="" />
                    </div>
                    <div className="transaction__info row">
                      <span className="content__left col-lg-2">Ngày mua: </span>
                      <span className="content__right">
                        {convert(transaction?.createdAt)}
                      </span>
                      <br />
                      <span className="content__left col-lg-2">
                        Tên sản phẩm:{" "}
                      </span>
                      <span className="content__right">
                        {transaction?.name}
                      </span>
                      <br />
                      <span className="content__left col-lg-2">
                        Tiền trên sản phẩm:{" "}
                      </span>
                      <span className="content__right">
                        {transaction?.price.toLocaleString()}
                      </span>
                      <br />
                      <span className="content__left col-lg-2">Số lượng: </span>
                      <span className="content__right">
                        {transaction?.quantity}
                      </span>
                      <br />
                      <span className="content__left col-lg-2">
                        Tổng tiền:{" "}
                      </span>
                      <span className="content__right">
                        {Math.floor(
                          transaction?.totalPrice * 1.1
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </>
              ))}
          </div>
          <div>
            <h3>Tổng tiền: {Math.floor(getAmount()).toLocaleString()}</h3>
          </div>
        </div>
      </section>
    </>
  );
}
