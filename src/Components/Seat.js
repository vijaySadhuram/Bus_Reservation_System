import React, { useState } from 'react';

const Seat = ({ seatNumber, seatType, price, onClick }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onClick(seatNumber, price);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`seat ${isSelected ? 'selected' : ''} ${seatType}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {seatNumber}
      {isHovered && <span className="price">{price}₹</span>}
    </div>
  );
};

export default Seat;
