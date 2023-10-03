import React, { useState,useEffect } from "react";
import "./Cinema.scss";
export default function CinemaDetail({cinema}) {
    const [showNavbar, setShowNavbar] = useState(false);
    const movie = [
      {   movieId : 1 ,
          movieName : 'Biệt đội đánh thuê 4',
          screen : [{screenName : 'Screen 01',
                      time : '12:50',
                      seat : '112/112'
                  },
                  {screenName : 'Screen 01',
                      time : '12:50',
                      seat : '112/112'
                  },
                  {screenName : 'Screen 01',
                      time : '12:50',
                      seat : '112/112'
                  },
                  {screenName : 'Screen 01',
                      time : '12:50',
                      seat : '112/112'
                  },
                  {screenName : 'Screen 01',
                      time : '12:50',
                      seat : '112/112'
                  },
                  {screenName : 'Screen 01',
                      time : '12:50',
                      seat : '112/112'
                  },
                  {screenName : 'Screen 01',
                      time : '12:50',
                      seat : '112/112'
                  },

                  {screenName : 'Screen 01',
                      time : '12:50',
                      seat : '112/112'
                  },
              ]

  },
  {   movieId : 2 ,
      movieName : 'Ác quỷ ma sơ 2',
      screen : [{screenName : 'Screen 01',
                  time : '12:50',
                  seat : '112/112'
              },
              {screenName : 'Screen 01',
                  time : '12:50',
                  seat : '112/112'
              },
              {screenName : 'Screen 01',
                  time : '12:50',
                  seat : '112/112'
              },
              {screenName : 'Screen 01',
                  time : '12:50',
                  seat : '112/112'
              },
              {screenName : 'Screen 01',
                  time : '12:50',
                  seat : '112/112'
              },
              {screenName : 'Screen 01',
                  time : '12:50',
                  seat : '112/112'
              },
              {screenName : 'Screen 01',
                  time : '12:50',
                  seat : '112/112'
              },

              {screenName : 'Screen 01',
                  time : '12:50',
                  seat : '112/112'
              },
          ]

},
{   movieId : 3 ,
  movieName : 'Nhân Duyên Tiền Đình',
  screen : [{screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },

          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
      ]

},
{   movieId : 4 ,
  movieName : 'THE IU CONCERT: GOLDEN HOUR - THỜI KHẮC QUÝ GIÁ',
  screen : [{screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },

          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
      ]

},
{   movieId : 5 ,
  movieName : 'MUÔN KIẾP NHÂN DUYÊN',
  screen : [{screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },

          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
      ]

},
{   movieId : 6 ,
  movieName : 'ĐƠN HÀNG TỪ SÁT NHÂN',
  screen : [{screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          
      ]

},
{   movieId : 7 ,
  movieName : 'HỌA QUỶ',
  screen : [{screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
          {screenName : 'Screen 01',
              time : '12:50',
              seat : '112/112'
          },
      ]

}
  ]
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <>
      <div className="row">
        <div className="cinema-body">
          <div className="cinema-slider">
            <img
              src={cinema.imageUrl}
              alt=""
            />
          </div>
          <div className="cinema-container">
            <div className="cinema-container__detail">
              <div className="cinema-infor">
                <div className="cinema-infor__name">
                  <h2>{cinema.address}</h2>
                </div>
                <ul class="m_etc">
                  <li>
                    <a
                      class="btn_moive"
                      id="aFavorCinemaOpen"
                      title="Xem thông tin chi tiết"
                    >
                      <em>My Cinema Xóa </em>
                      <span>Đóng</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="btn_fee"
                      id="aFeeGuideOpen"
                      title="Xem thông tin chi tiết"
                    >
                      Bảng Giá Vé
                    </a>
                  </li>
                </ul>
              </div>
              <p>
                {cinema.detailAddress}
              </p>
              <span class="p_theater">
                Tổng số phòng chiếu <em id="emTotalScreenCount">{cinema.cinemaRoom}</em> phòng
              </span>
              <span class="p_seat">
                Tổng số chỗ ngồi <em id="emTotalSeatCount">{cinema.seat}</em> ghế
              </span>
              <div  className="showNavbar ? 'navbar visible' : 'navbar'">
                <div className="navbar">
                  <ul class="tab_st07" id="ulSubTap">
                    <li class="on">
                      <a href="#a_cont_cinema">Lịch chiếu phim</a>
                    </li>
                    <li>
                      <a href="#a_map_cont">Vị trí của rạp</a>
                    </li>
                    <li>
                      <a href="#a_transport">Hướng dẫn đi tới rạp</a>
                    </li>
                    <li>
                      <a href="#a_moreinfo">Tiện ích đi kèm</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* this is Calendar  */}
            <div className="cinema-schedule">
              <div className="cinema-notice">
                <ul class="cinema_grad">
                  <li>
                    <span class="grade_all"></span> Mọi đối tượng
                  </li>
                  <li>
                    <span class="grade_13"></span> 13 tuổi trở lên
                  </li>
                  <li>
                    <span class="grade_16"></span> 16 tuổi trở lên
                  </li>
                  <li>
                    <span class="grade_18"></span> 18 tuổi trở lên
                  </li>
                </ul>
              </div>
              <div className="time_inner">
                <div className="time_box time_list02">
                  <div className="time_aType time8099">
                    { movie.map( data =>

                    
                      <dl className="time_line movie11236" key={data.movieId}>
                      <dt>
                        <span class="grade_13"></span>
                        {data.movieName}
                        <a class="btn_detail">
                          <img
                            src="https://www.lottecinemavn.com/LCHS/Image/Btn/btn_time_view.png"
                            alt="Chi tiết phòng hát"
                          />
                        </a>
                      </dt>
                      <dd class="screen200100100100100 film200">
                        <ul class="cineD1">
                          <li>2D </li> <li>Phụ đề</li>
                        </ul>
                        <ul class="theater_time list11236" screendiv="100">
                          {data.screen.map(src =>
                          <li>
                            <a
                              href="javascript:void(0);"
                              class="time_active t0"
                              >
                              <span class="cineD2 brand">
                                <em>{src.screenName}</em>
                              </span>
                              <span class="clock">
                                {src.time}<span> ~ 14:43</span>
                              </span>
                              <span class="ppNum">
                                <em
                                  class="color_brown"
                                  title="Kiểm tra chỗ ngồi của bạn"
                                >
                                  {src.seat}
                                </em>{" "}
                                Ghế 
                              </span>
                            </a>
                          </li>
                              )}
                        </ul>
                      </dd>
                    </dl>
                    )}
                  </div>
                </div>
              </div>
              <div class="map_cont" id="a_map_cont">
                <h4 class="map_tit">
                  Vị trí của rạp - <span id="cinemaName3">Cantavil </span>{" "}
                </h4>
                <div class="contectmap">
                  <div class="site">
                  <iframe style={{width:"100%", height:"500px"}} width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Hanoi+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>

                    <span id="cinemaAddress">
                      Địa chỉ : Tầng 7, Cantavil Premier, Số 1 đường Song Hành,
                      Xa lộ Hà Nội, P.An Phú, Q.2, TP.HCM, Việt Nam
                    </span>
                  </div>
                </div>
              </div>

              <div class="come_road" id="a_transport">
                <div class="trafficTit">
                  <h3>Hướng dẫn đi tới rạp</h3>
                </div>
                <table border={1} className="trafficATb">
                <colgroup>
                <col style={{width : '160px'}} ></col>
                <col style={{width : '820px'}} ></col>
                </colgroup>
                <tbody> 

                  <tr>
                    <th scope="row">
                      <span class="car">Nơi đỗ xe</span>
                    </th>
                    <td>
                      <ul class="trafficMemo" id="cinemaCar">
                        <li>
                          + Xe mô tô: Quý khách có thể giữ xe tại tầng hầm B1
                          của tòa nhà Cantavil Premier phía mặt đường Song Hành
                          (hướng cổng vô nằm cạnh cửa hàng Bread Talk).
                        </li>
                        <li> - Phí giữ xe là 5,000VNĐ.</li>
                        <li></li>
                        <li>
                          + Xe ô tô: Quý khách có thể giữ xe ở phía sau tòa nhà
                          hoặc dưới tầng hầm B2 (hướng cổng vô nằm cạnh cửa hàng
                          Bread Talk).{" "}
                        </li>
                        <li></li>
                        <li>
                          + Tuyến xe buýt: Các tuyến đi ngang Lotte Cinema
                          Cantavil
                        </li>
                        <li>
                          {" "}
                          - Tuyến 06 (Bến xe ĐH Nông Lâm - Bến xe Chợ Lớn)
                        </li>
                        <li>
                          {" "}
                          - Tuyến 56 (Bến xe ĐH Giao Thông Vận Tải - Bến xe Chợ
                          Lớn)
                        </li>
                        <li> - Tuyến 150 (Bến xe Chợ Lớn - Ngã 3 Tân Vạn)</li>
                        <li>
                          {" "}
                          - Tuyến 104 (Bến xe ĐH Nông Lâm - Bến xe An Sương)
                        </li>
                        <li> - Tuyến số 10, 12, 30, ...</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" id="a_moreinfo">
                      <span class="parking">Tiện ích đi kèm</span>
                    </th>
                    <td>
                      <ul class="trafficMemo" id="cinemaParkingInfomation">
                        <li>
                          ****Lotte Cinema Cantavil nằm trong trung tâm mua sắm
                          Cantavil Premier với những tiện lợi đi kèm như:
                        </li>
                        <li> - Siêu thị Big C.</li>
                        <li>
                          {" "}
                          - Nhà Hàng: Lotteria, Cơm tấm California, Don Chicken,
                          D'Maris, Lẩu Công Chúa, ...
                        </li>
                        <li>
                          {" "}
                          - Cà Phê: Highlands Coffee, The Coffee House, ...
                        </li>
                        <li>
                          {" "}
                          - Mua sắm: Aldo, Nike, Vascara, Adidas, Mĩ phẩm
                          Skinfood, The Face shop,Yves Rocher, Casio, PNJ, SJC,
                          Lancome, ...
                        </li>
                        <li> - Điện tử: Xiaomi.</li>
                        <li> - Y tế: Trung tâm tiêm chủng INC.</li>
                        <li> - Tiện ích khác: Play Game, ...</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

