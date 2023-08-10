import { Button, Modal, Progress } from "antd";
import React from "react";

export const BackgroundModal = ({
  modalOpen1,
  setModalOpen1,
  progress,
  BackgroundImage,
  getBackgroundImage,
  currentImage1
}) => {
  return (
    <>
      <Modal
        title="Add a Profile Image"
        centered
        open={modalOpen1}
        onOk={() => {
          setModalOpen1(false);
        }}
        onCancel={() => {
          setModalOpen1(false);
        }}
        footer={
          <Button key="submit" type="primary" onClick={BackgroundImage}>
            Upload Profile Picture
          </Button>
        }
      >
        <div className="image-upload-main">
        <p>{currentImage1.name}</p>
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
          <input
            hidden
            id="image-upload"
            type={"file"}
            onChange={getBackgroundImage}
          />
        </div>
      </Modal>
    </>
  );
};
