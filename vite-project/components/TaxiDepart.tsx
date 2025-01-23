import React from "react";

interface TaxiDepartProps {
  onTaxiDepart: () => void;
}

const TaxiDepart: React.FC<TaxiDepartProps> = ({ onTaxiDepart }) => {
  return (
    <div>
      <h2>Taxi Departure</h2>
      <button onClick={onTaxiDepart} className="btn btn-danger">Taxi Depart</button>
    </div>
  );
};

export default TaxiDepart;
