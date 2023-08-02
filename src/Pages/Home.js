import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeComponent } from "../components/HomeComponent";
import { Loader } from "../components/Loader/Loader";
import { auth } from "../firebaseConfig";

export default function Home({currentUser}) {
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
    });
    return loading ? <Loader /> : <HomeComponent currentUser={currentUser} />;
  }
