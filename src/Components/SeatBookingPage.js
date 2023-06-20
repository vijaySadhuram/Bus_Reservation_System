import React, { useState } from 'react';
import Seat from './Seat';

const SeatBookingPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSeatSelection = (seatNumber, price) => {
    const seatIndex = selectedSeats.findIndex(
      seat => seat.seatNumber === seatNumber
    );
    if (seatIndex !== -1) {
      const updatedSeats = [...selectedSeats];
      updatedSeats.splice(seatIndex, 1);
      setSelectedSeats(updatedSeats);
      setTotalPrice(totalPrice - price);
    } else {
      const newSeat = { seatNumber, price };
      setSelectedSeats([...selectedSeats, newSeat]);
      setTotalPrice(totalPrice + price);
    }
  };

  return (
    <div>
      <div className="seat-grid">
        <h2>Lower Deck</h2>
        <div className="lower-deck">
          {Array.from({ length: 5 }, (_, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              {Array.from({ length: 3 }, (_, columnIndex) => (
                <Seat
                  key={columnIndex}
                  seatNumber={`L${columnIndex + 1}-${rowIndex + 1}`}
                  deck="Lower"
                  seatType="available"
                  price={10}
                  onClick={handleSeatSelection}
                />
              ))}
            </div>
          ))}
        </div>

        <h2>Upper Deck</h2>
        <div className="upper-deck">
          {Array.from({ length: 5 }, (_, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              {Array.from({ length: 3 }, (_, columnIndex) => (
                <Seat
                  key={columnIndex}
                  seatNumber={`U${columnIndex + 1}-${rowIndex + 1}`}
                  deck="Upper"
                  seatType="available"
                  price={10}
                  onClick={handleSeatSelection}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="selected-seats">
        <h2>Selected Seats:</h2>
        {selectedSeats.map(seat => (
          <p key={seat.seatNumber}>{seat.seatNumber}</p>
        ))}
        <p>
          Total Amount: {selectedSeats.length} seats | {totalPrice}₹
        </p>
      </div>

      <button>Continue</button>
    </div>
  );
};

export default SeatBookingPage;
