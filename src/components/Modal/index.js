import { Button, Modal } from "antd";
import React from "react";
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
}) => {
  return (
    <div>
      <Modal
        title="Create a Post"
        centered
        open={modalOpen}
        onOk={() => {
          setStatus("");
          setModalOpen(false);
        }}
        onCancel={() => {
          setStatus("");
          setModalOpen(false);
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
        <textarea
          className="modal-input"
          placeholder="what do you want to talk about?"
          onChange={(event) => {
            setStatus(event.target.value);
          }}
          value={status}
        />
        <label htmlFor="pic-upload">
          <AiOutlinePicture size={30} className="picture-icon" />
        </label>
        <input type="file" id="pic-upload" hidden />
      </Modal>
    </div>
  );
};

export default ModalComponent;
