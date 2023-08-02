import React, { useEffect, useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { getStatus } from "../../api/firestoreApi.js";
import { PostCard } from "../PostCard.js";

import "./index.css";
export const ProfileCard = ({ currentUser, onEdit }) => {
  const [allStatuses, setAllStatuses] = useState([]);
  useEffect(() => {
    getStatus(setAllStatuses);
  }, []);
  return (
    <>
      <div className="profile-card">
        <div className="edit-btn">
          <HiOutlinePencil className="edit-icon" onClick={onEdit} />
        </div>
        <div className="profile-info">
          <div>
            <h3 className="userName">{currentUser.name}</h3>
            <p className="heading">{currentUser.headline}</p>
            <p className="location">{`${currentUser.city}, ${currentUser.country} `}</p>
          </div>
          <div className="right-info">
            <p className="college">{currentUser.college}</p>
            <p className="company">{currentUser.company}</p>
          </div>
        </div>
      </div>
      <div className="post-status-main">
        {allStatuses.filter((item)=>{
          return item.userEmail === localStorage.getItem("userEmail")
        }).map((posts) => {
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
