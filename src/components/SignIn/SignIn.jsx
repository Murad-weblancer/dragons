import React, { useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./SignIn.scss";
import { setUser } from "../../redux/slices/auth";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const valueRef = useRef(null);
  useEffect(() => {
    valueRef.current.focus();
  }, []);
  const pdef = (e) => {
    e.preventDefault();
  };
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        toast.error("Enter the data correctly");
      });
  };
  return (
    <form className="login" onSubmit={pdef}>
      <div>
        <h1> Sign in </h1>
      </div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        ref={valueRef}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => handleLogin(email, password)}>Sign in</button>
      <div className="login-bottom">
        <h5>Create an account </h5>
        <Link to="/register">Sign up</Link>
      </div>
      <div className="login-forget">
        <Link to="/resetpass" style={{ color: "blue" }}>
          Forget password?{" "}
        </Link>
      </div>
    </form>
  );
};
