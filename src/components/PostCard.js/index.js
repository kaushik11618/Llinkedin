import React from "react";
import "./index.css";
export const PostCard = ({ posts }) => {
  return (
    <div className="posts-card">
      <p className="name">{posts.userName}</p>
      <p className="timestamp">{posts.timeStamp}</p>
      <p className="status">{posts.status}</p>
    </div>
  );
};
