import React, { useEffect, useRef, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const valueRef = useRef(null);
  useEffect(() => {
    valueRef.current.focus();
  }, []);
  const pdef = (e)=>{
    e.preventDefault()
  }
  const handleChange = (email) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmail("");
        toast.info("Confirm the SMS by mail");
        navigate("/login");
      })
      .catch((error) => {
        toast.error("Wrong email");
      });
  };
  return (
    <form className="reset-main" onSubmit={pdef} >
      <div className="reset">
        <div>
          <h1> Reset Password </h1>
        </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={valueRef}
        />

        <button onClick={()=>handleChange(email)}>Reset</button>
        <div className="login-bottom">
          <h5>Create an account </h5>
          <Link to="/register">Sign up</Link>
        </div>
      </div>
    </form>
  );
};
