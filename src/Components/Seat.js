import React, { useState } from 'react';

const Seat = ({ seatNumber, deck, seatType, price, onClick }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    onClick(seatNumber, price);
  };

  return (
    <div
      className={`seat ${selected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <span className="seat-number">{seatNumber}</span>
      <span className="seat-details">{seatType}</span>
      {deck && <span className="seat-deck">{deck}</span>}
    </div>
  );
};

export default Seat;
