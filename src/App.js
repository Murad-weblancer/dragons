import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SpaceDragon } from "./pages/SpaceDragon";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar/Navbar";
import { ResetPassword } from "./pages/ResetPassword";
import { Favorites } from "./pages/Favorites";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/slices/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetDragonsQuery } from "./redux/rtk/spaceDragons";
function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    const auth = getAuth();
    const uncub = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      dispatch(getUser(currentUser));
    });
    return () => {
      uncub();
    };
  }, []);


  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Single />} />
          <Route path="/dragon" element={<SpaceDragon />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetpass" element={<ResetPassword />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
