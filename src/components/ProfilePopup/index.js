import React from "react";
import { onLogout } from "../../api/AuthAPI";
import './index.css'

export const ProfilePopup = () => {
  return (
    <div className="popup-card">
      <ul className="popup-options">
        <li className="popup-option" onClick={onLogout}>LogOut</li>
      </ul>
    </div>
  );
};
