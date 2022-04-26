import React from "react";
import "./Spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container position-absolute top-50 start-50 translate-middle">
      <div className="loading-spinner">
      </div>
    </div>
  );
}