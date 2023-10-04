import React, { useState } from 'react';
import "./FilmCard.scss"
function FilmCard({ id, imageUrl }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className='film__card__ctm'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div >
        <img src={imageUrl} height={274} alt={`Film ${id}`} />
      </div>
      {isHovered && (
        <div className="film-card-overlay">
          <div className="film-card-buttons">
            <button className="button">Đặt vé</button>
            <button className="button">Chi tiết</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilmCard;
