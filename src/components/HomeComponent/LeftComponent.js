import React, { useState } from "react";
import "./index.css";
export const LeftComponent = ({ currentUser }) => {
  const [currentProfile, setCurrentProfile] = useState({});
  return (
    <>
      <div className="user-detail-left">
        <img className="background-images" src={currentUser.BackGoundImageLink} />
      <img
        className="profile-images"
        src={
          Object.values(currentProfile).length === 0
            ? currentUser.imageLink
            : currentProfile?.imageLink
        }
        alt="profile-image"
      />
        <p className="name">{currentUser?.name}</p>
        <p className="headline">{currentUser?.headline}</p>
      </div>
    </>
  );
};
