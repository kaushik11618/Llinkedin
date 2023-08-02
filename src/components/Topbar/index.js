import React, { useState } from "react";
import {
  AiOutlineBell,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineSearch,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ProfilePopup } from "../ProfilePopup";
import "./index.css";
const Topbar = ({currentUser}) => {
  const [popupVisible, setPopupVisible] = useState(false);
  let navigate = useNavigate();
  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };
  const goToRoute = (route) => {
    navigate(route);
  };
  return (
    <div className="topbar-main">
      {popupVisible ? (
        <div className="popup-position">
          <ProfilePopup />
        </div>
      ) : (
        <></>
      )}
      <img
        className="linkedin-logo"
        src="linkedinlogo.png"
        alt="linkedinlogo"
      />
      <div className="react-icons">
        <AiOutlineSearch size={30} className="react-icon" />
        <AiOutlineHome
          size={30}
          className="react-icon"
          onClick={() => goToRoute("/home")}
        />
        <AiOutlineUserSwitch
          size={30}
          className="react-icon"
          onClick={() => goToRoute("/profile")}
        />
        <BsBriefcase size={30} className="react-icon" />
        <AiOutlineMessage size={30} className="react-icon" />
        <AiOutlineBell size={30} className="react-icon" />
      </div>
      <img
        className="user-logo"
        src="user.png"
        alt="user"
        onClick={displayPopup}
      />
    </div>
  );
};

export default Topbar;
