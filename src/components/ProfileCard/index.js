import React, { useEffect, useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { getSingleStatus, getSingleUser } from "../../api/firestoreApi.js";
import { PostCard } from "../PostCard.js";

import "./index.css";
export const ProfileCard = ({ currentUser, onEdit }) => {
  let location = useLocation();
  const [allStatuses, setAllStatuses] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
  useEffect(() => {
    if (location?.state?.id) {
      getSingleStatus(setAllStatuses, location?.state?.id);
    }
    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email);
    }
  }, [location?.state?.email, location?.state?.id]);
  console.log(currentProfile);
  return (
    <>
      <div className="profile-card">
        <div className="edit-btn">
          <HiOutlinePencil className="edit-icon" onClick={onEdit} />
        </div>
        <div className="profile-info">
          <div>
            <h3 className="userName">
              {Object.values(currentProfile).length === 0
                ? currentUser.name
                : currentProfile?.name}
            </h3>
            <p className="heading"></p>
            <p className="location"></p>
          </div>
          <div className="right-info">
            <p className="college"></p>
            <p className="company"></p>
          </div>
        </div>
      </div>
      <div className="post-status-main">
        {allStatuses.map((posts) => {
          return (
            <div key={posts.id}>
              <PostCard posts={posts} />
            </div>
          );
        })}
      </div>
    </>
  );
};
