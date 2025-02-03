import React from "react";
import { Button } from "@mui/material";
import QueImage from "../public/Free-People-Queue-Vector-1.jpg";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
import "../index.css";
interface PassengerQueueProps {
  passengerCount: number;
  onJoinQueue: () => void;
  onLeaveQueue: () => void;
}

const PassengerQueue: React.FC<PassengerQueueProps> = ({
  passengerCount,
  onJoinQueue,
  onLeaveQueue,
}) => {
  return (
    <div className="section">
      <h2 style={{
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  }}>Passengers</h2>
      <div style={{ display: "flex" }}>
        <img
          src={QueImage}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto",
            borderRadius: "8px", // Corrected property name
          }}
        />
      </div>
      <div
        style={{
          justifyContent: "center",
          gap: "10px", // Space between buttons
          marginTop: "20px",
          display: "flex",
        }}
      >
        <Button
          onClick={onJoinQueue}
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
        >
          <ArrowCircleRightSharpIcon
            sx={{ fontSize: 40, color: "white", mr: 1 }}
          />
          Join
        </Button>
        <Button onClick={onLeaveQueue} variant="contained" color="info">
          <ArrowCircleLeftSharpIcon
            sx={{ fontSize: 40, color: "white", mr: 1 }}
          />
          Leave
        </Button>

        <span className="passenger_queue_count count">{passengerCount}</span>
      </div>
    </div>
  );
};

export default PassengerQueue;