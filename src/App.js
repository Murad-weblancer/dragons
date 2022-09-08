import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import { SpaceDragon } from "./pages/Dragon";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";

function App() {


  return (
    <div className="App">
        <div className="container space">
            <h1>
              Space X
            </h1>
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:id" element={<Single/>} />
            <Route path="/dragon" element={<SpaceDragon/>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
