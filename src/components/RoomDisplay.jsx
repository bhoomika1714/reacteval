import React from 'react';
import './RoomDisplay.css';

const RoomDisplay = ({ rooms, onRoomSelect }) => {
  return (
    <div className="room-display">
      <h2>Available Rooms</h2>
      <div className="rooms-list">
        {rooms.map((room, index) => (
          <div key={index} className="room-card" onClick={() => onRoomSelect(room)}>
            <h3>{room.name}</h3>
            <p>{room.description}</p>
            <p><strong>Price:</strong> ₹{room.price} per night</p>
            <p><strong>Facilities:</strong> {room.facilities.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomDisplay;