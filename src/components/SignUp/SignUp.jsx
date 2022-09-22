import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/auth";
import { toast } from "react-toastify";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlRegister = (email, password, confirm) => {
    const auth = getAuth();
    if (!email) {
      toast.info('Write email')
    } else if (password.length < 6) {
      toast.info("enter a value more than 6");
    } else if (password !== confirm) {
      toast.info("Password is wrong");
    } else {
      createUserWithEmailAndPassword(auth, email, password, confirm)
        .then(({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            })
          );
          navigate("/");
          toast.success("Successfully registered");
        })
        .catch(() => {
          toast.error("Enter the data correctly");
        });
    }
  };
  return (
    <div className="register">
      <div>
        <h1> Sign up </h1>
      </div>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        value={confirm}
        placeholder="Confirm password"
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button onClick={() => handlRegister(email, password, confirm)}>
        Sign up
      </button>
      <div className="register-bottom">
        <h5>Already have account?</h5>
        <Link to="/login">Sign in</Link>
      </div>
    </div>
  );
};
