import React, { useState, useEffect } from "react";
import { TaxiQueue as TaxiQueueLogic, ITaxiQueue } from "../src/taxi-queue";
import PassengerQueue from "../components/PassengerQueue";
import TaxiQueue from "../components/TaxiQueue";
import TaxiDepart from "../components/TaxiDepart";
import "./index.css";

const taxiQueueLogic: ITaxiQueue = TaxiQueueLogic();

const TaxiQueueComponent: React.FC = () => {
  const [passengerCount, setPassengerCount] = useState<number>(
    taxiQueueLogic.queueLength()
  );
  const [taxiCount, setTaxiCount] = useState<number>(
    taxiQueueLogic.taxiQueueLength()
  );
  const [errorMessage, setMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Load initial data from localStorage
  useEffect(() => {
    const savedPassengerCount = localStorage.getItem("passengerCount");
    const savedTaxiCount = localStorage.getItem("taxiCount");

    setPassengerCount(
      savedPassengerCount ? parseInt(savedPassengerCount, 10) : 0
    );
    setTaxiCount(savedTaxiCount ? parseInt(savedTaxiCount, 10) : 0);
  }, []);

  // Save to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem("passengerCount", passengerCount.toString());
    localStorage.setItem("taxiCount", taxiCount.toString());
  }, [passengerCount, taxiCount]);

  const handleJoinQueue = () => {
    taxiQueueLogic.joinQueue();
    setPassengerCount(taxiQueueLogic.queueLength());
  };

  const handleLeaveQueue = () => {
    const leaveQueueMsg = taxiQueueLogic.leaveQueue();
    setMessage(leaveQueueMsg);
    setPassengerCount(taxiQueueLogic.queueLength());
    setTimeout(() => setMessage(null), 3000);
  };

  const handleJoinTaxiQueue = () => {
    taxiQueueLogic.joinTaxiQueue();
    setTaxiCount(taxiQueueLogic.taxiQueueLength());
  };

  const handleTaxiDepart = () => {
    const departureMessage = taxiQueueLogic.taxiDepart();
    if (departureMessage) {
      if (departureMessage.includes("successfully")) {
        setSuccessMessage(departureMessage);
        setTimeout(() => setSuccessMessage(null), 3000);
      } else {
        setMessage(departureMessage);
        setTimeout(() => setMessage(null), 3000);
      }
    }

    setPassengerCount(taxiQueueLogic.queueLength());
    setTaxiCount(taxiQueueLogic.taxiQueueLength());
  };

  // Reset the queues and clear messages
  const handleReset = () => {
    taxiQueueLogic.resetQueues();
    setPassengerCount(taxiQueueLogic.queueLength());
    setTaxiCount(taxiQueueLogic.taxiQueueLength());
    setMessage(null);
    setSuccessMessage(null);
  };

  return (
    <>
      {errorMessage && (
        <div className="alert alert-danger text-center" role="alert">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="alert alert-success text-center" role="alert">
          {successMessage}
        </div>
      )}
      <div className="container">
        <div className="queue-section passenger-section">
          {/* Passenger Queue Component */}
          <PassengerQueue
            passengerCount={passengerCount}
            onJoinQueue={handleJoinQueue}
            onLeaveQueue={handleLeaveQueue}
          />
        </div>
        <div className="queue-section taxi-section">
          {/* Taxi Queue Component */}
          <TaxiQueue
            taxiCount={taxiCount}
            onJoinTaxiQueue={handleJoinTaxiQueue}
          />
        </div>
        <div className="queue-section departure-section">
          {/* Taxi Depart Component */}
          <TaxiDepart onTaxiDepart={handleTaxiDepart} />
        </div>
      </div>
      <div className="reset-section">
          <button onClick={handleReset} className="btn btn-warning">
            Reset All
          </button>
        </div>
    </>
  );
};

export default TaxiQueueComponent;
