import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../../redux/slices/auth";
import { getAuth, signOut } from "firebase/auth";

import "./Navbar.scss";
export const Navbar = () => {

  const {user} = useSelector(state=>state.user)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/login");
  };


  return user ? (
    <div className="navbar container">
      <Link to="/" className="navbar-logo">
        Space X
      </Link>
      <div className="navbar-list">
        <Link to="/favorites" className="fav">
          {" "}
          favorites{" "}
        </Link>
        <b style={{ cursor: "pointer" }} onClick={logOut}>
          {" "}
          Log out{" "}
        </b>
      </div>
    </div>
  ) : (
    <div className="navbar container">
      <Link to="/" className="navbar-logo">
        Space X
      </Link>
      <div className="navbar-list">
        <Link to="/login">
          Sign in{" "}
        </Link>
        <Link
          to="/register"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};
