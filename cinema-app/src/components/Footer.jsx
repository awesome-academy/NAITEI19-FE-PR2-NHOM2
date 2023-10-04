import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
      <img src="logo_footer.gif" alt="footer logo" />
      <div className='footer__link'>
        <Link to={"/member-clause"}>Chính Sách Khách Hàng Thường Xuyên</Link>
        <div >|</div>
        <Link to={"/individual-infomation-handling-policy"}>Chính Sách Bảo Mật Thông Tin</Link>
        <div >|</div>
        <Link to={"/terms-of-use"}>Điều Khoản Sử Dụng</Link>
      </div>
      <p className='footer-content'>CÔNG TY TNHH LOTTE CINEMA VIỆT NAM
        <br />
        Giấy CNĐKDN: 0302575928, đăng ký lần đầu ngày 02/05/2008, đăng ký thay đổi lần thứ 10 ngày 30/03/2018, cấp bởi Sở KHĐT Thành phố Hồ Chí Minh
        <br />
        Địa chỉ: Tầng 3, TTTM Lotte, số 469 đường Nguyễn Hữu Thọ, Phường Tân Hưng, Quận 7, TPHCM, Việt Nam
        <br />
        Hotline: (028) 3775 2524
        <br />
        COPYRIGHT © LOTTECINEMAVN.COM - ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default Footer
