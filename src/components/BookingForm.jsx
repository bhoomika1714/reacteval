import React, { useState, useEffect } from 'react';
import './BookingForm.css';

const BookingForm = ({ room, onBookingSubmit }) => {
  const [numPersons, setNumPersons] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState('');

 
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!startDate || !endDate || numPersons <= 0) {
      setError('Please fill out all fields correctly.');
      return;
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = (end - start) / (1000 * 3600 * 24);
    if (days <= 0) {
      setError('End date should be after start date.');
      return;
    }
    const price = room.price * numPersons * days;
    setTotalPrice(price);
    onBookingSubmit({ room, numPersons, startDate, endDate, totalPrice: price });
  };

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = (end - start) / (1000 * 3600 * 24);
      if (days > 0) {
        setTotalPrice(room.price * numPersons * days);
      }
    }
  }, [startDate, endDate, numPersons, room.price]);

  return (
    <div className="booking-form">
      <h2>Book {room.name}</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="numPersons">Number of Persons</label>
          <input
            type="number"
            id="numPersons"
            value={numPersons}
            onChange={(e) => setNumPersons(e.target.value)}
            min="1"
          />
        </div>
        <div className="input-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            min={today} 
          />
        </div>
        <div className="input-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            min={today} 
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="total-price">
          <p><strong>Total Price: </strong> ₹{totalPrice}</p>
        </div>
        <button type="submit" className="book-button">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
