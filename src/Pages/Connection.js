import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConnectionComponent from "../components/ConnectionComponent";
import { Loader } from "../components/Loader/Loader";
import { auth } from "../firebaseConfig";

export default function Connection({ currentUser }) {
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
    return loading ? <Loader /> : <ConnectionComponent currentUser={currentUser} />;
  }
