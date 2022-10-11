import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mainBody from "../../../styles/Body.module.css";
import getData from "../../../services/getApi";
import { Skeleton } from "@mui/material";

export const MainBody = () => {
  const { id } = useParams();
  const [elephant, setData] = useState({});
  const [Loading, setLoading] = useState(false);

  const getPicture = async () => {
    const result = await fetch(
      `http://acumen-elephantom.herokuapp.com/elephants/id/${id}`
    );
    const details = await result.json();
    const { data } = details;
    setData(data);
    setLoading(true);
  };

  useEffect(() => {
    getPicture();
    // const elephantDisplay = getData(`elephants/id/${id}`).then((res) => {
    //   const resolvedData = res.map((r) => ({
    //     ...r,
    //   }));
    //   setData(resolvedData);
    // });
  }, []);

  return (
    <>
      <div className={mainBody.body}>
        <div className={mainBody.elepant__picture}>
          {Loading ? (
            <img
              className={mainBody.mainbody__img}
              src={elephant.image}
              alt=''
            />
          ) : (
            <Skeleton
              wave='pulsate'
              variant='text'
              height={700}
              sx={{ marginTop: "-150px" }}
            />
          )}
        </div>
        <div className={mainBody.body__text}>
          {Loading ? (
            <h2 className={mainBody.body__heading}>{elephant.name}</h2>
          ) : (
            <Skeleton
              wave='pulsate'
              variant='text'
              width={300}
              height={100}
              sx={{ marginTop: "-150px" }}
            />
          )}

          {Loading ? (
            <p>{elephant.sex}</p>
          ) : (
            <Skeleton
              wave='pulsate'
              variant='text'
              width={100}
              height={50}
              sx={{ marginLeft: "15px", marginTop: "-150px" }}
            />
          )}
        </div>
        <div className={mainBody.body__sub}>
          {Loading ? (
            <h2 className={mainBody.hola}> {elephant.note}</h2>
          ) : (
            <Skeleton
              wave='wave'
              variant='text'
              width={1050}
              height={50}
              sx={{
                marginLeft: "15px",
                marginTop: "10px",
                paddingTop: "105px",
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};
