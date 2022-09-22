import React from "react";
import { useState } from "react";
import { Deploy } from "../components/Docs/Deploy";
import { Description } from "../components/Docs/Description";
import { Environment } from "../components/Docs/Environment";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Docs = () => {
  const [index, setIndex] = useState(0);
  const { user } = useSelector((state) => state.user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="docs">
      <div className="sidebar">
        <div onClick={() => setIndex(0)}>
          <span>About Project</span>
        </div>
        <div onClick={() => setIndex(1)}>
          <span>Deploy</span>{" "}
        </div>
        <div onClick={() => setIndex(2)}>
          <span>Environment</span>
        </div>
      </div>

      <div className="content">
        <div hidden={index != 0}>
          <Description />
        </div>
        <div hidden={index != 1}>
          <Deploy />{" "}
        </div>
        <div hidden={index != 2}>
          <Environment />
        </div>
      </div>
    </div>
  );
};
