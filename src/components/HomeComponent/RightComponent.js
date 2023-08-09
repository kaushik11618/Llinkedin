import React from "react";

export const RightComponent = ({ currentUser }) => {
  return (
    <div className="user-detail-right">
      <img src={currentUser?.imageLink} alt="imageLink" />
      <p className="name">{currentUser?.name}</p>
      <p className="headline">{currentUser?.headline}</p>
    </div>
  );
};
