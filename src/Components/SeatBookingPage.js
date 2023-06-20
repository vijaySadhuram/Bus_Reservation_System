import React, { useState } from 'react';
import Seat from './Seat.js';
import './Seat.css';

const SeatBookingPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSeatSelection = (seatNumber, price) => {
    const seatIndex = selectedSeats.findIndex(
      (seat) => seat.seatNumber === seatNumber
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
    <div className='newContainer'>
      <div className="seat-types-container">
        <div className="seat-types">
          <div className="seat-type available">
            <div className="seat-type-color"></div>
            <span>Available</span>
          </div>
          <div className="seat-type available-women">
            <div className="seat-type-color"></div>
            <span>Available only for women</span>
          </div>
          <div className="seat-type selected-by-you">
            <div className="seat-type-color"></div>
            <span>Selected by you</span>
          </div>
          <div className="seat-type booked">
            <div className="seat-type-color"></div>
            <span>Booked by others</span>
          </div>
          <div className="seat-type booked-women">
            <div className="seat-type-color"></div>
            <span>Booked by a female passenger</span>
          </div>
        </div>
      </div>

      <div className="seat-grid-container">
        <div className="seat-grid">
          <div className="deck-container">
            <h2>Lower Deck</h2>
            <div className="lower-deck">
              {Array.from({ length: 5 }, (_, rowIndex) => (
                <div key={rowIndex} className="seat-row">
                  {Array.from({ length: 3 }, (_, columnIndex) => (
                    <Seat
                      key={`L${columnIndex + 1}-${rowIndex + 1}`}
                      seatNumber={`L${columnIndex + 1}-${rowIndex + 1}`}
                      seatType="available"
                      price={10}
                      onClick={handleSeatSelection}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="deck-container">
            <h2>Upper Deck</h2>
            <div className="upper-deck">
              {Array.from({ length: 5 }, (_, rowIndex) => (
                <div key={rowIndex} className="seat-row">
                  {Array.from({ length: 3 }, (_, columnIndex) => (
                    <Seat
                      key={`U${columnIndex + 1}-${rowIndex + 1}`}
                      seatNumber={`U${columnIndex + 1}-${rowIndex + 1}`}
                      seatType="available"
                      price={10}
                      onClick={handleSeatSelection}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="selected-seats-container">
        <h2>Selected Seats:</h2>
        <div className="selected-seats">
          {selectedSeats.map((seat) => (
            <p key={seat.seatNumber}>{seat.seatNumber}</p>
          ))}
          <p>
            Total Amount: {selectedSeats.length} seat(s) | {totalPrice}₹
          </p>
        </div>
      </div>

      <button>Continue</button>
    </div>
  );
};

export default SeatBookingPage;
