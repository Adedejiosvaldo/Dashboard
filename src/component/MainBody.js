import React from "react";
import "./Body.css";
import Elepant from "../Assets/[Downloader.la]-62e6c89a58005.jpg";
export const MainBody = () => {
  return (
    <>
      <div className='body'>
        <div className='elepant__picture'>
          <img className='mainbody__img' src={Elepant} alt='' />
        </div>{" "}
        <div className='body__text'>
          <h2 className='body__heading'>Tuffu</h2>
          <p>Female</p>
        </div>
        <div className='body__sub'>
          <h2 className='hola'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            suscipit vel ducimus, beatae fugiat est corporis facere assumenda,
            doloribus placeat quas soluta ex amet expedita atque laborum,
            incidunt aliquam repudiandae.
          </h2>
        </div>
      </div>
    </>
  );
};
