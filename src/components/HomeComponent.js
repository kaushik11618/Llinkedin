import React from "react";
import { LeftComponent } from "./HomeComponent/LeftComponent";
import { RightComponent } from "./HomeComponent/RightComponent";
import PostStatus from "./PostUpadate";

export const HomeComponent = ({ currentUser }) => {
  return (
    <div>
      <div className="home-layout">
        <LeftComponent currentUser={currentUser} />
        <PostStatus currentUser={currentUser} />
        <RightComponent currentUser={currentUser} />
      </div>
    </div>
  );
};
