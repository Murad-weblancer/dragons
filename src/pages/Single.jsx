import React, { useEffect, useState } from "react";
import "./Space.scss";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import { BsBackspace } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getDragons, removeDragons } from "../redux/slices/favSlice";

export const Single = () => {
  const [dragonParams, setDragonParams] = useState();
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  const { dragons } = useSelector((state) => state.fav);
  const [loading, setLoading] = useState(true);

  // const somedragons = dragons.some(dragon=>dragon.id === dragonParams.id)
  const dispatch = useDispatch();

  useEffect(() => {
    const dragonsApi = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.spacexdata.com/v4/dragons/${id}`
        );
        return setDragonParams(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    dragonsApi();
    setLoading(false);
  }, []);
  if (loading) {
    return "asdasdasd";
  }
  const favorites = () => {
    const items = {
      name: dragonParams.name,
      img: dragonParams.flickr_images[0],
      id: dragonParams.id,
    };
    dispatch(getDragons(items));
  };

  const settings = {
    dots: true,
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
  return dragonParams ? (
    <div className="single">
      <h2 className="back">
        <Link to="/">
          <BsBackspace style={{ cursor: "pointer", marginRight: "15px" }} />
          Go back
        </Link>
      </h2>
      <h2 className="single-logo">
        Everything of <span>{dragonParams.name}</span>
      </h2>
      <div>
        <Slider {...settings} className="slides">
          {dragonParams.flickr_images.map((img, i) => (
            <div key={i} className="slide">
              <img src={img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="dragon-flex single-flex">
        <div>
          <h3>Dragon's heat shield</h3>
          <ul className="shield">
            <li>
              {" "}
              Material: <span> {dragonParams.heat_shield.material}</span>{" "}
            </li>
            <li>
              {" "}
              Size: <span>
                {" "}
                {dragonParams.heat_shield.size_meters} meters
              </span>{" "}
            </li>
            <li>
              {" "}
              Temp degrees: <span>{dragonParams.heat_shield.temp_degrees}</span>
            </li>
            <li>
              {" "}
              Partner: <span>{dragonParams.heat_shield.dev_partner}</span>{" "}
            </li>
          </ul>
        </div>
        {dragonParams.thrusters.map((a, i) => (
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
      <h1 className="single-trunk"> Trunk</h1>
      <div className="trunk">
        <p>
          Launch payload mass:{" "}
          <span>
            {" "}
            {dragonParams.launch_payload_mass.kg} kg or{" "}
            <span> {dragonParams.launch_payload_mass.lb} lb </span>{" "}
          </span>
          , launch payload vol:
          <span>
            {dragonParams.launch_payload_vol.cubic_meters} cubic meters or{" "}
            {dragonParams.launch_payload_vol.cubic_feet} cubic feet,
          </span>
          , return payload mass:{" "}
          <span>
            {" "}
            {dragonParams.return_payload_mass.kg} kg or{" "}
            {dragonParams.return_payload_mass.lb} lb
          </span>
          , return payload vol:{" "}
          <span>
            {" "}
            {dragonParams.return_payload_vol.cubic_meters} cubic meters or{" "}
            {dragonParams.return_payload_vol.cubic_feet} cubic feet{" "}
          </span>
          , pressurized capsule:{" "}
          <span>
            {" "}
            {dragonParams.pressurized_capsule.payload_volume.cubic_meters} cubic
            meters or{" "}
            {dragonParams.pressurized_capsule.payload_volume.cubic_feet} cubic
            feet
          </span>
          , type: <span> {dragonParams.type} </span>, crew capacity:{" "}
          <span> {dragonParams.crew_capacity} </span>, sidewall angle deg:
          <span> {dragonParams.sidewall_angle_deg} </span>, orbit duration yr:{" "}
          {dragonParams.orbit_duration_yr}, dry mass kg:{" "}
          {dragonParams.dry_mass_kg}, dry mass lb: {dragonParams.dry_mass_lb}.
        </p>
      </div>
      <div className="links">
        <a href={dragonParams.wikipedia}> Go to wikipedia </a>
        <Link to={"/"}> Go back </Link>
        {user && (
          // (dragons.length === 0 ? (
          //   <span onClick={favorites}> Add to fav </span>
          // ) : (
          //   <Link to="/favorites">Go to fav</Link>
          // ))
          <span onClick={favorites}> Add to fav </span>
        )}
      </div>
    </div>
  ) : (
    <div className="load">
      <h1>Loading...</h1>
      <AiOutlineLoading3Quarters size={20} className="icon" />
    </div>
  );
};
