import React from "react";
import { Button } from "@mui/material";
import ArrowImage from "../public/arrow.png";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import "../src/index.css";

interface TaxiDepartProps {
  onTaxiDepart: () => void;
}

const TaxiDepart: React.FC<TaxiDepartProps> = ({ onTaxiDepart }) => {
  return (
    <div className="section">
      <h2 style={{
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  }}>Taxi Departure</h2>
      <div style={{ display: "flex" }}>
        <img
          src={ArrowImage}
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
        style={{
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Button onClick={onTaxiDepart} variant="contained" color="secondary">
          <DepartureBoardIcon sx={{ fontSize: 60, color: "white", mr: 1 }} />
          Depart
        </Button>
      </div>
    </div>
  );
};

export default TaxiDepart;
