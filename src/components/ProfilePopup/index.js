import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../api/firestoreApi";
import { ProfileButton } from "../ProfileButton";
import { onLogout } from "../../api/AuthAPI";
import "./index.css";

export const ProfilePopup = () => {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div className="popup-card">
      <p className=".profile-name">{currentUser?.name}</p>
      <p className=".profile-headline ">{currentUser?.headline}</p>
      <ProfileButton
        title="View Profile"
        onClick={() =>
          navigate("/profile", {
            state: {
              id: currentUser?.userID,
            },
          })
        }
      />
        <ProfileButton title="Log out" onClick={onLogout} />
    </div>
  );
};
