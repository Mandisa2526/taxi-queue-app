import React from "react";
import { Button } from "@mui/material";
import QueImage from "../public/minivan.png";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import "../src/index.css";

interface TaxiQueueProps {
  taxiCount: number;
  onJoinTaxiQueue: () => void;
}

const TaxiQueue: React.FC<TaxiQueueProps> = ({
  taxiCount,
  onJoinTaxiQueue,
}) => {
  return (
    <div>
      <h2 style={{
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  }}>Taxis</h2>
      <div style={{ display: "flex" }}>
        <img
          src={QueImage}
          alt="Passengers"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto",
            borderRadius: "8px",
          }}
        />
      </div>
      <div
        className="span"
        style={{
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
          display: "flex",
        }}
      >
        <Button onClick={onJoinTaxiQueue} variant="contained" color="success">
          <ArrowCircleRightSharpIcon
            sx={{ fontSize: 40, color: "white", mr: 1 }}
          />
          Join
        </Button>
        <span className="passenger_queue_count count">{taxiCount}</span>
      </div>
    </div>
  );
};

export default TaxiQueue;
