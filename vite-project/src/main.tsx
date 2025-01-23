import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/index.css";
import "./App.css";
import App from "./App.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const appContainerStyle: React.CSSProperties = { // Bootstrap light gray
  fontFamily: "Arial, sans-serif",
  color: "#212529", // Bootstrap text color
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
};

const appWrapperStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(17, 122, 192, 0.86)",
  borderRadius: "8px",
  padding: "2rem",
  width: "100%",
  maxWidth: "600px",
  textAlign: "center",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={appContainerStyle}>
    <div style={appWrapperStyle}>
      <App />
      </div>
      </div>
  </StrictMode>
);
