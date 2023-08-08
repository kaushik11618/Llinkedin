import React, { useEffect, useState } from 'react'
import { getCurrentUser } from '../../api/firestoreApi';
import Connection from '../../Pages/Connection';
import Topbar from '../Topbar';

export const ConnectionLayout = () => {
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
      getCurrentUser(setCurrentUser);
    }, []);
    return (
      <div>
        <Topbar currentUser={currentUser} />
        <Connection currentUser={currentUser} />
      </div>
    );
  };
