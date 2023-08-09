import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { getSingleStatus, getSingleUser } from "../../api/firestoreApi.js";
import { uploadImage as uploadImageAPI } from "../../api/ImageUpload";
import { uploadBackGroundImage as uploadBackGroundImageAPI } from "../../api/ImageUpload";
import { FileUploadModal } from "../FileUploadModal/index.js";
import { PostCard } from "../PostCard.js";
import "./index.css";
export const ProfileCard = ({ currentUser, onEdit }) => {
  let location = useLocation();
  const [allStatuses, setAllStatuses] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
  const [currentImage, setCurrentImage] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState("");
  const getImage = (event) => {
    setCurrentImage(event.target.files[0]);
  };
  const uploadImage = () => {
    uploadImageAPI(
      currentImage,
      currentUser.userID,
      setModalOpen,
      setProgress,
      setCurrentImage
    );
  };
  const uploadBackGroundImage = () => {
    uploadBackGroundImageAPI(
      currentImage,
      currentUser.userID,
      setModalOpen,
      setProgress,
      setCurrentImage
    );
    console.log("hello");
  };
  useEffect(() => {
    if (location?.state?.id) {
      getSingleStatus(setAllStatuses, location?.state?.id);
    }
    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email);
    }
  }, [location?.state?.email, location?.state?.id]);

  return (
    <>
      <div className="profile-card">
        <div className="edit-btn">
          <HiOutlinePencil className="edit-icon" onClick={onEdit} />
        </div>
        <FileUploadModal
          getImage={getImage}
          uploadBackGroundImage={uploadBackGroundImage}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          currentImage={currentImage}
          progress={progress}
        />
        <img
          className="background-image"
          onClick={() => {
            setModalOpen(true);
          }}
          src={
            Object.values(currentProfile).length === 0
              ? currentUser.imageLink
              : currentProfile?.imageLink
          }
          alt=""
        />
        <div className="profile-info">
          <div>
            <FileUploadModal
              getImage={getImage}
              uploadImage={uploadImage}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              currentImage={currentImage}
              progress={progress}
            />
            <img
              className="profile-image"
              onClick={() => {
                setModalOpen(true);
              }}
              src={
                Object.values(currentProfile).length === 0
                  ? currentUser.imageLink
                  : currentProfile?.imageLink
              }
              alt="profile-image"
            />
            <h3 className="userName">
              {Object.values(currentProfile).length === 0
                ? currentUser?.name
                : currentProfile?.name}
            </h3>
            <p className="heading">
              {Object.values(currentProfile).length === 0
                ? currentUser.headline
                : currentProfile?.headline}
            </p>
            <p className="location">
              {Object.values(currentProfile).length === 0
                ? `${currentUser.city}, ${currentUser.country} `
                : `${currentProfile?.city}, ${currentUser.country}`}
            </p>
            <a
              className="website"
              target="_blank"
              href={
                Object.values(currentProfile).length === 0
                  ? `${currentUser.website}`
                  : currentProfile?.website
              }
            >
              {Object.values(currentProfile).length === 0
                ? `${currentUser.website}`
                : currentProfile?.website}
            </a>
          </div>
          <div className="right-info">
            <p className="location">
              {Object.values(currentProfile).length === 0
                ? currentUser.college
                : currentProfile?.college}
            </p>
            <p className="location">
              {Object.values(currentProfile).length === 0
                ? currentUser.company
                : currentProfile?.company}
            </p>
          </div>
        </div>
        <p className="about-me">
          {Object.values(currentProfile).length === 0
            ? currentUser.aboutMe
            : currentProfile?.aboutMe}
        </p>
        <p className="skills">
          <span className="skill-label">Skills:</span>
          {Object.values(currentProfile).length === 0
            ? currentUser.skill
            : currentProfile?.skill}
        </p>
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
