import React, { useEffect, useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { getConnections } from "../../api/firestoreApi";
import "./index.css";
const ConnectedUsers = ({ user, getCurrentUser, currentUser }) => {
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    getConnections(currentUser.userID, user.id, setIsConnected);
  }, [currentUser.userID, user.id]);
  return isConnected ? (
    <></>
  ) : (
    <div className="grid-child">
      <img alt="image" src={user.imageLink} />
      <p className="name">{user.name} </p>
      <p className="headline"> {user.headline}</p>
      <button onClick={() => getCurrentUser(user.id)}>
        <AiOutlineUsergroupAdd size={20} />
        Connect
      </button>
    </div>
  );
};

export default ConnectedUsers;
