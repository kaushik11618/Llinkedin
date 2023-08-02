import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import LoginComponent from '../components/LoginComponent'
import { auth } from '../firebaseConfig';

export default function Login() {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/home");
      } else {
        setLoading(false);
      }
    });
  });
  return loading ? <Loader /> : <LoginComponent />;
}
