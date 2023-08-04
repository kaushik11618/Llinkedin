import React from "react";
import "./index.css";
export const ProfileButton = ({ title, onClick }) => {
  return (
    <button className="common-btn" onClick={onClick}>
      {title}
    </button>
  );
};
