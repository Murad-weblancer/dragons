import React from "react";
import { Link } from "react-router-dom";
import "./Dragons.scss";
export const Dragons = ({
  flickr_images,
  name,
  description,
  wikipedia,
  id,
}) => {
  return (
    <>
  
      <div className="dragons-single">
        <Link to={`/${id}`}>
          <img src={flickr_images[2]} alt="" />
        </Link>
        <h3> {name} </h3>
        <p> {description} </p>
        <div className="dragons-single-links">
          <a href={wikipedia}> Go to wikipedia </a>
          <Link to={`/${id}`}> Read more </Link>
        </div>
      </div>
    </>
  );
};
