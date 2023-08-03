import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RegisterAPI } from "../api/AuthAPI";
import { postUserData } from "../api/firestoreApi";
import "./css/LoginComponent.css";
const RegisterComponent = () => {
  const [credentials, setCredentials] = useState({});
  let navigate = useNavigate();
  const register = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      await postUserData({ name: credentials.name, email: credentials.email });
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
      toast.success("Register sucess");
    } catch (err) {
      toast.error("plaese cheack your credential");
    }
  };
  return (
    <div className="login-wrapper">
      <img src="linkedinlogo.png" className="linkedinLogo" alt="" />

      <div className="login-wrapper-inner">
        <h1 className="heading-signin">
          Make the most of your professional life
        </h1>
        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, name: event.target.value })
            }
            type="text"
            className="common-input"
            placeholder="Your Name"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password (6 or more characters)"
          />
        </div>
        <button onClick={register} className="login-btn">
          Agree & Join
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          Already on LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterComponent;
