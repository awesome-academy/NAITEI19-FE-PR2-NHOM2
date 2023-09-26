import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__primary'>
        <div className='navbar__primary__left'>
          <div className='navbar__item'>
            <img src="lotte_app_logo.png" alt="install app" width={16} height={16} />
            <div>Lotte Cinema APP</div>
          </div>
          <Link target='_blank' to={"https://www.facebook.com/lottecinema/"} className='navbar__item'>
            <img src='facebook_app_logo.png' alt="Facebook fan page" width={16} height={16} />
            <div>Lotte Cinema Facebook</div>
          </Link>
        </div>
        <div className="navbar__primary__right">
          <Link to={"/login"}>Đăng nhập</Link>
          <Link to={"/signup"}>Đăng ký</Link>
          <Link to={"/vip-member"}>Thẻ thành viên</Link>
          <Link to={"/customer-service-center"}>Hỗ trợ khách hàng</Link>
        </div>
      </div>
      <div className='navbar__second'>
        <Link to={"/"}>
          <img src={"lotte_logo.svg"} alt="logo" />
        </Link>
      </div>
      <div className='navbar__third'>
        <Link to="/gift-shop">SHOP QUÀ TẶNG</Link>
        <div>|</div>
        <Link to="/ticket">MUA VÉ</Link>
        <div>|</div>
        <Link to="/movie-list">PHIM</Link>
        <div>|</div>
        <Link to="/cinema">RẠP CHIẾU PHIM</Link>
        <div>|</div>
        <Link to="/event">KHUYẾN MÃI</Link>
      </div>
    </div>
  )
}

export default Navbar
