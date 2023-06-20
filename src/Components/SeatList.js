import React from 'react';
import PropTypes from 'prop-types';


const SeatList = ({ seats, selectedSeats, onClick }) => {
  const handleSeatClick = (seat) => {
    onClick(seat);
  };

  return (
    <div className="seat-list">
      {seats.map((seat) => (
        <Seat
          key={seat.id}
          seat={seat}
          onClick={handleSeatClick}
          isSelected={selectedSeats.includes(seat.id)}
        />
      ))}
    </div>
  );
};

SeatList.propTypes = {
  seats: PropTypes.array.isRequired,
  selectedSeats: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SeatList;
