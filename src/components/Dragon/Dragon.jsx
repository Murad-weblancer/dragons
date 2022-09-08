import React from "react";
import "./Dragon.scss";
import { useGetDragonQuery } from "../../redux/rtk/spaceDragonApi";
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {Link,useNavigate} from 'react-router-dom'
export const Dragon = () => {
  const { data, isLoading } = useGetDragonQuery();
  const navigate = useNavigate()
  const goToFull = () =>{
    navigate('/dragon')
  }
  
  return (
    <>
      <div className="dragon-space">
        <Link to='/dragon'>
        <h1> Dragon </h1>
        </Link>
        
      </div>
      {
        !isLoading ? (
            <div className="dragon">
            <div className="dragon-img">
              <img src={data.flickr_images[0]} alt="" onClick={goToFull} />
            </div>
            <div className="dragon-discrip">
                <h3> {data.name} </h3>
                <p> {data.description} </p>
                <ul>
                    <li> - Height: {data.height_w_trunk.meters} meters or {data.height_w_trunk.feet} feer </li>
                    <li>
                        - Dry mass: {data.dry_mass_kg} kg or {data.dry_mass_lb} lb
                    </li>
                </ul>
                <div className="dragon-discrip-link">
                    <a href={data.wikipedia}> Go to wikipedia </a>
                    <Link to="/dragon">Read more</Link>
                </div>
            </div>
          </div>
        ):(
            <div className="load">
                <h1>Loading...</h1>
                <AiOutlineLoading3Quarters size={20} className='icon'/>
            </div>
        )
      }

    </>
  );
};
