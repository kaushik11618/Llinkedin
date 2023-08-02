import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import ProfileComponent from '../components/ProfileComponent';
import { auth } from '../firebaseConfig';

export const Profile = ({currentUser}) => {
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
      onAuthStateChanged(auth, (res) => {
        if (!res?.accessToken) {
          navigate("/");
        } else {
          setLoading(false);
        }
      });
    }, );
    return loading ? <Loader /> : <ProfileComponent currentUser={currentUser} />;
  }