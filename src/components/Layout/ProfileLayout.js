import React, { useMemo, useState } from 'react'
import { getCurrentUser } from '../../api/firestoreApi';
import { Profile } from '../../Pages/Profile'
import Topbar from '../Topbar';

const ProfileLayout = () => {
    const [currentUser, setCurrentUser] = useState({});
    useMemo(() => {
      getCurrentUser(setCurrentUser);
    }, []);
    return (
      <div>
        <Topbar currentUser={currentUser} />
        <Profile currentUser={currentUser} />
      </div>
    );
  }

export default ProfileLayout
