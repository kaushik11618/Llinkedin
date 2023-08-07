import { Button, Modal, Progress } from "antd";
import React from "react";
import "./index.css";
export const FileUploadModal = ({
  modalOpen,
  setModalOpen,
  getImage,
  uploadImage,
  currentImage,
  progress,
}) => {
  return (
    <>
      <Modal
        title="Add a Profile Image"
        centered
        open={modalOpen}
        onOk={() => {
          setModalOpen(false);
        }}
        onCancel={() => {
          setModalOpen(false);
        }}
        footer={
          <Button
            key="submit"
            type="primary"
            disabled={currentImage.name ? false : true}
            onClick={uploadImage}
          >
            Upload Profile Picture
          </Button>
        }
      >
        <div className="image-upload-main">
          <p>{currentImage.name}</p>
          <label className="upload-btn" htmlFor="image-upload">
            Add an Image
          </label>
          {progress === 0 ? (
            <></>
          ) : (
            <div className="progress-bar">
              <Progress type="circle" percent={progress} />
            </div>
          )}
          <input hidden id="image-upload" type={"file"} onChange={getImage} />
        </div>
      </Modal>
    </>
  );
};
