import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeDragons } from "../redux/slices/favSlice";

export const Favorites = () => {
  const { dragons } = useSelector((state) => state.fav);
  const dispatch = useDispatch();

  return dragons.length > 0 ? (
    <div>
      {dragons.map((dragon) => (
        <div className="favorites" key={dragon.id}>
          <Link to={`/${dragon.id}`}>
            <div className="favorites-con">
              <img src={dragon.img} alt="" />
              <h4> {dragon.name} </h4>
            </div>
          </Link>
          <span onClick={() => dispatch(removeDragons(dragon.id))}>Delete</span>
        </div>
      ))}
    </div>
  ) : (
    <div className="non-fav">
      <div className="non-fav-con">
        <h1>There is no favorites dragons</h1>
        <Link to="/"> Go back</Link>
      </div>
    </div>
  );
};
