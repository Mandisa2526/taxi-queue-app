import React, { useState, useEffect } from "react";
import { Modal, Box, Typography } from "@mui/material";
import { TaxiQueue as TaxiQueueLogic, ITaxiQueue } from "../src/taxi-queue";
import PassengerQueue from "../components/PassengerQueue";
import TaxiQueue from "../components/TaxiQueue";
import TaxiDepart from "../components/TaxiDepart";
import "./index.css";
import { Button } from "@mui/material";
import RestartAltSharpIcon from "@mui/icons-material/RestartAltSharp";

const taxiQueueLogic: ITaxiQueue = TaxiQueueLogic();

const TaxiQueueComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [passengerCount, setPassengerCount] = useState<number>(
    taxiQueueLogic.queueLength()
  );
  const [taxiCount, setTaxiCount] = useState<number>(
    taxiQueueLogic.taxiQueueLength()
  );
  const [errorMessage, setMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    const savedPassengerCount = localStorage.getItem("passengerCount");
    const savedTaxiCount = localStorage.getItem("taxiCount");

    setPassengerCount(
      savedPassengerCount ? parseInt(savedPassengerCount, 10) : 0
    );
    setTaxiCount(savedTaxiCount ? parseInt(savedTaxiCount, 10) : 0);
  }, []);

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

  const handleReset = () => {
    taxiQueueLogic.resetQueues();
    setPassengerCount(taxiQueueLogic.queueLength());
    setTaxiCount(taxiQueueLogic.taxiQueueLength());
    setMessage(null);
    setSuccessMessage(null);
    setOpen(false);
  };

  return (
    <div className="content">
      <h1
        style={{
          fontSize: "5rem",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Taxi Que App
      </h1>
      {errorMessage && (
        <div
          className="alert alert-danger text-center alert-custom"
          role="alert"
        >
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div
          className="alert alert-success text-center alert-custom"
          role="alert"
        >
          {successMessage}
        </div>
      )}
      <div className="container">
        <div className="queue-section passenger-section">
          <PassengerQueue
            passengerCount={passengerCount}
            onJoinQueue={handleJoinQueue}
            onLeaveQueue={handleLeaveQueue}
          />
        </div>
        <div className="queue-section taxi-section">
          <TaxiQueue
            taxiCount={taxiCount}
            onJoinTaxiQueue={handleJoinTaxiQueue}
          />
        </div>
        <div className="queue-section departure-section">
          <TaxiDepart onTaxiDepart={handleTaxiDepart} />
        </div>
      </div>
      <div className="reset-section">
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          color="warning"
        >
          <RestartAltSharpIcon sx={{ fontSize: 40, color: "white", mr: 1 }} />
          Reset
        </Button>
      </div>

      {/* Modal for Reset Confirmation */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="reset-confirmation-title"
        aria-describedby="reset-confirmation-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography id="reset-confirmation-title" variant="h6">
            Confirm Reset
          </Typography>
          <Typography id="reset-confirmation-description" sx={{ mt: 2 }}>
            Are you sure you want to reset the queues? This action cannot be
            undone.
          </Typography>
          <div style={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleReset}
              style={{ marginRight: "10px" }}
            >
              Yes, Reset
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default TaxiQueueComponent;
