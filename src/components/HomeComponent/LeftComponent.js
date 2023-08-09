import React, { useState } from "react";
import { uploadImage as uploadImageAPI } from "../../api/ImageUpload";
import { FileUploadModal } from "../FileUploadModal";
import "./index.css";
export const LeftComponent = ({ currentUser }) => {
  const [currentProfile, setCurrentProfile] = useState({});
  const [currentImage, setCurrentImage] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState("");
  const uploadImage = () => {
    uploadImageAPI(
      currentImage,
      currentUser.userID,
      setModalOpen,
      setProgress,
      setCurrentImage
    );
  };
  return (
    <>
      <div className="user-detail-left">
      <FileUploadModal
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
        <p className="name">{currentUser?.name}</p>
        <p className="headline">{currentUser?.headline}</p>
      </div>
    </>
  );
};
