import React from "react";

interface TaxiQueueProps {
  taxiCount: number;
  onJoinTaxiQueue: () => void;
}

const TaxiQueue: React.FC<TaxiQueueProps> = ({ taxiCount, onJoinTaxiQueue }) => {
  return (
    <div>
      <h2>Taxis</h2>
      <p>Taxis in queue: {taxiCount}</p>
      <button onClick={onJoinTaxiQueue} className="btn btn-success">Join Taxi Queue</button>
    </div>
  );
};

export default TaxiQueue;
