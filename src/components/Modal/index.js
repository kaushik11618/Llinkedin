import { Button, Modal, Progress } from "antd";
import React from "react";
import { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import "./index.css";
const ModalComponent = ({
  modalOpen,
  setModalOpen,
  setStatus,
  status,
  sendStatus,
  isEdit,
  updateStatus,
  uploadPostImage,
  setPostImage,
  postImage,
  setCurrentPost,
  currentPost,
}) => {
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Modal
        title="Create a Post"
        centered
        open={modalOpen}
        onOk={() => {
          setStatus("");
          setModalOpen(false);
          setPostImage("");
          setCurrentPost({});
        }}
        onCancel={() => {
          setStatus("");
          setModalOpen(false);
          setPostImage("");
          setCurrentPost({});
        }}
        footer={
          <Button
            onClick={isEdit ? updateStatus : sendStatus}
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
          >
            {isEdit ? "update" : "Post"}
          </Button>
        }
      >
        <div className="posts-body">
          <textarea
            className="modal-input"
            placeholder="what do you want to talk about?"
            onChange={(event) => {
              setStatus(event.target.value);
            }}
            value={status}
          />
          {progress === 0 || progress === 100 ? (
            <></>
          ) : (
            <div className="progress-bar">
              <Progress type="circle" percent={progress} />
            </div>
          )}
          {postImage?.length > 0 || currentPost?.postImage?.length ? (
            <img
              src={postImage || currentPost?.postImage}
              className="preview-image"
            />
          ) : (
            <></>
          )}
        </div>
        <label htmlFor="pic-upload">
          <AiOutlinePicture size={30} className="picture-icon" />
        </label>
        <input
          type="file"
          id="pic-upload"
          hidden
          onChange={(event) =>
            uploadPostImage(event.target.files[0], setPostImage, setProgress)
          }
        />
      </Modal>
    </div>
  );
};

export default ModalComponent;
