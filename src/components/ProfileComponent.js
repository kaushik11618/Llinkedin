import React, { useState } from "react";
import { ProfileCard } from "./ProfileCard";
import ProfileEdit from "./ProfileEdit";

const ProfileComponent = ({ currentUser }) => {
  const [isEdit, setisEdit] = useState(false);

  const onEdit = () => {
    setisEdit(!isEdit);
  };
  return (
    <div>
      {isEdit ? (
        <ProfileEdit onEdit={onEdit} currentUser={currentUser} />
      ) : (
        <ProfileCard onEdit={onEdit} currentUser={currentUser} />
      )}
    </div>
  );
};
export default ProfileComponent;
