import React from "react";
import "./Cinema.scss";
import { useState } from "react";
import CinemaDetail from "./CinemaDetail.jsx";
export default function Cinema(){
    const data = [
        {id : 1 ,
        address : 'Bắc Giang',
        detailAddress : 'TTTM GO, xã tân tiến, thành phố Bắc Giang,Việt Nam',
        seat : 504 ,
        cinemaRoom : 3,
        zone : 'ĐB Sông Hồng',
        imageUrl  : '	https://media.lottecinemavn.com/Media/WebAdmin/b88fe34abebf46feb889c9fee809470f.jpg'
        
    },
    {id : 2 ,
        address : 'Nam Định',
        detailAddress : 'Xã Hải Tiến, huyện Hải Hậu, tỉnh Nam Định,Việt Nam',
        seat : 308,
        cinemaRoom : 4,
        zone : 'ĐB Sông Hồng',
        imageUrl  : 'https://media.lottecinemavn.com/Media/WebAdmin/2f1de208230e45c78b230f72322687ed.jpg'
    },
    {id : 3 ,
        address : 'Bắc Ninh',
        detailAddress : 'TTTM vincom, phường Suối Hoa, thành phố Bắc Ninh, Bắc Ninh,Việt Nam',
        seat : 504 ,
        cinemaRoom : 3,
        zone : 'ĐB Sông Hồng',
        imageUrl  : 'https://media.lottecinemavn.com/Media/WebAdmin/1b5dd078336e480388adc8cd457403d1.jpg'
    },
    {id : 4 ,
        address : 'Hải Phòng',
        detailAddress : 'TTTM GO, xã tân tiến, thành phố Bắc Giang,Việt Nam',
        seat : 504 ,
        cinemaRoom : 3,
        zone : 'ĐB Sông Hồng',
        imageUrl  : '	https://media.lottecinemavn.com/Media/WebAdmin/1b5dd078336e480388adc8cd457403d1.jpg'
    },
     {id : 5 ,
        address : 'Hà Nội',
        detailAddress : 'TTTM BigC, Trần Duy Hưng, Cầu Giấy,Hà Nội, Việt Nam',
        seat : 504 ,
        cinemaRoom : 3,
        zone : 'ĐB Sông Hồng',
        imageUrl  : 'https://media.lottecinemavn.com/Media/WebAdmin/86a9cc72b1894fb8a5e6927b6ffeb7aa.jpg'
    },
    {id : 6 ,
        address : 'Tp. Hồ Chí Minh',
        detailAddress : 'Thủ Dầu, quận 1 , thành phố Hồ Chí Minh,Việt Nam',
        seat : 504 ,
        cinemaRoom : 3,
        zone : 'ĐB Sông Hồng',
        imageUrl  : '	https://media.lottecinemavn.com/Media/WebAdmin/8b72f4aa7a234e178d9dd8eaf9e30ab5.jpg'
    },
    
    ]
    const [selectedCinema, setSelectedCinema] = useState(data[0]);
    function selectAddress(data){
       setSelectedCinema(data)
    }
    return(
        <>
        <div className="row">          
            <div className="row w-75 d-flex flex-row navbar-address"> 
           { data.map(cinemaDetail => (
               <div key={cinemaDetail.id} className="col-2 navbar-item" onClick={() => selectAddress(cinemaDetail)}>    
                            {cinemaDetail.address}
                </div>
            
           ))}
        </div>
        <div className="cinema-body">
            <CinemaDetail cinema = {selectedCinema} />
        </div>
        <div className="col h-75 flex-row d-flex justify-content-center">
            
        </div>
           </div>
        </>
    )
}

