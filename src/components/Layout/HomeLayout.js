import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../../api/firestoreApi";
import Home from "../../Pages/Home";
import Topbar from "../Topbar";
const HomeLayout = () => {
  const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Topbar currentUser={currentUser}/>
      <Home currentUser={currentUser} />
    </div>
  );
};

export default HomeLayout;
