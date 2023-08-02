import React from "react";
import PostStatus from "./PostUpadate";

export const HomeComponent = ({currentUser}) => {
  return (
    <div>
      <PostStatus currentUser={currentUser} />
    </div>
  );
};
