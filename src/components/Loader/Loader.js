import { Space, Spin } from "antd";
import React from "react";
import "../css/Loader.css";
export const Loader = () => {
  return (
    <div className="loader">
      <p>Loading..Please Wait..</p>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  );
};
