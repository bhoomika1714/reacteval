import React, { useState } from 'react';
import Login from './components/Login';
import RoomDisplay from './components/RoomDisplay';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';

const rooms = [
  { name: 'Deluxe Room', price: 5000, description: 'A luxurious room with all amenities.', facilities: ['Air Conditioning', 'Free Wi-Fi', 'Swimming Pool'] },
  { name: 'Standard Room', price: 3000, description: 'A comfortable room with essential facilities.', facilities: ['Free Wi-Fi', 'TV'] },
];

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleLoginSuccess = () => setIsLoggedIn(true);

  const handleRoomSelect = (room) => setSelectedRoom(room);

  const handleBookingSubmit = (details) => setBookingDetails(details);

  return (
    <div className="app">
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : bookingDetails ? (
        <BookingConfirmation bookingDetails={bookingDetails} />
      ) : selectedRoom ? (
        <BookingForm room={selectedRoom} onBookingSubmit={handleBookingSubmit} />
      ) : (
        <RoomDisplay rooms={rooms} onRoomSelect={handleRoomSelect} />
      )}
    </div>
  );
};

export default App;