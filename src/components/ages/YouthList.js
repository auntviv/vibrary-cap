import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const YouthList = () => {
  const [youths, setYouths] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/books?ageId=1")
      .then((res) => res.json())
        // when this comes back we need to convert jsonstring into actual JavaScript
      .then((agesArray) => {
        setYouths(agesArray);
      });
  }, []);

  return (
    <> 
      {youths.map((youthObject) => {

        return (
          <Link to={`/details/${youthObject.id}`}>
            <h1 key={JSON.stringify(youthObject)}>
            <h1>{youthObject?.name}</h1>
            <img src={youthObject?.imageUrl} height="400" width="300"/></h1>{" "}
          </Link>
        );
      })} 
     
    </>
  );
};
