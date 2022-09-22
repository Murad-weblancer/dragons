import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Dragon } from "../components/Dragon/Dragon";
import { Dragons } from "../components/Dragons/Dragons";
import { useGetDragonsQuery } from "../redux/rtk/spaceDragons";

export const Home = () => {
  const { data, isLoading } = useGetDragonsQuery();


  return (
    <>
      <Dragon />
      {!isLoading ? (
        <>
          <h1 className="details">List and details</h1>
          <div className="dragons">
            {data.map((obj, i) => (
              <Dragons key={i} {...obj} />
            ))}
          </div>
        </>
      ) : (
        <div className="load load-slides">
          <h1>Loading...</h1>
          <AiOutlineLoading3Quarters size={20} className="icon" />
        </div>
      )}
    </>
  );
};
