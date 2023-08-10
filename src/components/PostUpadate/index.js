import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getStatus, postStatus, updatePost } from "../../api/firestoreApi";
import { uploadPostImage } from "../../api/ImageUpload";
import ModalComponent from "../Modal";
import { PostCard } from "../PostCard.js";
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
  const [currentPost, setCurrentPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [postImage, setPostImage] = useState("");
  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getcurrentTimeStamp("LLL"),
      userEmail: userEmail,
      userName: currentUser.name,
      postID: getUniqueID(),
      userID: currentUser.userID,
      postImage: postImage,
    };
    await postStatus(object);
    await setModalOpen(false);
    setIsEdit(false);
    await setStatus("");
  };
  const getEditPost = (posts) => {
    setModalOpen(true);
    setStatus(posts?.status);
    setCurrentPost(posts);
    setIsEdit(true);
  };
  const updateStatus = () => {
    updatePost(currentPost.id, status, postImage);
    setModalOpen(false);
  };
  useEffect(() => {
    getStatus(setAllStatuses);
  }, []);
  return (
    <div className="post-status-main">
      <div className="post-status">
        <img
          className="post-image"
          src={currentUser?.imageLink}
          alt="imageLink"
        />
        <button
          className="open-post-modal"
          onClick={() => {
            setModalOpen(true);
            setIsEdit(false);
          }}
        >
          Start a Post
        </button>
      </div>
      <ModalComponent
        status={status}
        setStatus={setStatus}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        sendStatus={sendStatus}
        isEdit={isEdit}
        updateStatus={updateStatus}
        uploadPostImage={uploadPostImage}
        setPostImage={setPostImage}
        postImage={postImage}
        setCurrentPost={setCurrentPost}
        currentPost={currentPost}
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
