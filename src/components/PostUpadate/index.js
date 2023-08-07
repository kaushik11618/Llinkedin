import React, { useEffect, useState } from "react";
import { getStatus, postStatus } from "../../api/firestoreApi";
import ModalComponent from "../Modal";
import { PostCard } from "../PostCard.js";
import moment from "moment/moment";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

export const getcurrentTimeStamp = (timeFormat) => {
  return moment().format(timeFormat);
};
const getUniqueID = () => {
  let id = uuidv4();
  return id;
};
const PostStatus = ({ currentUser }) => {
  let userEmail = localStorage.getItem("userEmail");
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatuses] = useState([]);
  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getcurrentTimeStamp("LLL"),
      userEmail: userEmail,
      userName: currentUser.name,
      postID: getUniqueID(),
      userID: currentUser.userID,
    };
    await postStatus(object);
    await setModalOpen(false);
    await setStatus("");
  };
  const getEditPost = (posts) => {
    setModalOpen(true);
    setStatus(posts.status);
  };
  useEffect(() => {
    getStatus(setAllStatuses);
  }, []);
  return (
    <div className="post-status-main">
      <div className="post-status">
        <button className="open-post-modal" onClick={() => setModalOpen(true)}>
          Start a Post
        </button>
      </div>
      <ModalComponent
        status={status}
        setStatus={setStatus}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        sendStatus={sendStatus}
      />
      <div>
        {allStatuses.map((posts) => {
          return (
            <div key={posts.id}>
              <PostCard posts={posts} getEditPost={getEditPost} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostStatus;
