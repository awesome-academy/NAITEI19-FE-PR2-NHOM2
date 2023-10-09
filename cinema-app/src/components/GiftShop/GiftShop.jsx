import "./GiftShop.scss";
import GiftShopUnit from "./GiftShopUnit/GiftShopUnit";
import FilmSlice from "../filmbody/FilmSlider/FilmSlider";
import { getAllGift } from "../../services/ticketServices";
import { useEffect, useState } from "react";
export default function GiftShop() {
  const [listGift, setListGift] = useState([]);
  useEffect(() => {
    const getGift = async () => {
      try {
        const res = await getAllGift();
        setListGift(res.DT.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    getGift();
  }, []);
  return (
    <>
      <FilmSlice />
      <section className="gift">
        <div className="gift__container container">
          <div className="gift__title">Bán chạy nhất</div>
          <div className="gift__box">
            {listGift &&
              listGift.map((gift, index) => (
                <GiftShopUnit gift={gift} />
              ))}
          </div>
        </div>
        <div className="gift__container container">
          <div className="gift__title">Danh Mục Hàng Bán</div>
          <div className="gift__box">
            {listGift &&
              listGift.map((gift, index) => (
                <GiftShopUnit gift={gift} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
