import React from 'react'
import { useState, useEffect, useRef } from 'react';
import "./HeroBanner.scss"
const leftBannerImages = ["https://i.ibb.co/wWmPnLh/9c05c0a02a1944d295ef7a5ae01c0aa2.jpg",
  "https://i.ibb.co/mBkWTyf/40f014443da64873ba2ac714cdbc30dd.png",
  "https://i.ibb.co/3hLx0jk/51a7bb18cf3443648dcfcc00cd2573b3.png",
  "https://i.ibb.co/5RHgmKv/ab6c6ae2304846cbb0df6ee4b1266f38.png",
  "https://i.ibb.co/F4sjSKf/b7ef5584f96f4427aee9ef3e7884614d.jpg",
  "https://i.ibb.co/N6vFrm8/ea8a7bea90bd4070bf8cfc55374f7bda.jpg",
  "https://i.ibb.co/3hzm1xQ/ef18952d56e3492c8baefa75c3591821.jpg"]
const maxFilmImages = 9
function HeroBanner({ listFilm }) {
  const [currentSlider, setCurrentSlider] = useState("left")
  const [leftImageId, setLeftImageId] = useState(0)
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const currentLeftImageRef = useRef(null);
  const nextLeftImageRef = useRef(null);
  const [rightImageId, setRightImageId] = useState(0)
  const [images2, setImages2] = useState([]);
  const currentRightImageRef = useRef(null);
  const nextRightImageRef = useRef(null);
  const ctnRef = useRef(null);
  const [isButtonClicking, setIsButtonClicking] = useState(false)

  useEffect(() => {
    const filmImages = listFilm.slice(0, maxFilmImages).map(e => {
      const img = new Image();
      img.src = e.imgUrl;
      return img
    })
    Promise.all(filmImages.map((img) => img.decode()))
      .then(() => {
        setImages2(filmImages);
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
      });
    const preloadImages = leftBannerImages.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
    Promise.all(preloadImages.map((img) => img.decode()))
      .then(() => {
        setImages(preloadImages);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
      });
  }, []);

  const handleLeftClick = () => {
    if (currentSlider === "right") {
      setCurrentSlider("left")
      ctnRef.current.style.transform = 'translateX(0)'
    }
    else if (isButtonClicking === false) {
      setIsButtonClicking(true)
      currentLeftImageRef.current.style.transition = "transform 0.5s ease-in-out"
      currentLeftImageRef.current.style.transform = `translateX(${0}%)`
      nextLeftImageRef.current.style.transition = "transform 0.5s ease-in-out"
      nextLeftImageRef.current.style.transform = `translateX(${0}%)`
      setTimeout(() => {
        currentLeftImageRef.current.style.transition = "none"
        currentLeftImageRef.current.style.transform = `translateX(${-100}%)`
        nextLeftImageRef.current.style.transition = "none"
        nextLeftImageRef.current.style.transform = `translateX(${-100}%)`
        setLeftImageId((leftImageId + 1) % leftBannerImages.length)
        setIsButtonClicking(false)
      }, 550);
    }
  };

  const handleRightClick = () => {
    if (currentSlider === "left") {
      setCurrentSlider("right")
      ctnRef.current.style.transform = 'translateX(-700px)'
    }
    else if (isButtonClicking === false) {
      setIsButtonClicking(true)
      currentRightImageRef.current.style.transition = "transform 0.5s ease-in-out"
      currentRightImageRef.current.style.transform = `translateX(${-100}%)`
      nextRightImageRef.current.style.transition = "transform 0.5s ease-in-out"
      nextRightImageRef.current.style.transform = `translateX(${-100}%)`
      setTimeout(() => {
        currentRightImageRef.current.style.transition = "none"
        currentRightImageRef.current.style.transform = `translateX(${0}%)`
        nextRightImageRef.current.style.transition = "none"
        nextRightImageRef.current.style.transform = `translateX(${0}%)`
        setRightImageId((rightImageId + 1) % maxFilmImages)
        setIsButtonClicking(false)
      }, 550);
    }
  };

  return (
    <div className="app">
      <div className="container" ref={ctnRef}>
        <div className="left"  >
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className='left__image__ctn'>
              <div ref={nextLeftImageRef} className="left-image" style={{ backgroundImage: `url(${images[(leftImageId + 1) % leftBannerImages.length].src})` }}></div>
              <div ref={currentLeftImageRef} className="left-image" style={{ backgroundImage: `url(${images[leftImageId].src})` }}></div>
            </div>
          )}
        </div>
        <div className='middle'>
          <div className='middle__title'>BOX OFFICE</div>
          <div className='list__film'>
            {listFilm.slice(0, maxFilmImages).map((e, id) => (
              <div className='film__row' key={id}>
                <div className='film__name' ><a href={`film/${e.id}`}>{id + 1}.{e.name}</a></div>
                <div className='film__info' >
                  {e.time}Phút | {e.timeStart}
                </div>
              </div>
            ))}
          </div>
          <a className='buyTicket' href='/ticket'><div >Mua vé ngay</div></a>
        </div>
        <div className="right"  >
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className='right__image__ctn'>
              <div
                ref={currentRightImageRef}
                className="right-image"
                style={{ backgroundImage: `url(${images2[rightImageId].src})` }}>
              </div>
              <div
                ref={nextRightImageRef}
                className="right-image"
                style={{ backgroundImage: `url(${images2[(rightImageId + 1) % maxFilmImages].src})` }}>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="control__buttons">
        <button onClick={handleLeftClick}>
          <span className="material-symbols-outlined">
            arrow_back_ios
          </span>
        </button>
        <button onClick={handleRightClick}>
          <span className="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </button>
      </div>
    </div>
  );
}

export default HeroBanner
