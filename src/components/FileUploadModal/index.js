import { Button, Modal } from "antd";
import React, { useState } from "react";

export const FileUploadModal = ({setModalOpen,modalOpen}) => {

  return (
    <>
      <Modal
        title="Modal"
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
          >
            Post
          </Button>
        }
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </Modal>
    </>
  );
};
