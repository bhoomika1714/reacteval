import React from 'react';
import './BookingConfirmation.css';

const BookingConfirmation = ({ bookingDetails }) => {
  return (
    <div className="confirmation-page">
      <h2>Booking Confirmation</h2>
      <p><strong>Room:</strong> {bookingDetails.room.name}</p>
      <p><strong>Number of Persons:</strong> {bookingDetails.numPersons}</p>
      <p><strong>Check-in Date:</strong> {bookingDetails.startDate}</p>
      <p><strong>Check-out Date:</strong> {bookingDetails.endDate}</p>
      <p><strong>Total Price:</strong> ₹{bookingDetails.totalPrice}</p>
    </div>
  );
};

export default BookingConfirmation;