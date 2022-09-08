import React from "react";
import { useGetDragonQuery } from "../redux/rtk/spaceDragonApi";
import "./Space.scss";
import Slider from "react-slick";
import { BsBackspace } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const SpaceDragon = () => {
  const { data, isLoading, isError } = useGetDragonQuery();

  if(isError){
    return alert('Something went wrong):')
  }
  const settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Link to={"/"} className="logo">
        <BsBackspace style={{ cursor: "pointer" }} />
        <h2> Go Back </h2>
      </Link>
      {!isLoading ? (
        <>
        <h3 style={{textAlign:'center', margin:'30px 0', fontWeight:'500'}}> {data.name} </h3>
          <Slider {...settings} className="slides">
            {data.flickr_images.map((img, i) => (
              <div key={i} className="img">
                <img src={img} alt="" />
              </div>
            ))}
          </Slider>
          <div className="dragon-flex">
            <div>
              <h3>Dragon's heat shield</h3>
              <ul className="shield">
                <li>
                  {" "}
                  Material: <span> {data.heat_shield.material}</span>{" "}
                </li>
                <li>
                  {" "}
                  Size: <span> {data.heat_shield.size_meters} meters</span>{" "}
                </li>
                <li>
                  {" "}
                  Temp degrees: <span>{data.heat_shield.temp_degrees}</span>
                </li>
                <li>
                  {" "}
                  Partner: <span>{data.heat_shield.dev_partner}</span>{" "}
                </li>
              </ul>
            </div>
            {data.thrusters.map((a, i) => (
              <div key={i}>
                <h3>Thrusters</h3>
                <ul key={i} className="thrusters">
                  <li>
                    {" "}
                    Type: <span> {a.type} </span>{" "}
                  </li>
                  <li>
                    {" "}
                    Amount: <span> {a.amount} </span>{" "}
                  </li>
                  <li>
                    {" "}
                    Pods: <span> {a.pods} </span>{" "}
                  </li>
                  <li>
                    {" "}
                    Fuel-1: <span> {a.fuel_1} </span>{" "}
                  </li>
                  <li>
                    {" "}
                    Fuel-2: <span> {a.fuel_2} </span>{" "}
                  </li>
                  <li>
                    {" "}
                    Thrust:{" "}
                    <span>
                      {" "}
                      {a.thrust.kN} kN or <span>{a.thrust.lbf} lbf</span>{" "}
                    </span>{" "}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="links">
            <a href={data.wikipedia}> Go to wiki </a>
            <Link to="/">Go back</Link>
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
