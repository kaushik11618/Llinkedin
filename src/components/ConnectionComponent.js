import React, { useEffect, useState } from "react";
import { addConnection, getAllUsers } from "../api/firestoreApi";
import ConnectedUsers from "./ConnecetdUsers";
import "./css/ConnectionComponet.css";
const ConnectionComponent = ({ currentUser }) => {
  const [users, setUsers] = useState([]);
  const getCurrentUser = (id) => {
    addConnection(currentUser.userID, id);
  };
  useEffect(() => {
    getAllUsers(setUsers);
  }, []);
  return (
    <div className="connections-main">
      {users.map((user) => {
        return user.id === currentUser.userID ? (
          <></>
        ) : (
          <ConnectedUsers  user={user} getCurrentUser={getCurrentUser} currentUser={currentUser}/>
        );
      })}
    </div>
  );
};

export default ConnectionComponent;
