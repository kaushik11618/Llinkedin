import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deletePost,
  getAllUsers,
  getConnections,
  getCurrentUser,
} from "../../api/firestoreApi";
import { LikeButton } from "../LikeButton";
import { BsPencil, BsTrash } from "react-icons/bs";
import "./index.css";
import Modal from "antd/es/modal/Modal";
export const PostCard = ({ posts, id, getEditPost }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  useMemo(() => getCurrentUser(setCurrentUser), getAllUsers(setAllUsers), []);
  useEffect(() => {
    getConnections(currentUser.userID, posts.userID, setIsConnected);
  }, [currentUser.userID, posts.userID]);
  return isConnected || currentUser.userID === posts.userID ? (
    <div className="posts-card" key={id}>
      <div className="post-image-wrapper">
        <div className="action-container">
          <BsPencil
            className="action-icon"
            size={20}
            onClick={() => getEditPost(posts)}
          />
          <BsTrash
            size={20}
            className="action-icon"
            onClick={() => deletePost(posts.id)}
          />
        </div>
        <img
          alt="profile-image"
          className="post-image"
          src={allUsers
            .filter((item) => item.userID === posts.userID)
            .map((item) => item.imageLink)}
        />
        <div>
          <p
            className="name"
            onClick={() =>
              navigate("/profile", {
                state: { id: posts?.userID, email: posts.userEmail },
              })
            }
          >
            {allUsers.filter((user) => user.userID === posts.userID)[0]?.name}
          </p>
          <p className="timestamp">{posts.timeStamp}</p>
        </div>
      </div>
      <p className="status">{posts.status}</p>
      {posts.postImage ? (
        <img
          onClick={() => setImageModal(true)}
          className="posts-image"
          src={posts.postImage}
          alt="post-image"
        />
      ) : (
        <></>
      )}
      <LikeButton
        userId={currentUser?.userID}
        postId={posts.id}
        currentUser={currentUser}
      />
      <Modal
        centered
        open={imageModal}
        onOk={() => setImageModal(false)}
        onCancel={() => setImageModal(false)}
        footer={[]}
      >
        <img
          onClick={() => setImageModal(true)}
          src={posts.postImage}
          className="posts-image modal"
          alt="post-image"
        />
      </Modal>
    </div>
  ) : (
    <></>
  );
};
