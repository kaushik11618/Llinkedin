import { Button, Modal } from "antd";
import React from "react";
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
        <input
          className="modal-input"
          placeholder="what do you want to talk about?"
          onChange={(event) => {
            setStatus(event.target.value);
          }}
          value={status}
        ></input>
      </Modal>
    </div>
  );
};

export default ModalComponent;
