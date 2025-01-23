import React from "react";

interface PassengerQueueProps {
  passengerCount: number;
  onJoinQueue: () => void;
  onLeaveQueue: () => void;
}

const PassengerQueue: React.FC<PassengerQueueProps> = ({ passengerCount, onJoinQueue, onLeaveQueue }) => {
  return (
    <div className="section">
      <h2>Passengers</h2>
      <p>Passengers in queue: {passengerCount}</p>
      <button onClick={onJoinQueue} className="btn btn-primary">Join Passenger Queue</button>
      <button onClick={onLeaveQueue} className="btn btn-secondary">Leave Passenger Queue</button>
    </div>
  );
};

export default PassengerQueue;
